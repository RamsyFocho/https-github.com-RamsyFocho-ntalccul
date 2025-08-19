"use client"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

export default function BankingServices() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const services = [
    {
      icon: "https://ntaccul.org/wp-content/uploads/2025/05/icon-13.png",
      title: "Fixed Deposit",
      description: "Higher Returns & Security with guaranteed returns and flexible tenure options.",
      features: ["100% Guaranteed returns", "Loan against FD available", "Flexible tenure options"],
    },
    {
      icon: "https://ntaccul.org/wp-content/uploads/2025/05/icon-12-1.png",
      title: "Savings Account",
      description:
        "Grow your money with competitive interest rates and flexible savings plans tailored to your financial goals.",
      features: ["High interest rates", "Flexible deposits", "Goal-based savings"],
    },
    {
      icon: "https://ntaccul.org/wp-content/uploads/2025/05/icon-14-1.png",
      title: "Investment Services",
      description: "Secure you & your family with diverse investment portfolio and expert financial advisory services.",
      features: ["Portfolio management", "Expert advice", "Risk assessment"],
    },
    {
      icon: "https://ntaccul.org/wp-content/uploads/2025/05/icon-15-1.png",
      title: "Family 360°",
      description: "Complete banking solutions for your entire family with comprehensive coverage options.",
      features: ["Family accounts", "Insurance coverage", "Financial planning"],
    },
    {
      icon: "https://ntaccul.org/wp-content/uploads/2024/09/certified-1-1.png",
      title: "Group Banking",
      description: "Special banking solutions designed for cooperatives, associations, and group savings.",
      features: ["Group accounts", "Bulk transactions", "Member management"],
    },
    {
      icon: "https://ntaccul.org/wp-content/themes/flexibank/assets/images/icons/icon-38.png",
      title: "Business Banking",
      description: "Comprehensive banking solutions to help your business grow and manage finances effectively.",
      features: ["Business loans", "Merchant services", "Cash management"],
    },
  ]

  return (
    <section className="py-16 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Banking Services
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover comprehensive financial solutions designed to meet all your banking needs
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="mb-4"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                      />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <motion.ul
                      className="text-sm text-muted-foreground mb-6 space-y-1"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
                    >
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center justify-center"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.9 + idx * 0.1 }}
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
