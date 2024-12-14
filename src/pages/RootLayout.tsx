import { Outlet } from 'react-router';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
