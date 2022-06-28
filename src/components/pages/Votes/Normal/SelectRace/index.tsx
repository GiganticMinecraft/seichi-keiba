import { CourseTypes, race } from '@/types/race';

import SelectRace from './presenter';

// TODO: receive props or context!
const data: race.Race[] = [
  {
    number: race.RaceNumber.of(10),
    name: race.RaceName.of('race'),
    startDateTime: new Date(),
    distance: race.RaceDistance.of(2000),
    course: CourseTypes.Jump,
  },
];

const EnhancedSelectRace = () => <SelectRace races={data} />;

export default EnhancedSelectRace;
