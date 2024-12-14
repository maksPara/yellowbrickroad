import Heading from './ui/Heading';
import Section from './ui/Section';

const Solution = () => {
  return (
    <Section>
      <Heading text="SOLUTION" />
      <ul className="steps steps-vertical sm:steps-horizontal w-full">
        <li className="step step-primary">
          <p>FIND</p>
          <span>
            Discover top talent through networking and targeted headhunting
          </span>
        </li>
        <li className="step">
          <p>EVALUATE</p>
          <span>
            Conduct in-depth evaluations of candidate alignment with startup
            stages, from 0 to 1, MVP development, Series A, B, and beyond
          </span>
        </li>
        <li className="step">
          <p>HIRE</p>
          <span>
            The right people, who can make all difference - those who take
            ownership, work independently, and truly understand the business and
            product
          </span>
        </li>
      </ul>
    </Section>
  );
};

export default Solution;
