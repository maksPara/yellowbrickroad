const About = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-8 md:flex-row md:p-8 2xl:gap-16"
      id="about"
    >
      <img
        src="/src/assets/img/logo.webp"
        alt="Yellow Brick Road logo"
        className="border-primary size-2/3 max-w-xl rounded-full border-4 p-0.5 md:size-2/5 md:p-1"
      />
      <div className="flex flex-col justify-center gap-3 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          yellow brick road
        </h1>
        <p className="text-2xl sm:text-3xl">
          Better products. Happier people. Stronger Economies.
        </p>
      </div>
    </section>
  );
};

export default About;
