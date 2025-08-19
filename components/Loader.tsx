"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showClose, setShowClose] = useState(false)

  useEffect(() => {
    // Show close button after 3 seconds
    const timer = setTimeout(() => {
      setShowClose(true)
    }, 3000)

    // Auto-hide loader after 5 seconds
    const autoHide = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(autoHide)
    }
  }, [])

  const letters = ["N", "t", "a", "C", "C", "U", "L"]

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
        >
          {/* Close button */}
          {showClose && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsLoading(false)}
              className="absolute top-8 right-8 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <span className="text-gray-600 text-xl">×</span>
            </motion.button>
          )}

          <div className="text-center">
            {/* Spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto mb-8"
            />

            {/* Animated letters */}
            <div className="flex items-center justify-center space-x-1">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    repeatDelay: 2,
                  }}
                  className="text-4xl font-bold text-blue-600"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
