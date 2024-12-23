const Contact = () => {
  return (
    <div className="mt-6 flex flex-col sm:flex-row">
      <div className="bg-primary flex grow p-4 pt-20">
        <p className="w-full text-3xl font-bold text-amber-50 sm:text-right">
          Got questions?
        </p>
      </div>
      <div className="flex grow flex-col gap-2 p-4 pb-10 sm:pt-20">
        <p className="text-primary mb-10 text-3xl font-bold sm:mb-20">
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
      </div>
    </div>
  );
};

export default Contact;
