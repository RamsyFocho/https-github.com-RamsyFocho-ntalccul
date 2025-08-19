import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Shield, Gift, Zap } from "lucide-react"

export default function CreditCards() {
  const cards = [
    {
      name: "NtaLCCUL Classic",
      type: "classic",
      color: "bg-gradient-to-r from-gray-700 to-gray-900",
      features: ["No annual fee", "Cashback rewards", "24/7 support", "Fraud protection"],
      limit: "Up to 500,000 FCFA",
    },
    {
      name: "NtaLCCUL Gold",
      type: "gold",
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      features: ["Premium rewards", "Travel insurance", "Concierge service", "Airport lounge access"],
      limit: "Up to 2,000,000 FCFA",
    },
    {
      name: "NtaLCCUL Platinum",
      type: "platinum",
      color: "bg-gradient-to-r from-gray-300 to-gray-500",
      features: ["Unlimited cashback", "Global acceptance", "Priority customer service", "Exclusive offers"],
      limit: "Up to 5,000,000 FCFA",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Credit Cards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of credit cards designed to match your lifestyle and spending needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`${card.color} p-6 text-white relative`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{card.name}</h3>
                    <p className="text-sm opacity-90">{card.limit}</p>
                  </div>
                  <CreditCard className="w-8 h-8" />
                </div>
                <div className="absolute bottom-4 right-4 opacity-20">
                  <div className="text-4xl font-bold">CCUL</div>
                </div>
              </div>

              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-primary hover:bg-primary/90">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Secure Transactions</h3>
            <p className="text-sm text-muted-foreground">Advanced security features protect every purchase</p>
          </div>

          <div className="text-center">
            <Gift className="w-12 h-12 text-accent mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Reward Points</h3>
            <p className="text-sm text-muted-foreground">Earn points on every transaction and redeem rewards</p>
          </div>

          <div className="text-center">
            <Zap className="w-12 h-12 text-secondary-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Instant Approval</h3>
            <p className="text-sm text-muted-foreground">Get approved in minutes with our digital process</p>
          </div>

          <div className="text-center">
            <CreditCard className="w-12 h-12 text-accent-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Global Acceptance</h3>
            <p className="text-sm text-muted-foreground">Use your card anywhere in the world</p>
          </div>
        </div>
      </div>
    </section>
  )
}
