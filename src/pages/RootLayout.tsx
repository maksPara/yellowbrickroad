import { Outlet } from 'react-router';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <div className="flex min-h-screen justify-center bg-amber-50">
      <div className="flex max-w-[1800px] flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
