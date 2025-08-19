"use client"

import { useEffect, useState, useRef } from "react"
import { Users, RefreshCw, MapPin, Building } from "lucide-react"
import { motion, useInView } from "framer-motion"

const stats = [
  {
    icon: Users,
    count: 8500,
    suffix: "k",
    label: "Happy Customers World Wide.",
    color: "text-blue-600",
  },
  {
    icon: RefreshCw,
    count: 0.5,
    suffix: "m",
    label: "Transactions Processed Daily.",
    color: "text-green-600",
  },
  {
    icon: MapPin,
    count: 10000,
    suffix: "+",
    label: "ATMs and Branches Globally.",
    color: "text-purple-600",
  },
  {
    icon: Building,
    count: 50,
    suffix: "+",
    label: "Years of Trusted Banking Service.",
    color: "text-orange-600",
  },
]

function CountUp({
  end,
  suffix = "",
  duration = 2000,
  inView,
}: { end: number; suffix?: string; duration?: number; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <section className="py-16 bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center">
                <motion.div
                  className="bg-white/10 p-4 rounded-full"
                  animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">
                  <CountUp end={stat.count} suffix={stat.suffix} inView={isInView} />
                </div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
