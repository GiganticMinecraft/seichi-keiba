import Menu, { MenuItem } from '@/components/common/Menu';

type Props = {
  items: MenuItem[];
};

const Show = ({ items }: Props) => <Menu items={items} />;

export default Show;
