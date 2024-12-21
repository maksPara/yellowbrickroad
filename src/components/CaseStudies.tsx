import Heading from './ui/Heading';
import Section from './ui/Section';
import livespaceLogo from './../assets/img/livespace-logo.webp';

const CaseStudies = () => {
  return (
    <Section id="caseStudies">
      <Heading text="CASE STUDIES" />
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">Growth and stability</p>
        <img
          src={livespaceLogo}
          alt="Livespace logo"
          className="w-32 md:w-40"
        />
      </div>
      <article className="bg-secondary mt-2 flex flex-col gap-5 rounded-2xl p-3 lg:flex-row lg:p-4">
        <div className="flex flex-col gap-2">
          <p>
            Founded in 2011, <b>Livespace</b> is a process-oriented CRM platform
            with over 1,200 paying clients. Recently, the company raised 10
            million PLN to support its growth and expansion into European
            markets.
          </p>
          <p>Inmid-2023, Livespace faced two key challenges:</p>
          <ul className="ml-4">
            <li>
              <b>1. System Stability:</b> Managing increased data processing and
              maintaining high availability.
            </li>
            <li>
              <b>2. International Expansion</b> Entering new markets to sustain
              growth.
            </li>
          </ul>
          <p>
            Yellow Brick Road recruited 20 professionals, including 4 leadership
            roles, helping Livespace scale operations while fostering a culture
            of accountability and maturity.
          </p>

          <p>
            <b>System Stability</b>
            <br /> In response to system availability issues in October 2023,
            Livespace shifted focus to hiring experienced engineers with strong
            soft skills to develop a responsible engineering culture.
          </p>
          <p>Yellow Brick Road facilitated this by:</p>
          <ul className="ml-7 list-disc">
            <li>
              very good understanding of the recruitment needs (hard and soft
              skills)
            </li>
            <li>adding video interviews to the process</li>
            <li>thorough reference checks</li>
          </ul>

          <p>
            <b>International Expansion:</b>
            <br /> Livespace prepared for global competition by securing key
            leadership roles (Head of Product, Marketing, People and Culture,
            Customer Success) with the help of Yellow Brick Road through:
          </p>
          <ul className="ml-7 list-disc">
            <li>Executive search and headhunting</li>
            <li>Competency-based approach and reference interviews</li>
          </ul>
        </div>
        <div className="basis-full">
          <p className="bg-primary rounded-full p-2 text-center text-xl text-amber-50">
            50%
          </p>
          <p className="p-2 text-center">Headcount growth in 1 year</p>
          <p className="bg-primary rounded-full p-2 text-center text-xl text-amber-50">
            hired heads of:
          </p>
          <p className="p-2 text-center">
            Marketing, Product, People, Customer Success
          </p>
          <p className="bg-primary rounded-full p-2 text-center text-xl text-amber-50">
            ensured
          </p>
          <p className="p-2 text-center">System stability</p>
          <p className="bg-primary rounded-full p-2 text-center text-xl text-amber-50">
            enabled
          </p>
          <p className="p-2 pb-0 text-center">International expansion</p>
        </div>
      </article>
    </Section>
  );
};

export default CaseStudies;
