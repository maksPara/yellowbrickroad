import Heading from './ui/Heading';
import Section from './ui/Section';

const Pricing = () => {
  return (
    <Section>
      <Heading text="PRICING" />
      <div className="mt-14 flex flex-col gap-16 lg:flex-row lg:gap-8">
        <article className="bg-secondary flex flex-col place-items-center gap-4 rounded-lg p-4 text-center shadow-lg duration-500 lg:basis-1/3 lg:hover:scale-105">
          <div className="border-primary -mt-[3.75rem] rounded-full border-4 p-0.5">
            <p className="bg-primary flex size-20 place-items-center rounded-full p-4 text-xl font-bold text-amber-50">
              1 hire
            </p>
          </div>
          <p className="text-lg font-bold">17% success fee*</p>
          <ul className="ml-5 flex list-disc flex-col gap-1">
            <li>
              basic legal support for drafting contracts between your U.S.
              entity and Polish candidates at no extra cost
            </li>
            <li>
              additional legal support available at <b>$150/hour</b>
            </li>
            <li>
              additional CTO interviews available at <b>$200/hour</b>
            </li>
          </ul>
        </article>
        <article className="bg-secondary flex flex-col place-items-center gap-4 rounded-lg p-4 text-center shadow-lg duration-500 lg:basis-1/3 lg:hover:scale-105">
          <div className="border-primary -mt-[3.75rem] rounded-full border-4 p-0.5">
            <p className="bg-primary flex size-20 place-items-center rounded-full p-4 text-xl font-bold text-amber-50">
              2-3 hires
            </p>
          </div>
          <p className="text-lg font-bold">15% success fee*</p>
          <ul className="ml-5 flex list-disc flex-col gap-1">
            <li>
              free basic legal support for drafting contracts between your U.S.
              entity and Polish candidates
            </li>
            <li>
              5 hours of additional legal support at <b>no extra cost</b>
            </li>
            <li>
              6 CTO interviews at <b>no extra cost</b>
            </li>
          </ul>
        </article>

        <article className="bg-secondary flex flex-col place-items-center gap-4 rounded-lg p-4 text-center shadow-lg duration-500 lg:basis-1/3 lg:hover:scale-105">
          <div className="border-primary -mt-[3.75rem] rounded-full border-4 p-0.5">
            <p className="bg-primary flex size-20 place-items-center rounded-full p-4 text-xl font-bold text-amber-50">
              4+ hires
            </p>
          </div>
          <p className="text-lg font-bold">13% success fee*</p>
          <ul className="ml-5 flex list-disc flex-col gap-1">
            <li>
              free basic legal support for drafting contracts between your U.S.
              entity and Polish candidates
            </li>
            <li>
              10 hours of additional legal support at <b>no extra cost</b>
            </li>
            <li>
              10 CTO interviews at <b>no extra cost</b>
            </li>
          </ul>
        </article>
      </div>
      <div className="pt-5 text-right">
        *a one-time fee equal to % of the successful candidate&#39;s annual
        salary
      </div>
    </Section>
  );
};

export default Pricing;
