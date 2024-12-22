import Section from './ui/Section';
import Heading from './ui/Heading';

const WayOfWork = () => {
  return (
    <Section>
      <Heading text="WAY OF WORK" />
      <div className="grid grid-cols-[56px_1fr] place-items-start gap-3 sm:gap-6 lg:grid-cols-5">
        <div className="clip-custom-shape bg-secondary grid h-14 w-24 rotate-90 place-items-center place-self-center lg:-order-1 lg:h-20 lg:w-32 lg:rotate-0"></div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-bold">Kick-off</p>
            <br className="hidden lg:block" />
          </div>
          <p>
            <b>You:</b> spend 30 minutes on the phone with us
          </p>
          <p>
            <b>We:</b> prepare search strategy and EVP
          </p>
        </div>

        <div className="clip-custom-shape bg-secondary grid h-14 w-24 rotate-90 place-items-center place-self-center lg:-order-1 lg:h-20 lg:w-32 lg:rotate-0"></div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-bold">1st iteration</p>
            <p>(2 weeks)</p>
          </div>
          <p>
            <b>We:</b> perform targeted search, send you 3-5 candidates in 10
            working days
          </p>
          <p>
            <b>You:</b> give us feedback on the candidates
          </p>
        </div>

        <div className="clip-custom-shape bg-secondary grid h-14 w-24 rotate-90 place-items-center place-self-center lg:-order-1 lg:h-20 lg:w-32 lg:rotate-0"></div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-bold">2nd iteration</p>
            <p>(2 weeks)</p>
          </div>
          <p>
            <b>You:</b> interview presented candidates, give us feedbacks
          </p>
          <p>
            <b>We:</b> go on with refined search in 2-week iterations
          </p>
        </div>

        <div className="clip-custom-shape bg-secondary grid h-14 w-24 rotate-90 place-items-center place-self-center lg:-order-1 lg:h-20 lg:w-32 lg:rotate-0"></div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-bold">Offer</p>
            <p>(2 weeks)</p>
          </div>
          <p>
            <b>You:</b> choose the candidate and set the offer
          </p>
          <p>
            <b>We:</b> handle the rest - extending it and gathering feedback,
            help reduce the risk of candidates accepting counter-offers
          </p>
        </div>

        <div className="clip-custom-shape bg-secondary grid h-14 w-24 rotate-90 place-items-center place-self-center lg:-order-1 lg:h-20 lg:w-32 lg:rotate-0"></div>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-lg font-bold">Guarantee</p>
            <p>(2 weeks)</p>
          </div>
          <p>
            <b>You:</b> make sure the new hire hits the ground running
          </p>
          <p>
            <b>We:</b> offer a 3-month guarantee on every candidate we place
          </p>
        </div>
      </div>
    </Section>
  );
};

export default WayOfWork;
