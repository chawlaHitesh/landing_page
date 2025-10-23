import Header from "components/Header"
import Hero from "components/Hero"
import ProductModules from "components/ProductModules"
import Solutions from "components/Solutions"
import ResultsBand from "components/ResultsBand"
import Footer from "components/Footer"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductModules />
        <Solutions />
        <ResultsBand />
      </main>
      <Footer />
    </div>
  )
}
