import logo from "../assets/logo.png";
import max from "../assets/arch.png";
import manila from "../assets/mnl.png";
import figma from "../assets/figma.png";
import arena from "../assets/arena.png";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume.png";
import Sticker from "../utils/Stickers";

export default function About() {
  return (
    <div>
      <div className="d-flex align-items-center flex-column">
        <img src={logo} alt="logo" className="img-logo"></img>
        <Body/>
      </div>
    </div>
  )
}

function Body() {
  return (
    <div className="d-flex justify-content-center flex-row">
      <div className="about-p flex-column">
        <p>Max is a product designer doing design systems work at Facebook. She is most drawn to work that requires a high degree of craft, collaboration & a whole lot of care.</p>
        <p>Max is a sucker for handwritten notes, tart strawberry ice cream, and the good food + good music + good company trifecta and learns most things from the internet, books, and the people around her.</p>
        <p>Say hello@maxinekho.com</p>
        <Links/>
      </div>
      <img src={max} alt="max" className="img-max"></img>
      <img src={manila} alt="made in manila" className="mnl"></img>
    </div>
  )
}

function Links() {
  return (
    <div>
      <div className="d-flex justify-content-center flex-row stickers top">
        <Sticker src={figma} link="https://www.figma.com/@maxine" class="img-sticker figma" rotate={15}/>
        <Sticker src={arena} link="https://www.are.na/maxine-kho" class="img-sticker arena" rotate={-18}/>
      </div>
      <div className="d-flex justify-content-center flex-row stickers bottom">
        <Sticker src={linkedin} link="https://www.linkedin.com/in/maxinekho/" class="img-sticker linkedin" rotate={-22}/>
        <Sticker src={resume} link="https://drive.google.com/drive/folders/1xmAsl4kvBtNqjJemNNeda82qmMcOb82A" class="img-sticker resume" rotate={25}/>
      </div>
      <footer>
        &copy;2021 Maxine Kho
        <p>Built by <a href="http://audrey-kho.github.io/" className="web-link">AK</a></p>
      </footer>
    </div>
  )
}