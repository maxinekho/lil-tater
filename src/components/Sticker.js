import { motion } from "framer-motion";

export const Sticker = ({ name, link, imgSrc, tiltDeg }) => {
  return (
    <a className={name} href={link} target="_blank" rel="noreferrer">
      <motion.img src={imgSrc} alt="fruit sticker" whileHover={{ rotate: tiltDeg }} />
    </a>
  );
};
