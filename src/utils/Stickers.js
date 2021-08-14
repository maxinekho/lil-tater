import { motion } from "framer-motion";

export default function Sticker(props) {
  return <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          <motion.img src={props.src} alt="socials link" className={props.class} whileHover={{ rotate: props.rotate }}/>
        </a>
}