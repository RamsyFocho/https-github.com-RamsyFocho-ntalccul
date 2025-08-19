import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

import { motion, useInView } from "framer-motion"
import { fadeUp, sectionFade } from "@/lib/utils"

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const blogPosts = [
    {
      title: "5 Smart Ways to Save Money in 2024",
      excerpt: "Discover practical strategies to build your savings and achieve your financial goals this year.",
      author: "Financial Team",
      date: "March 15, 2024",
      image: "/placeholder.jpg",
      category: "Savings",
    },
    {
      title: "Understanding Credit Scores and How to Improve Them",
      excerpt: "Learn what affects your credit score and actionable steps to improve your creditworthiness.",
      author: "Credit Advisor",
      date: "March 10, 2024",
      image: "/placeholder.jpg",
      category: "Credit",
    },
    {
      title: "Digital Banking Security: Protecting Your Assets Online",
      excerpt: "Essential tips to keep your online banking secure and protect yourself from cyber threats.",
      author: "Security Team",
      date: "March 5, 2024",
      image: "/placeholder.jpg",
      category: "Security",
    },
  ]

  return (
    <motion.section 
      className="py-16 bg-white"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionFade}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Financial Insights & News</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest financial tips, market insights, and banking news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div variants={fadeUp}>
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full group bg-transparent">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
