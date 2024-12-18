import Heading from './ui/Heading';
import Section from './ui/Section';

const Problem = () => {
  return (
    <Section>
      <Heading text="PROBLEM" />
      <p className="bg-secondary text-primary mb-2 inline-block rounded-full p-2 px-4 text-center text-lg font-bold md:text-xl">
        Founders and CTOs have a lot on their plates
      </p>
      <p className="mb-5 text-base md:text-lg">
        connecting business and tech, getting engineers to take ownership, and
        balancing value with cost.
      </p>
      <p className="bg-secondary text-primary inline-block rounded-full p-2 px-4 text-lg font-bold md:text-xl">
        Finding people who make their lives easier
      </p>
      <p className="mb-5 text-base md:text-lg">
        those who take ownership, work independently, and truly understand the
        business and product — is no small task.
      </p>
    </Section>
  );
};

export default Problem;
