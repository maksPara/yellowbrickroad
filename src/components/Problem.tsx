import Heading from './ui/Heading';
import Section from './ui/Section';

const Problem = () => {
  return (
    <Section>
      <Heading text="PROBLEM" />
      <p className="text-2xl sm:text-3xl">
        Founders and CTOs have a lot on their plates
      </p>
      <p className="text-xl sm:text-2xl">
        connecting business and tech, getting engineers to take ownership, and
        balancing value with cost.
      </p>
      <p className="text-2xl sm:text-3xl">
        Finding people who make their lives easier
      </p>
      <p className="text-xl sm:text-2xl">
        those who take ownership, work independently, and truly understand the
        business and product — is no small task.
      </p>
    </Section>
  );
};

export default Problem;
