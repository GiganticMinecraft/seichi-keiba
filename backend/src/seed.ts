import { CourseType } from '@prisma/client';
import { ulid } from 'ulid';

import { connectToDb, disconnectFromDb, prisma } from '@/prisma';

const addHorses = async () => {
  const data = [
    { name: 'マスクメロン' },
    { name: 'スギノコンデンサー' },
    { name: 'トライアゲイン' },
    { name: 'ドリームラン' },
    { name: 'レッツゴーチェリー' },
  ];

  return Promise.all(
    data.map(({ name }) =>
      prisma.horse.upsert({
        create: { id: ulid(), name },
        update: {},
        where: { name },
      }),
    ),
  );
};

const addJockeys = async () => {
  const data = [
    { name: '騎手' },
    { name: 'っぽい' },
    { name: '名前が' },
    { name: '思い' },
    { name: '浮かばない' },
  ];

  return Promise.all(
    data.map(({ name }) =>
      prisma.jockey.upsert({
        create: { id: ulid(), name },
        update: {},
        where: { name },
      }),
    ),
  );
};

const addRaces = async () => {
  const data = [
    {
      name: 'デイリーカップ',
      date: new Date(),
      order: 1,
      distance: 1600,
      course: CourseType.TURF,
    },
    {
      name: '睦月賞',
      date: new Date(),
      order: 2,
      distance: 2400,
      course: CourseType.DIRT,
    },
    {
      name: '博多記念',
      date: new Date(),
      order: 3,
      distance: 3200,
      course: CourseType.JUMP,
    },
  ];

  return Promise.all(
    data.map((values) =>
      prisma.race.upsert({
        create: { ...values, id: ulid() },
        update: {},
        where: { name: values.name },
      }),
    ),
  );
};

const addHorseEntries = async (
  horseIds: string[],
  jockeyIds: string[],
  raceIds: string[],
) => {
  const selectRandomly = (list: string[]) =>
    list[Math.floor(Math.random() * list.length)];

  const data = [
    { frame: 1, number: 1, id: '01G8K01H6T72HJ9E6Z4PM7HZWJ' },
    { frame: 2, number: 2, id: '01G8K01H6VA36WZGA797YBVWS8' },
    { frame: 3, number: 3, id: '01G8JZVB9XEWZCBTSXKGS8VWM8' },
    { frame: 4, number: 4, id: '01G8JZVB9YTG02BJCQN82CHW3W' },
    { frame: 5, number: 5, id: '01G8JZVB9ZH9HTZ7KJNWHDY7S0' },
  ];

  return Promise.all(
    data.map(({ frame, number, id }) =>
      prisma.horseEntry.upsert({
        create: {
          id,
          frame,
          number,
          horse_id: selectRandomly(horseIds),
          jockey_id: selectRandomly(jockeyIds),
          race_id: selectRandomly(raceIds),
        },
        update: {},
        where: { id },
      }),
    ),
  );
};

const addNews = async () => {
  const data = [
    {
      title: 'お知らせ1',
      contents: ['内容です。'],
      closed_at: null,
    },
    {
      title: 'お知らせ2',
      contents: ['内容です。', '内容です。'],
      closed_at: new Date(2100, 10, 1, 10, 0),
    },
    {
      title: 'お知らせ3',
      contents: ['内容です。', '内容です。', '内容です。'],
      closed_at: new Date(2000, 3, 1, 1, 20),
    },
  ];

  return Promise.all(
    data.map((value) =>
      prisma.news.upsert({
        create: { ...value, id: ulid(), contents: value.contents.join('\n') },
        update: {},
        where: { title: value.title },
      }),
    ),
  );
};

const seed = async () => {
  await connectToDb();

  await Promise.all([addHorses(), addJockeys(), addRaces(), addNews()]).then(
    async ([horses, jockeys, races]) =>
      addHorseEntries(
        horses.map((v) => v.id),
        jockeys.map((v) => v.id),
        races.map((v) => v.id),
      ),
  );
};

seed()
  .then(() => console.log('Seed Completed'))
  .catch((e) => console.log('The error has occured:', e))
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => disconnectFromDb());
