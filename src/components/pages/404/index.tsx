import { Box, Heading, Text } from '@chakra-ui/react';

import GoHome from '@/components/common/goHome';

const NotFound = () => (
  <Box textAlign="center" py={10} px={6}>
    <Heading
      display="inline-block"
      as="h2"
      size="2xl"
      bgGradient="linear(to-r, teal.400, teal.600)"
      backgroundClip="text"
    >
      404
    </Heading>
    <Text fontSize="18px" mt={3} mb={2}>
      Not Found
    </Text>
    <Text color="gray.500" mb={6}>
      お探しのページは見つかりませんでした。
    </Text>

    <GoHome />
  </Box>
);

export default NotFound;
