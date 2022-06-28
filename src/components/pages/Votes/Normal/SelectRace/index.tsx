import { CourseTypes, race } from '@/types/race';

import SelectRace from './presenter';

// TODO: receive props or context!
const data: race.Race[] = [
  {
    number: race.RaceNumber.of(1),
    name: race.RaceName.of('race'),
    startDateTime: new Date(),
    distance: race.RaceDistance.of(2000),
    course: CourseTypes.Jump,
  },
  {
    number: race.RaceNumber.of(2),
    name: race.RaceName.of('race'),
    startDateTime: new Date(),
    distance: race.RaceDistance.of(2000),
    course: CourseTypes.Jump,
  },
];

type Props = { formStateName: string };

const EnhancedSelectRace = ({ formStateName }: Props) => (
  <SelectRace races={data} formStateName={formStateName} />
);

export default EnhancedSelectRace;
