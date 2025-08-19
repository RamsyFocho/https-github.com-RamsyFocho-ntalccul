import { Shield, TrendingUp, Award } from "lucide-react"

export default function SecureGrowth() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Secure Growth for Your Future</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At NtaCCUL, we combine cutting-edge security with proven growth strategies to ensure your financial future
              is both safe and prosperous.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Bank-Level Security</h3>
                  <p className="text-muted-foreground">
                    Advanced encryption and multi-factor authentication protect your assets 24/7.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-accent mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Guaranteed Growth</h3>
                  <p className="text-muted-foreground">
                    Competitive interest rates and investment options to maximize your returns.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-secondary-foreground mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Award-Winning Service</h3>
                  <p className="text-muted-foreground">Recognized excellence in customer service and financial innovation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.jpg"
              alt="Secure Growth"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary/90 text-primary-foreground p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
