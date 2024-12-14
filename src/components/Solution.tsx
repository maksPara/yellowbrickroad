import Heading from './ui/Heading';

const Solution = () => {
  return (
    <section className="mt-20 p-4">
      <Heading text="SOLUTION" />
      <ul className="steps steps-vertical sm:steps-horizontal w-full">
        <li className="step step-primary">
          <p>FIND</p>
          <span>
            Discover top talent through networking and targeted headhunting FIND
          </span>
        </li>
        <li className="step">
          <p>EVALUATE</p>
          <span>
            Conduct in-depth evaluations of candidate alignment with startup
            stages, from 0 to 1, MVP development, Series A, B, and beyond
            EVALUATE
          </span>
        </li>
        <li className="step">
          <p>HIRE</p>
          <span>
            The right people, who can make all difference - those who take
            ownership, work independently, and truly understand the business and
            product HIRE
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Solution;
