"use client"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Hand } from "lucide-react"

interface ScrollHintProps {
    scrollRef?: React.RefObject<HTMLElement | null>
}

export function ScrollHint({ scrollRef }: ScrollHintProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const node = scrollRef?.current
    if (!node) return

    const hideHint = () => setVisible(false)

    node.addEventListener("scroll", hideHint)

    return () => {
      node.removeEventListener("scroll", hideHint)
    }
  }, [scrollRef])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center text-white"
        >
          <Hand className="w-6 h-6" />
          <span className="text-xs mt-1">Scroll</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
