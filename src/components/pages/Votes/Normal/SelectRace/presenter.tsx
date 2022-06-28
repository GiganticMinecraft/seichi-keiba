import { Select } from '@chakra-ui/react';

import { race } from '@/types/race';

type Props = {
  races: race.Race[];
};

const SelectRace = ({ races }: Props) => (
  <Select>
    {races.map((raceItem) => (
      <option
        key={raceItem.number.get()}
        value={raceItem.number.get()}
      >{`${raceItem.number.withSuffix()} ${raceItem.name.get()}`}</option>
    ))}
  </Select>
);

export default SelectRace;
