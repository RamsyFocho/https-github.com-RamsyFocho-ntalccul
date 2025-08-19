"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    id: 1,
    title: "Flexi Savings",
    subtitle: "Earn up to 2.5% APY",
    description: "Enjoy zero free banking on your sb account.",
    buttonText: "Book a Consultation",
    buttonLink: "#",
    backgroundImage: "https://ntaccul.org/wp-content/uploads/2024/09/banner-1-1.jpg",
  },
  {
    id: 2,
    title: "Business Loan",
    subtitle: "From 8.5% APR",
    description: "Fuel your business growth with our easy loan",
    buttonText: "Apply Your Loan",
    buttonLink: "#",
    backgroundImage: "https://ntaccul.org/wp-content/uploads/2024/09/banner-2-1.jpg",
  },
  {
    id: 3,
    title: "Credit Card",
    subtitle: "Enjoy 0% Annual Fee",
    description: "Maximize benefits with your every transaction",
    buttonText: "Apply Your Card",
    buttonLink: "#",
    backgroundImage: "https://ntaccul.org/wp-content/uploads/2024/09/banner-3-1.jpg",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
                <Image
                  src={slide.backgroundImage || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
                  <motion.div
                    className="max-w-2xl text-primary-foreground"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <motion.h5
                      className="text-lg mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <span className="bg-accent px-3 py-1 rounded text-accent-foreground">{slide.title}</span>{" "}
                      {slide.subtitle}
                    </motion.h5>
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      {slide.description}
                    </motion.h1>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.9 }}
                    >
                      <Button size="lg" variant="secondary" asChild>
                        <a href={slide.buttonLink}>{slide.buttonText}</a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: index === currentSlide ? 1.2 : 1 }}
          />
        ))}
      </div>
    </section>
  )
}
