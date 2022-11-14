import { motion } from "framer-motion/dist/framer-motion";

export default function ItemContent(props) {
  const item = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {props.children[0]}
      <div className={"img-container-" + props.id}>
        <motion.img
          className={"main-img img" + props.id}
          src={props.src1}
          alt={props.alt1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          variants={item}
          transition={{ duration: 0.5 }}
        />
        {props.src2 ? (
          <motion.img
            className={"sticker" + props.id}
            src={props.src2}
            alt="flat sticker"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 1 }}
            variants={item}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        ) : (
          ""
        )}
      </div>
      {props.children[1]}
    </div>
  );
}
