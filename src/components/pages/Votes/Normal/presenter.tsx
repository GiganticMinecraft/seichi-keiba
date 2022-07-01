import { FormControl, FormLabel } from '@chakra-ui/react';
import { Formik, Form, Field, FieldInputProps } from 'formik';

import { RaceNumber } from '@/types/race';

import BettingTicketKinds from './BettingTicketKinds';
import SelectRace from './SelectRace';

const Normal = () => {
  type FieldProps = { field: FieldInputProps<number> };

  return (
    <Formik
      initialValues={{
        raceNumber: RaceNumber.of(1).get(),
        ticketKind: '',
      }}
      onSubmit={() => {}} // TODO: impl
    >
      {(_props) => (
        <Form>
          <Field name="raceNumber">
            {({ field }: FieldProps) => (
              <FormControl>
                <FormLabel htmlFor="raceNumber">
                  レースを選択してください
                </FormLabel>
                <SelectRace formStateName={field.name} />
              </FormControl>
            )}
          </Field>
          <Field name="ticketKind">
            {({ field }: FieldProps) => (
              <FormControl>
                <FormLabel htmlFor="ticketKind">
                  券種を選択してください
                </FormLabel>
                <BettingTicketKinds formStateName={field.name} />
              </FormControl>
            )}
          </Field>
        </Form>
      )}
    </Formik>
  );
};

export default Normal;
