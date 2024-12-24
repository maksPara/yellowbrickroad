import { useState } from 'react';
import logoLarge from './../assets/img/logo.webp';
import logoSmall from './../assets/img/logoSmall.webp';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      className="flex scroll-mt-20 flex-col items-center justify-center gap-8 md:flex-row md:p-8 2xl:gap-16"
      id="about"
    >
      <div
        className={`aspect-square size-2/3 max-w-md rounded-full border-4 border-primary p-0.5 sm:min-w-64 md:size-1/2 md:p-1 ${isLoaded ? '' : 'skeleton'}`}
      >
        <img
          srcSet={`${logoSmall} 386w, ${logoLarge} 772w`}
          sizes="67vw"
          alt="Yellow Brick Road Logo"
          className={`rounded-full`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div className="flex flex-col justify-center gap-3 text-center">
        <h1 className="text-4xl font-bold md:text-5xl">yellow brick road</h1>
        <h2 className="text-2xl">
          Better products. Happier people. Stronger economies.
        </h2>
      </div>
    </section>
  );
};

export default About;
