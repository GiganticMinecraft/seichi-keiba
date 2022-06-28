import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

import { race } from '@/types/race';

type Props = {
  races: race.Race[];
};

const RaceRadio = ({ races }: Props) => (
  <RadioGroup>
    <Stack>
      {races.map((raceItem) => (
        <Radio
          key={raceItem.number.get()}
          value={raceItem.number.withSuffix()}
        >{`${raceItem.number.withSuffix()} ${raceItem.name.get()}`}</Radio>
      ))}
    </Stack>
  </RadioGroup>
);

export default RaceRadio;
