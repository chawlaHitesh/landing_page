const Solutions = () => {
  const solutions = [
    {
      title: "Reuse",
      description: "Maximize product lifecycle value through intelligent reuse and resale channels.",
      icon: "♻️",
    },
    {
      title: "Retail",
      description: "Streamline in-store and online returns with unified processing.",
      icon: "🛍️",
    },
    {
      title: "Recovery",
      description: "Recover maximum value from damaged or defective products.",
      icon: "💰",
    },
  ]

  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#194C4D] mb-4">
            Solutions for Every Channel
          </h2>
          <p className="text-lg text-[#1F1F1F] font-light max-w-2xl mx-auto">
            Whether you're managing reuse, retail returns, or recovery, Encora adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-[#194C4D] mb-3">{solution.title}</h3>
              <p className="text-[#1F1F1F] font-light text-lg">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
