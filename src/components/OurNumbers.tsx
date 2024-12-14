import Heading from './ui/Heading';
import Section from './ui/Section';

const OurNumbers = () => {
  return (
    <Section>
      <Heading text="OUR NUMBERS" />
      <div className="stats stats-vertical md:stats-horizontal shadow md:w-full">
        <div className="stat bg-secondary">
          <div className="stat-value text-primary">8 weeks</div>
          <div className="stat-title text-base-content">
            the average time to
            <br />
            complete a project
          </div>
        </div>

        <div className="stat bg-primary">
          <div className="stat-figure text-secondary"></div>
          <div className="stat-value text-secondary">25%</div>
          <div className="stat-title text-secondary">
            of the candidates
            <br />
            we present
          </div>
        </div>

        <div className="stat bg-secondary">
          <div className="stat-figure text-primary"></div>
          <div className="stat-value text-primary">8</div>
          <div className="stat-title text-base-content">
            candidates are presented
            <br />
            on average to fill a role
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurNumbers;
