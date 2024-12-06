import {motion} from "framer-motion";

export default function ScrollAnimationWrapper({children, className, ...props}) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 2 }}
    transition={{ duration: 1 }}
    //   initial="offscreen"
      whileInView="onscreen"
    //   viewport={{ once: false, amount: 0.8 }}
    //   className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}