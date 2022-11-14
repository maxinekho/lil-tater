import { motion } from "framer-motion/dist/framer-motion";

export default function ItemTitle(props) {
  const item = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
      variants={item}
      transition={{duration: 0.5}}
    >
      {props.children}
      <small>{props.date}</small>
    </motion.div>
  );
}
