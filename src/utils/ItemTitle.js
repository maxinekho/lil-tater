import { motion, useScroll } from "framer-motion"

export default function ItemTitle (props) {
  return(
    <motion.div>
      {props.children}
      <small>{props.date}</small>
    </motion.div>
  );
}