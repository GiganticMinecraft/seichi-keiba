import { Heading } from '@chakra-ui/react';

import NewsList from './newsList';

const Home = () => (
  <>
    <Heading as="h2" textAlign="center" size={{ base: 'md', xl: 'xl' }}>
      お知らせ
    </Heading>
    <NewsList className="mt-2" />
  </>
);

export default Home;
