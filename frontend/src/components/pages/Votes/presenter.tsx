import Menu, { MenuItem } from '@/components/common/Menu';

type Props = {
  items: MenuItem[];
};

const Votes = ({ items }: Props) => <Menu items={items} />;

export default Votes;
