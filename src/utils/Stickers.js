export default function Sticker(props) {
  return <a href={props.link}><img src={props.src} alt="socials link" className={props.class}></img></a>
}