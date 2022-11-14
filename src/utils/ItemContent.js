import { motion, useScroll } from "framer-motion";

export default function ItemContent(props) {
  return (
    <motion.div>
      {props.children[0]}
      <div className={"img-container-" + props.id}>
        <img className={"main-img img" + props.id} src={props.src1} alt={props.alt1} />
        {props.src2 ? (
          <img
            className={"sticker" + props.id}
            src={props.src2}
            alt="flat sticker"
          />
        ) : (
          ""
        )}
      </div>
      {props.children[1]}
    </motion.div>
  );
}
