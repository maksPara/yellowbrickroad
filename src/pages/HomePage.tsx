import About from '../components/About';
import OurNumbers from '../components/OurNumbers';
import Problem from '../components/Problem';
import Solution from '../components/Solution';

const HomePage = () => {
  return (
    <main className="flex-grow bg-amber-50 p-4">
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
