import clsx from "clsx";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Sticker } from "./components/Sticker";
import "./index.css";
import Image from "./utils/Image";
import Title from "./utils/Title";
import AnimatedText from "./utils/AnimatedText";
import { Separator } from "./utils/Separator";

function App() {
  /**
   * Tracks scroll position for scroll down sticker button animation
   * hide/show.
   */
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <header>
        <HeaderText />
        <Stickers />
      </header>
      <Link
        className={clsx({ "scroll-btn": true, bounce: !scrolled })}
        to="main-content"
        offset={-38}
        smooth
      >
        <img
          src="assets/scroll-button.png"
          alt="fruit sticker with the text 'scroll'"
        />
      </Link>
      <main id="main-content">
        <Title date="2022">
          <h2>
            <a
              href="https://techcrunch.com/2022/06/02/meta-calls-tab-messenger/"
              target="_blank"
              rel="noreferrer"
            >
              Messenger Calls Tab
            </a>
          </h2>
        </Title>
        <AnimatedText>
          <p>
            Empowered 1.3B active users to feel connected even when they are not
            physically together.
          </p>
        </AnimatedText>
        <Image
          id={1}
          src1="assets/calls-tab_1.png"
          alt1="Messenger calls"
          src2="assets/sticker_1.png"
        />
        <AnimatedText>
          <p>
            I was the design lead across multiple 0-1 projects that elevated
            shared experiences on this surface and introduced new ones in video
            calls. Designs are under NDA with several patents pending.
          </p>
        </AnimatedText>
        <Separator />
        <Title date="2021">
          <h2>
            <a
              href="https://www.facebook.com/business/tools/meta-business-suite"
              target="_blank"
              rel="noreferrer"
            >
              Meta Business Suite
            </a>
            : Creator Vision
          </h2>
        </Title>
        <Image
          id={2}
          src1="assets/creator-studio_2.png"
          alt1="Meta Business Suite Creator Studio"
        />
        <AnimatedText>
          <p>
            I owned and delivered an end-to-end unified creation experience for
            creators and businesses alike, ushering millions of creators into
            our business tools.
          </p>
        </AnimatedText>
        <Separator />
        <Title date="2020">
          <h2>Facebook Business Design System</h2>
        </Title>
        <AnimatedText>
          <p>
            My team created and maintained the design language across{" "}
            <a
              href="https://www.facebook.com/business/small-business/"
              target="_blank"
              rel="noreferrer"
            >
              25+ ads and business products
            </a>{" "}
            used by millions of advertisers and small business owners.
          </p>
        </AnimatedText>
        <Image
          id={3}
          src1="assets/design-system_3.png"
          alt1="Design system components used in an app"
          src2="assets/sticker_3.png"
        />
        <AnimatedText>
          <p>
            On this team, I refreshed entire mobile visual system in lockstep
            with the company rebrand, including primitives like color, type,
            spacing, elevation styles and base components like buttons controls,
            navigation and text inputs.
          </p>
        </AnimatedText>
        <Image
          id={4}
          src1="assets/design-system_4.png"
          alt1="Page insight data visualizations"
        />
        <AnimatedText>
          <p>
            I co-drove strategy and design for the mobile data viz library.
            Since adoption, Business Insights saw a reverse in regression and a
            lift in WAU and MAU.
          </p>
        </AnimatedText>
        <AnimatedText>
          <p>I invested in the design community by</p>
          <ul>
            <li>speaking on University Grad panels</li>
            <li>leading portfolio reviews with undergrads</li>
            <li>mentoring product design and content design interns</li>
            <li>leading a Women@ circle</li>
            <li>
              teaching the “Intro to Design Systems” class to hundreds of new
              hires in Design Camp
            </li>
            <li>interviewing potential hires for product designer roles</li>
          </ul>
        </AnimatedText>
      </main>
      <Footer />
    </>
  );
}

const HeaderText = () => {
  return (
    <div>
      <h1>Hi I’m Max! I’m a Brooklyn-based product designer.</h1>
      <br />
      <h1>
        I’m a sucker for handwritten notes, tart strawberry ice cream, the good
        food + good music + good company trifecta. I learn most things from the
        internet, books, and people around me.
      </h1>
      <br />
      <h1>
        I am most drawn to work that requires a high degree of craft,
        collaboration and a whole lot of care.
      </h1>
    </div>
  );
};

const Stickers = () => {
  return (
    <>
      <div className="top-stickers">
        <Sticker
          name="sticker figma"
          link="https://www.figma.com/@maxine"
          imgSrc="assets/figma.png"
          tiltDeg={15}
        />
        <Sticker
          name="sticker arena"
          link="https://www.are.na/maxine-kho"
          imgSrc="assets/arena.png"
          tiltDeg={-18}
        />
      </div>
      <div className="bottom-stickers">
        <Sticker
          name="sticker linkedin"
          link="https://www.linkedin.com/in/maxinekho/"
          imgSrc="assets/linkedin.png"
          tiltDeg={-22}
        />
        <Sticker
          name="sticker resume"
          link="https://drive.google.com/file/d/15JfmD_XXtXblgf52-sWU6LGbglaydHE-/view?usp=sharing"
          imgSrc="assets/resume.png"
          tiltDeg={25}
        />
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <address>
        Say <a href="mailto:hello@maxinekho.com">hello@maxinekho.com</a>
      </address>
      <p>&copy; {dayjs().year()} Maxine Kho</p>
      <p>
        Built by{" "}
        <a href="https://audrey-kho.github.io" target="_blank" rel="noreferrer">
          AK
        </a>
      </p>
    </footer>
  );
};

export default App;
