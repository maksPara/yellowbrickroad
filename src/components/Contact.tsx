import linkedInLogo from '../assets/img/linkedIn-logo.png';

const Contact = () => {
  return (
    <div className="flex scroll-mt-20 flex-col sm:flex-row" id="contact">
      <div className="flex grow bg-primary p-4 pt-20">
        <p className="w-full text-3xl font-bold text-amber-50 sm:text-right">
          Got questions?
        </p>
      </div>
      <div className="flex grow flex-col gap-2 p-4 pb-10 sm:pt-20">
        <p className="mb-10 text-3xl font-bold text-primary sm:mb-20">
          Let's talk
        </p>
        <a
          href="mailto:kacper.holdys@yellowbrickroad.pl"
          className="link line-clamp-1 font-bold sm:text-lg"
        >
          kacper.holdys@yellowbrickroad.pl
        </a>
        <a href="tel:+48602108880" className="link font-bold sm:text-lg">
          0048 602 108 880
        </a>
        <a
          href="https://calendly.com/kacper-holdys/30min"
          className="link font-bold sm:text-lg"
        >
          book a meeting
        </a>
        <a href="https://www.linkedin.com/company/ybrd/">
          <img src={linkedInLogo} alt="linkedIn logo" className="size-8" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
