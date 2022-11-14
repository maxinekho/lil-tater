import "./index.css";
import { Sticker } from "./components/Sticker";
import { Link } from "react-scroll";
import clsx from "clsx";
import { useState, useEffect } from "react";
import ItemTitle from "./utils/ItemTitle";
import { Separator } from "./utils/Separator";
import ItemContent from "./utils/ItemContent";
import dayjs from "dayjs";

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
        <ItemTitle date="May&#8211;November 2022">
          <h2>
            <a
              href="https://techcrunch.com/2022/06/02/meta-calls-tab-messenger/"
              target="_blank"
              rel="noreferrer"
            >
              Messenger Calls Tab
            </a>
          </h2>
        </ItemTitle>
        <ItemContent
          id={1}
          src1="assets/calls-tab_1.png"
          alt1="Messenger calls"
          src2="assets/sticker_1.png"
        >
          <p>
            Empowering 1.3B active users to feel connected even when they are
            not physically together.
          </p>
          <p>
            I worked on projects that elevate shared experiences on this surface
            and introduce new ones in video calls. Designs are still under NDA,
            please reach out to learn more.
          </p>
        </ItemContent>
        <Separator />
        <ItemTitle date="September&#8211;December 2021">
          <h2>
            <a
              href="https://www.facebook.com/business/tools/meta-business-suite"
              target="_blank"
              rel="noreferrer"
            >
              Meta Business Suite
            </a>
            : Creator Studio
          </h2>
        </ItemTitle>
        <ItemContent
          id={2}
          src1="assets/creator-studio_2.png"
          alt1="Meta Business Suite Creator Studio"
          // src2="assets/sticker_2.png"
        >
          <></>
          <p>
            I owned and delivered an end-to-end unified creation experience for
            creators and businesses alike. <br />
            <br /> Designed media formats that support video, story, reels, and
            audio-only content.
          </p>
        </ItemContent>
        <Separator />
        <ItemTitle date="August 2020&#8211;May 2022">
          <h2>Facebook Business Design System</h2>
        </ItemTitle>
        <ItemContent
          id={3}
          src1="assets/design-system_3.png"
          alt1="Design system components used in an app"
          src2="assets/sticker_3.png"
        >
          <p>
            Created and maintained the design language across{" "}
            <a
              href="https://www.facebook.com/business/small-business/"
              target="_blank"
              rel="noreferrer"
            >
              25+ ads and business products
            </a>{" "}
            used by millions of advertisers and small business owners.
          </p>
          <p>
            Refreshed entire mobile visual system in lockstep with the company
            rebrand.
            <br />
            <br /> Designed primitives including color, type, spacing, elevation
            styles and base components like buttons controls, navigation and
            text inputs.
          </p>
        </ItemContent>
        <ItemContent
          id={4}
          src1="assets/design-system_4.png"
          alt1="Page insight data visualizations"
        >
          <></>
          <p>
            Also designed mobile data viz patterns that, since adoption,
            reversed regressions.
            <br />
            <br />
            Crafted animated transitions for components to aid user
            comprehension around progress, orientation, and navigation. Achieved
            our goal of net neutral metrics.
          </p>
        </ItemContent>
      </main>
      <Footer />
    </>
  );
}

const HeaderText = () => {
  return (
    <h1>
      Max is a Brooklyn-based product designer. <br className="break" />
      She is most drawn to work that requires a high degree of craft,
      collaboration and a whole lot of care.
    </h1>
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
