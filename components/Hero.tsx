import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-white text-center py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-sans text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#194C4D] mb-6">
          Smart Return Infrastructure
        </h1>
        <p className="text-lg sm:text-xl text-[#1F1F1F] mb-4 font-light">
          Encora transforms product returns into sustainable value. Reduce labor costs, minimize shrink, and maximize
          compliance with our intelligent platform.
        </p>
        <p className="text-base sm:text-lg text-[#6CC7A1] mb-12 font-medium">
          Trusted by leading retailers and brands worldwide
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            href="/pilot"
            className="bg-[#194C4D] text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-[#0F3536] transition duration-300 shadow-md"
          >
            Request a Pilot
          </Link>
          <Link
            href="/docs"
            className="border-2 border-[#6CC7A1] text-[#194C4D] px-8 py-3 rounded-lg text-base font-semibold hover:bg-[#F8F9F8] transition duration-300"
          >
            Developer Docs
          </Link>
        </div>
      </div>
    </section>
  )
}
