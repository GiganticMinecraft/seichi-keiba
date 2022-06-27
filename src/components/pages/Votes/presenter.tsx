import Menu, { MenuItem } from '@/components/common/Menu';

type Props = {
  items: MenuItem[];
};

const Admins = ({ items }: Props) => <Menu items={items} />;

export default Admins;
