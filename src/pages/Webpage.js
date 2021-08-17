import Sticker from "../utils/Stickers";
import styled from "styled-components";

export default function Page() {
  return (
    <div className="container">
      <PageStyles>
        <About />
        <Featured />
      </PageStyles>
      <footer>
        &copy; 2021 Maxine Kho
        <p>
          Built by&nbsp;
          <a
            href="http://audrey-kho.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            AK
          </a>
        </p>
      </footer>
    </div>
  );
}

const PageStyles = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: flex-start;

    .featured {
      margin-top: 2.5em;
    }
  }
`;

function About() {
  return (
    <section className="about">
      <div className="title">
        <h1>Maxine Kho</h1>
        <h1>Product Designer</h1>
      </div>
      <p>
        Max is a product designer doing design systems work at Facebook. She is
        most drawn to work that requires a high degree of craft, collaboration &
        a whole lot of care.
      </p>
      <p>
        Max is a sucker for handwritten notes, tart strawberry ice cream, and
        the good food + good music + good company trifecta and learns most
        things from the internet, books, and the people around her.
      </p>
      <p>Say hello@maxinekho.com</p>
      <Links />
    </section>
  );
}

function Links() {
  return (
    <div>
      <div className="stickers top">
        <Sticker
          src="/images/figma.png"
          link="https://www.figma.com/@maxine"
          class="img-sticker figma"
          rotate={15}
        />
        <Sticker
          src="/images/arena.png"
          link="https://www.are.na/maxine-kho"
          class="img-sticker arena"
          rotate={-18}
        />
      </div>
      <div className="stickers bottom">
        <Sticker
          src="/images/linkedin.png"
          link="https://www.linkedin.com/in/maxinekho/"
          class="img-sticker linkedin"
          rotate={-22}
        />
        <Sticker
          src="/images/resume.png"
          link="https://drive.google.com/drive/folders/1xmAsl4kvBtNqjJemNNeda82qmMcOb82A"
          class="img-sticker resume"
          rotate={25}
        />
      </div>
    </div>
  );
}

const Featured = () => {
  return (
    <section className="featured">
      <h2>Featured on</h2>
      <FeaturedSite
        title="The Ultimate PD Internship Recruiting Guide"
        img="/images/pd_guide.png"
        link="https://www.notion.so/The-Ultimate-Product-Design-UX-Internship-Recruiting-Guide-for-Beginners-8dc35197946f41c388a4d152a02df19b"
      />
      <FeaturedSite
        title="16 Pieces Of Asian Food-Inspired Art and Decor To Buy Right Now"
        img="/images/asian_food_art.png"
        link="https://www.theinfatuation.com/products/features/asian-food-art"
      />
      <FeaturedSite
        title="The Eater NY 2020 Holiday Gift Guide"
        img="/images/holiday_gift_guide.png"
        link="https://ny.eater.com/21505068/eater-ny-2020-holiday-gift-guide"
      />
    </section>
  );
};

const FeaturedSite = ({ img, link, title }) => {
  return (
    <article>
      <img src={img} alt={title} />
      <a href={link} target="_blank" rel="noreferrer">
        {title}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
          strokeLinejoin="square"
          className="feather feather-arrow-up-right"
        >
          <line x1="7" y1="17" x2="16.5" y2="7.5"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </a>
    </article>
  );
};
