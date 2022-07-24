import {
  asHorseName,
  asJockeyName,
  asNaturalNumber,
  asNewsTitle,
  asRaceName,
  fromDate,
} from '@giganticminecraft/seichi-keiba-shared';
import { Horse, HorseEntry, Jockey, News, Race } from '@prisma/client';

const convertToJockey = (jockey: Jockey) => ({
  ...jockey,
  name: asJockeyName(jockey.name),
});

const convertToHorse = (horse: Horse) => ({
  ...horse,
  name: asHorseName(horse.name),
});

const convertToNews = (news: News) => ({
  ...news,
  title: asNewsTitle(news.title),
  closed_at: news.closed_at ? fromDate(news.closed_at) : undefined,
  created_at: fromDate(news.created_at),
  last_updated_at: fromDate(news.last_updated_at),
});

const convertToHorseEntry = (
  entry: HorseEntry & { jockey: Jockey; horse: Horse },
) => ({
  id: entry.id,
  frame: asNaturalNumber(entry.frame),
  number: asNaturalNumber(entry.number),
  jockey: convertToJockey(entry.jockey),
  horse: convertToHorse(entry.horse),
});

const convertToRace = (
  race: Race & {
    horses: (HorseEntry & {
      jockey: Jockey;
      horse: Horse;
    })[];
  },
) => ({
  ...race,
  name: asRaceName(race.name),
  date: fromDate(race.date),
  order: asNaturalNumber(race.order),
  distance: asNaturalNumber(race.distance),
  horses: race.horses.map(convertToHorseEntry),
});

export {
  convertToJockey,
  convertToHorse,
  convertToNews,
  convertToRace,
  convertToHorseEntry,
};
