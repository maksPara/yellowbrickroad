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
          <img
            src={headhunting}
            alt="Headhunting"
            className="size-16 rounded-full shadow-xl"
          />
          <div className="flex flex-col items-center justify-center sm:items-start">
            <h3 className="text-lg font-bold">headhunting</h3>
            <ul className="ml-7 list-disc">
              <li>
                targeted search for passive top talent (a blend of technology
                and networking)
              </li>
              <li>market research</li>
              <li>employee value proposition</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
          <img
            src={consulting}
            alt="Consulting"
            className="size-16 rounded-full shadow-xl"
          />
          <div className="flex w-full flex-col items-center justify-center sm:items-start">
            <h3 className="text-center text-lg font-bold">consulting</h3>
            <ul className="ml-7 list-disc self-start">
              <li>ideal candidate fit</li>
              <li>salary benchmarking</li>
              <li>interview structure</li>
              <li>offer closure probability</li>
              <li>phone references</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
          <img
            src={process}
            alt="Process"
            className="size-16 rounded-full shadow-xl"
          />
          <div className="flex w-full flex-col items-center justify-center sm:items-start">
            <h3 className="text-center text-lg font-bold">
              process facilitation
            </h3>
            <ul className="ml-7 list-disc self-start">
              <li>plan the process or integrate it into yours</li>
              <li>only engage preselected candidates</li>
              <li>record video interviews</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurService;
