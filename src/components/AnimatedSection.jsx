import { motion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
};

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.85, delay, ease: [0.25, 0.4, 0.25, 1] }}
    variants={variants[direction]}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
