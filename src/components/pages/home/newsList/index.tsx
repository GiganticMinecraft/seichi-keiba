import type { News } from '@/types/news';

import NewsList from './presenter';

const data: News[] = [
  {
    title: 'title',
    contents: ['contents'],
  },
];

const EnhancedNewsList: React.FCX = (props) => (
  <NewsList newsList={data} {...props} />
);

export default EnhancedNewsList;
