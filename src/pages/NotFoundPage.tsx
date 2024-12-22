import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex grow flex-col items-center justify-center gap-3 bg-amber-50">
        <h3 className="text-5xl">404</h3>
        <h3 className="text-xl">Page Not Found</h3>
        <Link to="/" className="link text-primary">
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
