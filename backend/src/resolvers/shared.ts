import { UpdateHorseEntryInput } from '@/gen-apollo';

const raceIncludeOptions = {
  horses: {
    include: { jockey: true, horse: true },
  },
};

const generateUpdateHorseEntryData = (input: UpdateHorseEntryInput) => ({
  frame: input.frame || undefined,
  number: input.number || undefined,
  horse_id: input.horse_id || undefined,
  jockey_id: input.jockey_id || undefined,
  race_id: input.race_id || undefined,
});

export { raceIncludeOptions, generateUpdateHorseEntryData };
