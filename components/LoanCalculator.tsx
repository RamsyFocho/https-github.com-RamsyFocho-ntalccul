"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState([100000])
  const [interestRate, setInterestRate] = useState([8.5])
  const [loanTerm, setLoanTerm] = useState([15])

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0]
    const monthlyRate = interestRate[0] / 100 / 12
    const numberOfPayments = loanTerm[0] * 12

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    return monthlyPayment.toFixed(2)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Loan Calculator</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your monthly loan payments and plan your finances with our interactive calculator
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="loan-amount">Loan Amount: {loanAmount[0].toLocaleString()} FCFA</Label>
                  <Slider
                    id="loan-amount"
                    min={50000}
                    max={10000000}
                    step={10000}
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="interest-rate">Interest Rate: {interestRate[0]}% per annum</Label>
                  <Slider
                    id="interest-rate"
                    min={5}
                    max={25}
                    step={0.1}
                    value={interestRate}
                    onValueChange={setInterestRate}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="loan-term">Loan Term: {loanTerm[0]} years</Label>
                  <Slider
                    id="loan-term"
                    min={1}
                    max={30}
                    step={1}
                    value={loanTerm}
                    onValueChange={setLoanTerm}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-primary/10 rounded-lg">
                    <span className="text-muted-foreground">Monthly Payment</span>
                    <span className="text-2xl font-bold text-primary">{calculateMonthlyPayment()} FCFA</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Total Amount</span>
                    <span className="font-semibold">
                      {(Number.parseFloat(calculateMonthlyPayment()) * loanTerm[0] * 12).toLocaleString()} FCFA
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Total Interest</span>
                    <span className="font-semibold">
                      {(
                        Number.parseFloat(calculateMonthlyPayment()) * loanTerm[0] * 12 -
                        loanAmount[0]
                      ).toLocaleString()}{" "}
                      FCFA
                    </span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-primary hover:bg-primary/90">Apply for Loan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
