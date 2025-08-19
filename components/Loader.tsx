"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [showClose, setShowClose] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Preload the image
    const img = new Image()
    img.src = "/assets/ntalccul-logo.png"
    img.onload = () => setImageLoaded(true)
    
    // Only start timers once image is loaded
    if (imageLoaded) {
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
    }
  }, [imageLoaded])

  const letters = ["N", "t", "a", "C", "C", "U", "L"]

  return (
    <AnimatePresence>
      {(isLoading || !imageLoaded) && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          {/* Close button */}
          {showClose && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setIsLoading(false)}
              className="absolute top-8 right-8 w-10 h-10 bg-muted hover:bg-muted-foreground/10 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <span className="text-muted-foreground text-xl">×</span>
            </motion.button>
          )}

          <div className="text-center">
            {/* Spinner with image */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-full"
              />
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img 
                  src="/assets/ntalccul-logo.png" 
                  alt="Ntalccul Logo" 
                  className="w-12 h-12 object-contain"
                  onLoad={() => setImageLoaded(true)}
                />
              </motion.div>
            </div>

            {/* Animated letters */}
            <div className="flex items-center justify-center space-x-1">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    repeatDelay: 2,
                  }}
                  className="text-4xl font-bold text-primary"
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