import * as dateFns from 'date-fns';

class News {
  title: string;

  contents: string[];

  startDate: Date;

  endDate: Date;

  constructor(
    title: string,
    contents: string[],
    startDate: string,
    endDate: string,
  ) {
    // TODO: catch errors
    const start = dateFns.parse(startDate, 'yyyy-MM-dd', new Date());
    const end = dateFns.parse(endDate, 'yyyy-MM-dd', new Date());

    if (start >= end) {
      // TODO: throw error
      throw Error('start <= end');
    }

    this.title = title;
    this.contents = contents;
    this.startDate = start;
    this.endDate = end;
  }
}

export default News;
