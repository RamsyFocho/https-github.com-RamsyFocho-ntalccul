"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I open an account with NtaCCUL?",
      answer:
        "Opening an account is simple! Visit any of our branches with a valid ID, proof of address, and initial deposit. You can also start the process online and complete it at your nearest branch.",
    },
    {
      question: "What are your interest rates for savings accounts?",
      answer:
        "Our savings account interest rates are competitive and vary based on account type and balance. Current rates range from 8% to 12% per annum. Contact us for the most up-to-date rates.",
    },
    {
      question: "Is online banking secure?",
      answer:
        "Yes, our online banking platform uses bank-grade security with 256-bit SSL encryption, multi-factor authentication, and real-time fraud monitoring to protect your accounts.",
    },
    {
      question: "What loan products do you offer?",
      answer:
        "We offer personal loans, business loans, mortgage loans, education loans, and agricultural loans with competitive interest rates and flexible repayment terms.",
    },
    {
      question: "How can I apply for a credit card?",
      answer:
        "You can apply for a credit card online through our website, visit any branch, or call our customer service. You'll need proof of income, valid ID, and meet our eligibility criteria.",
    },
    {
      question: "What are your banking hours?",
      answer:
        "Our branches are open Monday to Friday from 8:00 AM to 4:00 PM, and Saturdays from 9:00 AM to 2:00 PM. Online banking is available 24/7.",
    },
    {
      question: "Do you offer mobile banking?",
      answer:
        "Yes! Our mobile banking app is available for iOS and Android devices, offering full banking services including transfers, bill payments, and account management.",
    },
    {
      question: "How do I report a lost or stolen card?",
      answer:
        "Immediately call our 24/7 hotline at +234-XXX-XXXX-XXX or use the mobile app to block your card. You can also visit any branch to report and request a replacement.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our banking services and products
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
