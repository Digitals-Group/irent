import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <main className="bg-bg-gray min-h-[90vh]">{children}</main>;
};

export default Layout;
