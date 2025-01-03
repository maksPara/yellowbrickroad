import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import Contact from '../components/Contact';
import OurNumbers from '../components/OurNumbers';
import OurService from '../components/OurService';
import Pricing from '../components/Pricing';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Testimonials from '../components/Testimonials';
import TrustedUs from '../components/TrustedUs';
import WayOfWork from '../components/WayOfWork';
import OurTeam from '../components/OurTeam';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <main className="max-w-screen-3xl flex-grow bg-amber-50 p-3 sm:p-4 md:p-6 xl:p-10">
        <About />
        <p className="pt-16 text-xl">
          AI and software engineers with the ownership needed to thrive in
          fast-paced startups are rare. <br />
          We are a headhunting boutique dedicated to finding them.
        </p>
        <Problem />
        <Solution />
        <OurNumbers />
        <OurService />
        <WayOfWork />
        <Pricing />
        <TrustedUs />
        <CaseStudies />
        <Testimonials />
      </main>
      <OurTeam />
      <footer className="w-full">
        <Contact />
      </footer>
    </div>
  );
};

export default HomePage;
