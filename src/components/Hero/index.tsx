import { HERO } from '../../constants/hero';
import downArrows from '../../assets/downArrows.png';
import Block from '../Block';
import './Hero.css';

const Hero = () => {
  const animations = ['animate-float-1', 'animate-float-2', 'animate-float-3', 'animate-float-4'];

  return (
    <section className="min-h-screen flex flex-col items-center md:justify-center">
      <div className="effects-container">
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center">
        <div className="mt-15">
          <p>{HERO.presented}</p>
        </div>

        <div className="flex flex-col gap-10 items-start w-full px-15 mt-15 md:hidden">
          {HERO.labels.slice(0, 2).map((label, index) => {
            const isEven = index % 2 === 0;

            return (
              <Block
                label={label}
                className={isEven ? 'self-end mr-4' : 'self-start ml-4 '}
                key={index}
              />
            );
          })}
        </div>

        <div className="text-center my-20 px-5">
          <h1 className="font-heading text-5xl mt-2">{HERO.title}</h1>
          <div className="flex mt-2 gap-2 justify-center">
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Hacker%20Rivals%20-%20AWS%20Community%20Day&dates=20251025T090000Z/20251025T180000Z&details=Hackathons%20made%20shorter,%20smarter,%20and%20designed%20for%20spectators.&location=BCIT%20Downtown%20Campus,%20555%20Seymour%20St,%20Vancouver,%20BC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <p>{HERO.date}</p>
            </a>
            <p>&bull;</p>
            <a
              href="https://maps.google.com/maps?q=BCIT+Downtown+Campus,+555+Seymour+St,+Vancouver,+BC"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <p>{HERO.location}</p>
            </a>
          </div>
          <p className="mt-5">{HERO.tagline}</p>
        </div>

        <div className="flex flex-col gap-10 items-start w-full px-15 mt-5 md:hidden">
          {HERO.labels.slice(2, 4).map((label, index) => {
            const isEven = index % 2 === 0;

            return (
              <Block
                label={label}
                className={isEven ? 'self-end mr-4' : 'self-start ml-4 '}
                key={index}
              />
            );
          })}
        </div>

        <div className="hidden md:block">
          {HERO.labels.map((label, index) => {
            const animationClass = animations[index % animations.length];

            return (
              <Block
                label={label}
                className={`md:absolute md:transition-all md:hover:scale-105 md:hover:z-10 ${animationClass}`}
                key={index}
              />
            );
          })}
        </div>

        <div className="flex flex-row flex-wrap gap-4 justify-center mt-10">
          <div className="absolute bottom-10 animate-bounce">
            <img src={downArrows} alt="Scroll Down" width="100px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
