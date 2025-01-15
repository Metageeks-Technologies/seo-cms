// import { motion } from "framer-motion";
// import { ReactNode, HTMLAttributes } from "react";
// import { MotionProps } from "framer-motion";
// type DivPropsWithoutMotion = Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'>;

// type MotionPropsWithoutDrag = Omit<MotionProps, 'onDrag'>;

// interface ScrollAnimationWrapperProps extends MotionPropsWithoutDrag, DivPropsWithoutMotion {
//   children: ReactNode;
//   className?: string;
// }

// export default function ScrollAnimationWrapper({
//   children,
//   className,
//   ...props
// }: ScrollAnimationWrapperProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       whileInView="onscreen"
//       className={className}
//       {...props}
//     >
//       {children}
//     </motion.div>
//   );
// }
