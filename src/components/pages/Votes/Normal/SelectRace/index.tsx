import {
  CourseTypes,
  RaceNumber,
  RaceDistance,
  RaceName,
  Race,
} from '@/types/race';

import SelectRace from './presenter';

// TODO: receive props or context!
const data: Race[] = [
  {
    number: RaceNumber.of(9),
    name: RaceName.of('文月賞'),
    startDateTime: new Date(),
    distance: RaceDistance.of(2000),
    course: CourseTypes.Dirt,
    horses: [],
  },
  {
    number: RaceNumber.of(10),
    name: RaceName.of('マインサマーダッシュ'),
    startDateTime: new Date(),
    distance: RaceDistance.of(1000),
    course: CourseTypes.Turf,
    horses: [],
  },
  {
    number: RaceNumber.of(11),
    name: RaceName.of('整地鯖6周年記念杯'),
    startDateTime: new Date(),
    distance: RaceDistance.of(1000),
    course: CourseTypes.Jump,
    horses: [],
  },
];

type Props = { formStateName: string };

const EnhancedSelectRace = ({ formStateName }: Props) => (
  <SelectRace races={data} formStateName={formStateName} />
);

export default EnhancedSelectRace;
