import Heading from './ui/Heading';
import Section from './ui/Section';

const Solution = () => {
  return (
    <Section>
      <Heading text="SOLUTION" />
      <ul className="flex w-full flex-col gap-6 lg:flex-row lg:gap-4">
        <li className="flex basis-1/3 flex-col items-center gap-1">
          <span className="bg-secondary flex size-8 items-center justify-center rounded-full text-amber-50">
            01
          </span>
          <p className="text-primary text-2xl font-bold">FIND</p>
          <span className="text-center">
            Discover top talent through networking and targeted headhunting
          </span>
        </li>
        <li className="flex basis-1/3 flex-col items-center gap-1">
          <span className="bg-secondary flex size-8 items-center justify-center rounded-full text-amber-50">
            02
          </span>
          <p className="text-primary text-2xl font-bold">EVALUATE</p>
          <span className="text-center">
            Conduct in-depth evaluations of candidate alignment with startup
            stages, from 0 to 1, MVP development, Series A, B, and beyond
          </span>
        </li>
        <li className="flex basis-1/3 flex-col items-center gap-1">
          <span className="bg-secondary flex size-8 items-center justify-center rounded-full text-amber-50">
            03
          </span>
          <p className="text-primary text-2xl font-bold">HIRE</p>
          <span className="text-center">
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
