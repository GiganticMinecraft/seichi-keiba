import Header from '@/components/common/header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
