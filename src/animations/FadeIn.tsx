import React from "react";
import { motion } from 'motion/react'

type FadeInProps = {
  children: React.ReactNode,
  delay?: number,
  duration?: number,
  yOffset?: number
}

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.8, 
  yOffset = 30
}: FadeInProps) => {
  return(
    <motion.div
      initial={{ opacity: 0, y: yOffset}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, ease: "easeInOut", delay: delay}}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn