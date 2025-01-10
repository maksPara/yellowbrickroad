import Section from './ui/Section';
import Heading from './ui/Heading';
import stepstoneLogo from './../assets/img/stepstone-logo.png';
import ailleronLogo from './../assets/img/ailleron-logo.png';
import futureMindLogo from './../assets/img/futuremind-logo.png';
import livespaceLogo from './../assets/img/livespace-logo.webp';
import silvairLogo from './../assets/img/silvair-logo.png';
import imgArenaLogo from './../assets/img/imgarena-logo.png';
import netcreditLogo from './../assets/img/netcredit-logo.webp';
// import wayToGrowLogo from './../assets/img/waytogrow-logo.webp';
import crazeLogo from './../assets/img/craze-logo.png';

const TrustedUs = () => {
  return (
    <Section>
      <Heading text="TRUSTED US" />
      <div className="grid grid-cols-2 place-items-center gap-6 px-6 sm:grid-cols-3 md:gap-12 md:px-12 lg:grid-cols-4 2xl:grid-cols-5">
        <img
          src={stepstoneLogo}
          alt="Livespace logo"
          className="invert duration-500 hover:scale-110"
        />
        <img
          src={ailleronLogo}
          alt="Ailleron logo"
          className="duration-500 hover:scale-110"
        />
        <img
          src={futureMindLogo}
          alt="Future Mind logo"
          className="duration-500 hover:scale-110"
        />
        <img
          src={livespaceLogo}
          alt="Livespace logo"
          className="duration-500 hover:scale-110"
        />
        <img
          src={silvairLogo}
          alt="Silvair logo"
          className="duration-500 hover:scale-110"
        />
        <img
          src={imgArenaLogo}
          alt="IMG Arena logo"
          className="duration-500 hover:scale-110"
        />
        <img
          src={netcreditLogo}
          alt="Netcredit logo"
          className="duration-500 hover:scale-110"
        />
        {/* <img
          src={wayToGrowLogo}
          alt="Way To Grow logo"
          className="duration-500 hover:scale-110"
        /> */}
        <img
          src={crazeLogo}
          alt="Craze logo"
          className="duration-500 hover:scale-110"
        />
      </div>
    </Section>
  );
};

export default TrustedUs;
