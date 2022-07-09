// eslint-disable-next-line import/no-extraneous-dependencies
import {
  makeStringFlag,
  makeCommand,
  reduceFlag,
  makeStringArgument,
  makePositionalArguments,
} from 'catacli';
import { stat, readdir, readFile, writeFile } from 'fs/promises';
import { extname } from 'path';

const sourceFolder = makeStringArgument('sourceFolder');

const defaultOutputFile = './schema.graphql';
const outputFile = makeStringFlag('outputFile', {
  default: defaultOutputFile,
  alias: 'o',
});
const fileExtensions = makeStringFlag('extension', {
  alias: 'e',
});

const argDefinitions = makePositionalArguments(sourceFolder);
const flagDefinitions = reduceFlag(outputFile, fileExtensions);

const command = makeCommand({
  name: 'gather-file-contents',
  usage: 'sourceDirectory -o outputFile',
  positionalArguments: argDefinitions,
  flag: flagDefinitions,
  handler: async (args, opts) => {
    const sourceDir = args.sourceFolder.value;
    const encoding = 'utf-8';

    // 空文字を書き込んで、ファイルの中身を消す
    await writeFile(opts.outputFile.value ?? defaultOutputFile, '');

    await readdir(sourceDir, { encoding })
      .then((files) =>
        files
          .map((file) => `${sourceDir}/${file}`)
          .filter(async (path) => (await stat(path)).isFile())
          .filter((path) => {
            const ext = opts.extension.value?.toLowerCase();

            // 拡張子が指定されていなければtrue、指定されていればその拡張子のファイルかどうかを返す
            return !ext || extname(path).toLowerCase().slice(1) === ext;
          }),
      )
      .then(async (files) =>
        Promise.all(files.map(async (file) => readFile(file, { encoding }))),
      )
      .then(async (files) =>
        Promise.all(
          files.map(async (file) =>
            writeFile(opts.outputFile.value ?? defaultOutputFile, file, {
              // 上書きではなく追記
              flag: 'a',
            }),
          ),
        ),
      );
  },
});

command(process.argv.splice(2));
