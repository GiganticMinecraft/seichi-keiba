import Provider from '@/components/chakraProvider';

type Props = {
  children: React.ReactNode;
};

const EnhancedProvider = ({ children }: Props) => (
  <Provider>{children}</Provider>
);

export default EnhancedProvider;
