import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { User, Briefcase, Home, GraduationCap } from "lucide-react"

export default function CustomBanking() {
  const solutions = [
    {
      icon: <User className="w-10 h-10 text-primary" />,
      title: "Personal Banking",
      description: "Tailored solutions for your personal financial journey",
      features: ["Personal loans", "Savings plans", "Investment advice"],
    },
    {
      icon: <Briefcase className="w-10 h-10 text-accent" />,
      title: "Business Solutions",
      description: "Comprehensive banking for businesses of all sizes",
      features: ["Business accounts", "Trade finance", "Cash management"],
    },
    {
      icon: <Home className="w-10 h-10 text-secondary-foreground" />,
      title: "Mortgage Services",
      description: "Make your dream home a reality with flexible mortgages",
      features: ["Home loans", "Construction finance", "Refinancing"],
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-accent-foreground" />,
      title: "Education Loans",
      description: "Invest in your future with education financing",
      features: ["Student loans", "Skill development", "Career advancement"],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Custom Banking Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every financial journey is unique. Our personalized banking solutions are designed to fit your specific
            needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{solution.description}</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}