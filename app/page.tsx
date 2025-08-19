import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import OnlineServices from "@/components/OnlineServices"
import BankingServices from "@/components/BankingServices"
import SecureGrowth from "@/components/SecureGrowth"
import CustomBanking from "@/components/CustomBanking"
import Statistics from "@/components/Statistics"
import LoanCalculator from "@/components/LoanCalculator"
import CreditCards from "@/components/CreditCards"
import LockerFacility from "@/components/LockerFacility"
import FAQ from "@/components/FAQ"
import BlogSection from "@/components/BlogSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OnlineServices />
        <BankingServices />
        <SecureGrowth />
        <CustomBanking />
        <Statistics />
        <LoanCalculator />
        <CreditCards />
        <LockerFacility />
        <FAQ />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
