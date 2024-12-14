import About from '../components/About';
import OurNumbers from '../components/OurNumbers';
import Problem from '../components/Problem';
import Solution from '../components/Solution';

const HomePage = () => {
  return (
    <main className="flex-grow bg-amber-50 p-3 sm:p-4 md:p-6 xl:p-10">
      <About />
      <Problem />
      <Problem />
      <Problem />
      <Problem />
      <Solution />
      <OurNumbers />
    </main>
  );
};

export default HomePage;
