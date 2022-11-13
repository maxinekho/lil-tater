import { motion, useScroll } from "framer-motion"

export default function ItemContent (props) {
  return(
    <>
      <img src={props.img} alt={props.alt} />
      <p>{props.text}</p>
    </>
  );
}