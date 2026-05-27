import { motion, useInView } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";

export function FadeUp({children, delay = 0.5, duration= 1}: {children: ReactNode, delay?: number, duration?: number}) {
    const ref = useRef(null)
    const isInView = useInView(ref);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=> {
        if(isInView && !isVisible) setIsVisible(true);
    }, [isInView, isVisible])



   return (
    <motion.div 
    ref={ref}
    variants={{
        hidden: {
            opacity: 0,
            y:20
        },
        visible: {
            opacity: 1,
            y:0
        }
    }}
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"} 
    transition={{duration, delay}}
    >
      {children}
    </motion.div>
  );
}