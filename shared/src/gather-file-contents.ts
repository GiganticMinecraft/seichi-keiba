// eslint-disable-next-line import/no-extraneous-dependencies
import {
  makeStringFlag,
  makeCommand,
  reduceFlag,
  makeStringArgument,
  makePositionalArguments,
} from 'catacli';
import { statSync, readdirSync, readFileSync, writeFileSync } from 'fs';
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
  handler: (args, opts) => {
    const sourceDir = args.sourceFolder.value;
    const encoding = 'utf-8';

    readdirSync(sourceDir, { encoding })
      .map((file) => `${sourceDir}/${file}`)
      .filter((path) => statSync(path).isFile())
      .filter((path) => {
        const ext = opts.extension.value;

        // 拡張子が指定されていなければtrue、指定されていればその拡張子のファイルかどうかを返す
        return !ext || extname(path).toLowerCase() === ext;
      })
      .map((file) => readFileSync(file, { encoding }))
      .forEach((content) =>
        writeFileSync(opts.outputFile.value ?? defaultOutputFile, content, {
          flag: 'a',
        }),
      );
  },
});

command(process.argv.splice(2));
