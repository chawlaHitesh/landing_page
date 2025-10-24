import Header from "components/Header"
import Hero from "components/Hero"
import ProductModules from "components/ProductModules"
import AISection from "components/AISection"
import Solutions from "components/Solutions"
import ResultsBand from "components/ResultsBand"
import Footer from "components/Footer"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-white dark:bg-encora-green">
        <Hero />
        <ProductModules />
        <AISection />
        <Solutions />
        <ResultsBand />
      </main>
      <Footer />
    </div>
  )
}