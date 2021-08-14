import Sticker from "../utils/Stickers";

export default function About() {
  return (
    <div>
      <div>
        <Body/>
      </div>
    </div>
  )
}

function Body() {
  return (
    <div className="about">
      <div className="title">
        <h1>Maxine Kho</h1>
        <h1>Product Designer</h1>
      </div>
      <p>Max is a product designer doing design systems work at Facebook. She is most drawn to work
        that requires a high degree of craft, collaboration & a whole lot of care.</p>
      <p>Max is a sucker for handwritten notes, tart strawberry ice cream, and the good food + good
        music + good company trifecta and learns most things from the internet, books, and the people
        around her.</p>
      <p>Say hello@maxinekho.com</p>
      <Links/>
    </div>
  )
}

function Links() {
  return (
    <div>
      <div className="stickers top">
        <Sticker src="/images/figma.png" link="https://www.figma.com/@maxine" class="img-sticker figma" rotate={15}/>
        <Sticker src="/images/arena.png" link="https://www.are.na/maxine-kho" class="img-sticker arena" rotate={-18}/>
      </div>
      <div className="stickers bottom">
        <Sticker src="/images/linkedin.png" link="https://www.linkedin.com/in/maxinekho/" class="img-sticker linkedin" rotate={-22}/>
        <Sticker src="/images/resume.png" link="https://drive.google.com/drive/folders/1xmAsl4kvBtNqjJemNNeda82qmMcOb82A" class="img-sticker resume" rotate={25}/>
      </div>
      <footer>
        &copy; 2021 Maxine Kho
        <p>Built by <a href="http://audrey-kho.github.io/" target="_blank" rel="noreferrer" className="web-link">AK</a></p>
      </footer>
    </div>
  )
}