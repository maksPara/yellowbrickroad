import Section from './ui/Section';
import portraitImg from './../assets/img/portrait.webp';

const OurTeam = () => {
  return (
    <Section classNames="mt-12 w-full flex justify-end md:mt-6 xl:pr-12 max-w-screen-3xl">
      <div className="flex flex-col sm:flex-row sm:gap-5">
        <div className="relative flex grow flex-col items-end justify-center p-3 text-center sm:pr-0 sm:text-right">
          <p className="sm:mt-20 sm:w-3/4 md:mt-28">
            I&#39;m <b>Kacper Hołdys</b>, a headhunter with 18 years of
            experience and founder of Yellow Brick Road. I&#39;m committed to
            connecting outstanding individuals with work that makes them
            happier, leading to better products and stronger economies.
          </p>
          <div className="hidden h-2 w-36 rounded-full bg-primary md:block lg:w-48 xl:w-64"></div>
        </div>
        <img
          src={portraitImg}
          alt="Portrait of Kacper Hołdys"
          className="z-10 w-full sm:w-1/2 sm:max-w-96"
        />
      </div>
    </Section>
  );
};

export default OurTeam;
