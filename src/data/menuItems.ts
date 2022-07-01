import { BiCalculator } from 'react-icons/bi';
import {
  MdOutlineChat,
  MdOutlineCreditCard,
  MdOutlineHowToVote,
  MdOutlineLock,
} from 'react-icons/md';

import { MenuItem } from '@/components/common/Menu';
import paths from '@/data/paths';

export const playersVote: MenuItem[] = [
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
];

export const playersShow: MenuItem[] = [
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

export const admins: MenuItem[] = [
  {
    title: '投票内容照会',
    color: 'green',
    iconType: MdOutlineHowToVote,
    to: `${paths.admins.index}/${paths.admins.votes}`,
  },
  {
    title: 'レース情報登録',
    color: 'green',
    iconType: MdOutlineHowToVote,
    to: `${paths.admins.index}/${paths.admins.races}`,
  },
];
