import { BiCalculator } from 'react-icons/bi';
import {
  MdOutlineHowToVote,
  MdOutlineCreditCard,
  MdOutlineChat,
  MdOutlineLock,
} from 'react-icons/md';

import paths from '@/paths';

import Home from './presenter';

import type { MenuItem } from './Menu';

const playersMenuItems: MenuItem[] = [
  {
    title: '通常投票',
    color: 'orange',
    iconType: MdOutlineHowToVote,
    to: `${paths.votes.index}/${paths.votes.normal}`,
  },
  {
    title: 'オッズ投票',
    color: 'orange',
    iconType: BiCalculator,
    to: `${paths.votes.index}/${paths.votes.odds}`,
  },
  {
    title: '投票内容照会',
    color: 'green',
    iconType: MdOutlineCreditCard,
    to: `${paths.show.index}/${paths.show.votes}`,
  },
  {
    title: 'レース情報照会',
    color: 'green',
    iconType: MdOutlineChat,
    to: `${paths.show.index}/${paths.show.races}`,
  },
  {
    title: '登録内容修正・退会',
    color: 'gray',
    iconType: MdOutlineLock,
    to: `${paths.show.index}/${paths.show.account}`,
  },
];

const adminMenuItems: MenuItem[] = [
  {
    title: '投票内容照会',
    color: 'green',
    iconType: MdOutlineHowToVote,
  },
  {
    title: 'レース情報登録',
    color: 'green',
    iconType: MdOutlineHowToVote,
  },
];

const EnhancedHome = () => (
  <Home playersMenuItems={playersMenuItems} adminMenuItems={adminMenuItems} />
);

export default EnhancedHome;
