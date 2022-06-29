import { CourseTypes, race } from '@/types/race';

import SelectRace from './presenter';

// TODO: receive props or context!
const data: race.Race[] = [
  {
    number: race.RaceNumber.of(9),
    name: race.RaceName.of('文月賞'),
    startDateTime: new Date(),
    distance: race.RaceDistance.of(2000),
    course: CourseTypes.Dirt,
    horses: [],
  },
  {
    number: race.RaceNumber.of(10),
    name: race.RaceName.of('マインサマーダッシュ'),
    startDateTime: new Date(),
    distance: race.RaceDistance.of(1000),
    course: CourseTypes.Turf,
    horses: [],
  },
  {
    number: race.RaceNumber.of(11),
    name: race.RaceName.of('整地鯖6周年記念杯'),
    startDateTime: new Date(),
    distance: race.RaceDistance.of(1000),
    course: CourseTypes.Jump,
    horses: [],
  },
];

type Props = { formStateName: string };

const EnhancedSelectRace = ({ formStateName }: Props) => (
  <SelectRace races={data} formStateName={formStateName} />
);

export default EnhancedSelectRace;
