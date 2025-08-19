import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Shield, Clock, Key } from "lucide-react"

export default function LockerFacility() {
  const lockerSizes = [
    {
      size: "Small",
      dimensions: '5" x 10" x 24"',
      price: "15,000 FCFA/year",
      ideal: "Documents, jewelry, small valuables",
    },
    {
      size: "Medium",
      dimensions: '10" x 10" x 24"',
      price: "25,000 FCFA/year",
      ideal: "Important papers, electronics, collectibles",
    },
    {
      size: "Large",
      dimensions: '10" x 15" x 24"',
      price: "40,000 FCFA/year",
      ideal: "Larger items, multiple documents, family heirlooms",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safe Deposit Lockers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Secure your most valuable possessions with our state-of-the-art safe deposit locker facility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Safe Deposit Lockers"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximum Security</h3>
                <p className="text-gray-600">
                  Multi-layer security with biometric access, CCTV monitoring, and 24/7 surveillance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-8 h-8 text-green-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenient Access</h3>
                <p className="text-gray-600">
                  Access your locker during extended banking hours with prior appointment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Key className="w-8 h-8 text-purple-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dual Key System</h3>
                <p className="text-gray-600">
                  Enhanced security with dual key system - your key plus bank's master key required.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lockerSizes.map((locker, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{locker.size} Locker</h3>
                <p className="text-gray-600 mb-3">{locker.dimensions}</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">{locker.price}</div>
                <p className="text-sm text-gray-500 mb-6">Ideal for: {locker.ideal}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Reserve Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
