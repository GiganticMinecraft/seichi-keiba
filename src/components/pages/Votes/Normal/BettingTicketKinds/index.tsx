import { Radio, RadioGroup, Stack } from '@chakra-ui/react';

import { BettingTicket } from '@/types/race';

const BettingTicketKinds = () => {
  const tickets = Object.values(BettingTicket);

  return (
    <RadioGroup>
      <Stack direction="row" spacing={4}>
        {tickets.map((ticket) => (
          <Radio key={ticket} value={ticket}>
            {ticket}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default BettingTicketKinds;
