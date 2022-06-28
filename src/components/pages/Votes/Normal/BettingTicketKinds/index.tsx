import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { Field } from 'formik';

import { BettingTicket } from '@/types/race';

type Props = {
  formStateName: string;
};

const BettingTicketKinds = ({ formStateName }: Props) => {
  const tickets = Object.values(BettingTicket);

  return (
    <RadioGroup name={formStateName}>
      <Stack direction="row" spacing={4}>
        {tickets.map((ticket) => (
          <Field as={Radio} key={ticket} value={ticket}>
            {ticket}
          </Field>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default BettingTicketKinds;
