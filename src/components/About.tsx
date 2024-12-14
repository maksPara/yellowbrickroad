const About = () => {
  return (
    <section
      className="flex flex-col items-center gap-8 p-2 md:flex-row md:p-8"
      id="about"
    >
      <img
        src="/src/assets/img/logo.webp"
        alt="Yellow Brick Road logo"
        className="size-3/4 rounded-full md:size-2/5"
      />
      <div className="flex flex-col justify-center gap-3 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          yellow brick road
        </h1>
        <p className="text-3xl">
          Better products. Happier people. Stronger Economies.
        </p>
      </div>
    </section>
  );
};

export default About;
