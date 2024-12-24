import Heading from './ui/Heading';
import Section from './ui/Section';

const Solution = () => {
  return (
    <Section>
      <Heading text="SOLUTION" />
      <ul className="flex w-full flex-col gap-6 lg:flex-row lg:gap-4">
        <li className="flex basis-1/3 flex-col items-center gap-1">
          <span className="flex size-8 items-center justify-center rounded-full bg-secondary font-bold text-amber-50 shadow-md">
            01
          </span>
          <p className="text-2xl font-bold text-primary">FIND</p>
          <span className="text-center">
            discover top talent through networking and targeted headhunting
          </span>
        </li>
        <li className="flex basis-1/3 flex-col items-center gap-1">
          <span className="flex size-8 items-center justify-center rounded-full bg-secondary font-bold text-amber-50 shadow-md">
            02
          </span>
          <p className="text-2xl font-bold text-primary">EVALUATE</p>
          <span className="text-center">
            conduct in-depth evaluations of candidate alignment with startup
            stages, from 0 to 1, MVP development, Series A, B, and beyond
          </span>
        </li>
        <li className="flex basis-1/3 flex-col items-center gap-1">
          <span className="flex size-8 items-center justify-center rounded-full bg-secondary font-bold text-amber-50 shadow-md">
            03
          </span>
          <p className="text-2xl font-bold text-primary">HIRE</p>
          <span className="text-center">
            the right people, who can make all the difference - those who take
            ownership, work independently, and truly understand the business and
            the product
          </span>
        </li>
      </ul>
    </Section>
  );
};

export default Solution;
