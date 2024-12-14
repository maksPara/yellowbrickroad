const Heading = ({ text }: { text: string }) => {
  return (
    <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">{text}</h2>
  );
};

export default Heading;
