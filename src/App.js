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
      <Footer />
    </>
  );
}

const HeaderText = () => {
  return (
    <div>
      <h1>
        Max is a product designer at Coinbase living in Brooklyn, New York.
      </h1>
      <br />
      <h1>
        She is most drawn to work that requires a high degree of craft,
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
