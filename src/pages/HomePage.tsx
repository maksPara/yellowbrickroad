import About from '../components/About';
import OurNumbers from '../components/OurNumbers';
import Problem from '../components/Problem';
import Solution from '../components/Solution';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <main className="max-w-screen-3xl flex-grow bg-amber-50 p-3 sm:p-4 md:p-6 xl:p-10">
        <About />
        <Problem />
        <Problem />
        <Problem />
        <Problem />
        <Solution />
        <OurNumbers />
      </main>
    </div>
  );
};

export default HomePage;
