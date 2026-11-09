import { motion } from "framer-motion";

export default function Title(props) {
  const item = {
    hidden: { opacity: 0, y: -45 },
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
      <small>{props.date}</small>
      {props.children}
    </motion.div>
  );
}
