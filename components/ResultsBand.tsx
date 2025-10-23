const ResultsBand = () => {
  const results = [
    {
      metric: "Return ↑",
      description: "Increase product recovery value",
    },
    {
      metric: "Labor ↓",
      description: "Reduce processing costs",
    },
    {
      metric: "Shrink ↓",
      description: "Minimize inventory loss",
    },
    {
      metric: "Compliance ✓",
      description: "Ready for regulations",
    },
  ]

  return (
    <section className="bg-encora-green text-white section-spacing">
      <div className="container-encora">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Proven Results</h2>
          <p className="text-lg font-light max-w-2xl mx-auto text-encora-mint">
            Encora customers see measurable improvements across all key metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl md:text-5xl font-bold text-encora-mint mb-3">
                {result.metric}
              </div>
              <p className="text-white font-light text-base sm:text-lg">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultsBand