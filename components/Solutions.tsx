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
    <section className="bg-white section-spacing">
      <div className="container-encora">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Solutions for Every Channel
          </h2>
          <p className="body-text-lg max-w-2xl mx-auto">
            Whether you're managing reuse, retail returns, or recovery, Encora adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg hover:bg-encora-gray transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-encora-gray rounded-full text-5xl hover:bg-encora-mint hover:scale-110 transition-all duration-300">
                  {solution.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-encora-green mb-3">{solution.title}</h3>
              <p className="body-text text-lg">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions