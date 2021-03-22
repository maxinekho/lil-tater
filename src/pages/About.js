import logo from "../assets/logo.png";
import max from "../assets/arch.png";
import manila from "../assets/mnl.png";

export default function About() {
  return (
    <div>
      <div className="d-flex align-items-center flex-column">
        <img src={logo} alt="logo" className="img-sticker"></img>
        <Body/>
      </div>
      <footer>&copy;2021 Maxine Kho</footer>
    </div>
  )
}

function Body() {
  return (
    <div className="d-flex justify-content-center flex-row">
      <div className="about-p flex-column">
        <p>Max is a product designer doing design systems work at Facebook. She most drawn to work that requires a high degree of craft, collaboration & a whole lot of care.</p>
        <p>Max is a sucker for handwritten notes, tart strawberry ice cream, and the good food + good music + good company trifecta and learns most things from the internet, books, and from the people around her.</p>
        <p>Say hello@maxinekho.com</p>
      </div>
      <img src={max} alt="max" className="img-max"></img>
      <img src={manila} alt="made in manila" className="img-sticker"></img>
    </div>
  )
}

function Links() {
  return (
    <div>

    </div>
  )
}