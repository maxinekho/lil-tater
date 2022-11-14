import "./index.css";
import { Sticker } from "./components/Sticker";
import { Link } from "react-scroll";
import clsx from "clsx";
import { useState, useEffect } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false)
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
      <Link className={clsx({"scroll-btn":true, "bounce":!scrolled})} to="main-content" offset={-35} smooth>
        <img
          src="assets/scroll-button.png"
          alt="fruit sticker with the text 'scroll'"
        />
      </Link>
      <main id="main-content">
        <p>Main content!</p>
      </main>
      <Footer />
    </>
  );
}

const HeaderText = () => {
  return (
    <section>
      <p>
        Max is a Brooklyn-based product designer. <br className="break" />
        She is most drawn to work that requires a high degree of craft,
        collaboration and a whole lot of care.
      </p>
    </section>
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
      <p>&copy; {} Maxine Kho</p>
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
