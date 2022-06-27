import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

import type { News } from '@/types/news';

type Props = {
  newsList?: News[];
};

const NewsList: React.FCX<Props> = ({
  newsList = [],
  className = undefined,
}) => (
  <div className={className}>
    {newsList.length ? (
      <Accordion defaultIndex={[0]} allowMultiple>
        {newsList.map((news) => (
          <AccordionItem>
            <h3>
              <AccordionButton>
                <Box flex={1} textAlign="left">
                  {news.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              {news.contents.map((str) => (
                <Text>{str}</Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    ) : (
      <Alert status="info">
        <AlertIcon />
        お知らせはありません。
      </Alert>
    )}
  </div>
);

export default NewsList;
