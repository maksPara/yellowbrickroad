import Heading from './ui/Heading';
import Section from './ui/Section';
import livespaceLogo from './../assets/img/livespace-logo.webp';
import stepstoneLogo from './../assets/img/stepstone-logo.png';
import silvairLogo from './../assets/img/silvair-logo.png';
import netcreditLogo from './../assets/img/netcredit-logo.webp';
import imgArenaLogo from './../assets/img/imgarena-logo.png';

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <Heading text="TESTIMONIALS" />
      <div className="chat chat-start mb-4">
        <div className="chat-bubble chat-bubble-secondary px-3 text-black sm:px-5 md:p-6">
          <p>
            We are extremely satisfied with our collaboration. They demonstrated
            an excellent understanding of our business needs, coupled with
            outstanding headhunting skills and expertise. They played a pivotal
            role in our company&#39;s transformation by recruiting nearly half
            of our entire workforce. Without their support, we would not have
            been able to achieve our business goals, significantly improve
            product development quality, or initiate our international expansion
            efforts. They have proven to be trustworthy, professional, and
            incredibly effective.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="font-bold">Michał Skurowski</p>
              <p>Founder and CEO</p>
            </div>
            <div>
              <img src={livespaceLogo} alt="Livespace Logo" className="w-40" />
            </div>
          </div>
        </div>
      </div>
      <div className="chat chat-end mb-4">
        <div className="chat-bubble chat-bubble-secondary text-black md:p-6">
          <p>
            For me, it's crucial that the recruiter provides candidate profiles
            tailored to my needs, rather than those that are simply "available
            at the moment." Yellow Brick Road demonstrated a strong
            understanding of my candidate requirements, excellent communication,
            and effective process integration. When necessary, we also had the
            opportunity to discuss "intangible" aspects, such as cultural fit
            and the candidate's personality. This was valuable to me as it
            provided an additional perspective on the individual.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="font-bold">Łukasz Rozbicki</p>
              <p>Head of IT</p>
            </div>
            <div>
              <img src={livespaceLogo} alt="Livespace Logo" className="w-40" />
            </div>
          </div>
        </div>
      </div>

      <div className="chat chat-start mb-4">
        <div className="chat-bubble chat-bubble-secondary px-3 text-black sm:px-5 md:p-6">
          <p>
            Throughout all the cooperation, Kacper and his associates proved
            they&#39;re reliable partners. Showed a high level of engagement and
            effort to understand our recruitment needs. Also, they presented
            themselves as capable of being flexible when a rapidly changing
            situation required it. Their support in hiring people for tech,
            product and leadership positions was something that we really
            appreciated.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="font-bold">Łukasz Górka</p>
              <p>Talent Acquisition Manager</p>
            </div>
            <div>
              <img
                src={stepstoneLogo}
                alt="Stepstone Logo"
                className="w-36 invert"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="chat chat-end mb-4">
        <div className="chat-bubble chat-bubble-secondary text-black md:p-6">
          <p>
            I had the pleasure of working with Kacper on one of the key
            recruitments to the TECH team. I was very impressed with his
            professionalism, extensive subject knowledge, commitment and support
            provided. Also the ability to consult on market trend issues outside
            of the project.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="font-bold">Magda Paul</p>
              <p>Recruitment Manager</p>
            </div>
            <div>
              <img src={imgArenaLogo} alt="IMG Arena Logo" className="w-36" />
            </div>
          </div>
        </div>
      </div>

      <div className="chat chat-start mb-4">
        <div className="chat-bubble chat-bubble-secondary px-3 text-black sm:px-5 md:p-6">
          <p>
            I appreciate cooperation with Kacper due to his extensive knowledge
            of the IT labor market, straightforward and specific way of
            communication and also goal orientation.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="font-bold">Katarzyna Koperniak</p>
              <p>Talent Acquisition Manager</p>
            </div>
            <div>
              <img src={silvairLogo} alt="Silvair Logo" className="w-36" />
            </div>
          </div>
        </div>
      </div>
      <div className="chat chat-end mb-4">
        <div className="chat-bubble chat-bubble-secondary text-black md:p-6 md:pb-3">
          <p>
            I was cooperating with Kacper on difficult project regarding Backend
            Developer, which was successfully closed. I appreciate cooperation
            with Kacper due to his extensive knowledge of the IT labor market,
            straightforward and specific way of communication, goal orientation
            and also keeping me up to date.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div>
              <p className="font-bold">Weronika Eysymontt</p>
              <p>People and Culture Partner</p>
            </div>
            <div>
              <img src={netcreditLogo} alt="Netcredit Logo" className="w-36" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
