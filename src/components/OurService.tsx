import Heading from './ui/Heading';
import Section from './ui/Section';
import headhunting from './../assets/img/headhunting.png';
import consulting from './../assets/img/consulting.png';
import process from './../assets/img/process.png';

const OurService = () => {
  return (
    <Section>
      <Heading text="OUR SERVICE" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
          <img src={headhunting} alt="Headhunting" className="size-16" />
          <div className="flex flex-col items-center justify-center sm:items-start">
            <h3 className="text-lg font-bold">headhunting</h3>
            <p className="text-center sm:text-left">
              targeted search for passive top talent (blend of technology and
              networking) market research crafting and delivering an employee
              value proposition
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
          <img src={consulting} alt="Consulting" className="size-16" />
          <div className="flex flex-col items-center justify-center sm:items-start">
            <h3 className="text-lg font-bold">consulting</h3>
            <p className="text-center sm:text-left">
              ideal candidate fit salary benchmarking interview structure offer
              closure probability phone references
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
          <img src={process} alt="Process" className="size-16" />
          <div className="flex flex-col items-center justify-center sm:items-start">
            <h3 className="text-lg font-bold">process facilitation</h3>
            <p className="text-center sm:text-left">
              plan the process for you or integrate it into yours only engage
              preselected candidates control the process record video interviews
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurService;
