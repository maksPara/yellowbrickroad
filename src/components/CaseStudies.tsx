import Heading from './ui/Heading';
import Section from './ui/Section';
import livespaceLogo from './../assets/img/livespace-logo.webp';
// import stepstoneLogo from './../assets/img/stepstone-logo.png';
// import ailleronLogo from './../assets/img/ailleron-logo.png';

const CaseStudies = () => {
  return (
    <Section id="caseStudies" classNames="scroll-mt-20">
      <Heading text="CASE STUDIES" />

      {/* <div className="flex items-center justify-between">
        <p className="text-lg font-bold">Senior ML Ops</p>
        <img
          src={stepstoneLogo}
          alt="Stepstone logo"
          className="w-32 invert md:w-40"
        />
      </div>
      <article className="mt-2 flex flex-col gap-5 rounded-2xl bg-secondary p-3 shadow-lg lg:flex-row lg:p-4">
        <div className="flex flex-col gap-2">
          <p>
            In 2024, <b>Stepstone Group</b> faced a challenge: accelerating
            machine learning development, enhancing ML systems architecture, and
            building a strong ML Ops environment to integrate data science with
            software engineering. To achieve this, they needed a Senior ML Ops
            Engineer.
          </p>
          <p>
            After months of unsuccessful recruitment across three countries (UK,
            Germany, Poland), we were briefed and delivered a successful
            candidate within two weeks.
          </p>
          <p>
            From kickoff to the candidate's first day, the process took 4.5
            months.
          </p>
        </div>

        <div className="lg:min-w-72">
          <p className="rounded-full bg-primary p-2 text-center text-xl text-amber-50">
            2 weeks
          </p>
          <p className="p-2 text-center">to present a successful candidate</p>
          <p className="rounded-full bg-primary p-2 text-center text-xl text-amber-50">
            4 and a half months
          </p>
          <p className="p-2 text-center">
            from kick-off to new hire&#39;s day one
          </p>
        </div>
      </article>

      <div className="mt-8 flex items-center justify-between lg:mt-12">
        <p className="text-lg font-bold">Business Development Lead</p>
        <img src={ailleronLogo} alt="Ailleron logo" className="w-32 md:w-40" />
      </div>

      <article className="mt-2 flex flex-col gap-5 rounded-2xl bg-secondary p-3 shadow-lg lg:flex-row lg:p-4">
        <div className="flex flex-col gap-2">
          <p>
            Polish Software House and Tech Product Company (public company, 150
            +FTE) faced a sales slump and needed strong business development
            talent to target the global enterprise market. We were tasked in
            with filling one confidential Business Development Lead role.
            Finally, out of 15 candidates presented, 4 received offers, and 3
            accepted.
          </p>
          <p>
            The process took under 3 months, with the first candidate hired in
            just 13 days, and the first hire starting in 1.5 months.
          </p>
        </div>

        <div className="lg:min-w-72">
          <p className="rounded-full bg-primary p-2 text-center text-xl text-amber-50">
            1 and a half months
          </p>
          <p className="p-2 text-center">to present a successful candidate</p>
          <p className="rounded-full bg-primary p-2 text-center text-xl text-amber-50">
            1 -&gt; 3
          </p>
          <p className="p-2 text-center">
            from kick-off to new hire&#39;s day one
          </p>
        </div>
      </article> */}

      <div className="mt-8 flex items-center justify-between lg:mt-12">
        <p className="text-lg font-bold">Growth and stability</p>
        <img
          src={livespaceLogo}
          alt="Livespace logo"
          className="w-32 md:w-40"
        />
      </div>
      <article className="mt-2 flex flex-col gap-5 rounded-2xl bg-secondary p-3 shadow-lg lg:flex-row lg:p-4">
        <div className="flex flex-col gap-2">
          <p>
            Founded in 2011, <b>Livespace</b> is a process-oriented CRM platform
            with over 1,200 paying clients. Recently, the company raised 10
            million PLN to support its growth and expansion into European
            markets.
          </p>
          <p>In mid-2023, Livespace faced two key challenges:</p>
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
              in-depth understanding of the recruitment needs (hard and soft
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
        <div className="lg:min-w-72">
          <p className="rounded-full bg-primary p-2 text-center text-xl text-amber-50">
            50%
          </p>
          <p className="p-2 text-center">headcount growth in 1 year</p>
          <p className="rounded-full bg-primary p-2 text-center text-xl text-amber-50">
            hired heads of:
          </p>
          <p className="p-2 text-center">
            Marketing, Product, People, Customer Success
          </p>
          <p className="rounded-full bg-primary p-2 text-center text-xl text-amber-50">
            ensured
          </p>
          <p className="p-2 text-center">system stability</p>
          <p className="rounded-full bg-primary p-2 text-center text-xl text-amber-50">
            enabled
          </p>
          <p className="p-2 pb-0 text-center">international expansion</p>
        </div>
      </article>
    </Section>
  );
};

export default CaseStudies;
