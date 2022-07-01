import { Select } from '@chakra-ui/react';
import { Field } from 'formik';

import { Race } from '@/types/race';

type Props = {
  races: Race[];
  formStateName: string;
};

const SelectRace = ({ races, formStateName }: Props) => (
  <Field as={Select} name={formStateName}>
    {races.map((raceItem) => (
      <option
        key={raceItem.number.get()}
        value={raceItem.number.get()}
      >{`${raceItem.number.withSuffix()} ${raceItem.name.get()}`}</option>
    ))}
  </Field>
);

export default SelectRace;
