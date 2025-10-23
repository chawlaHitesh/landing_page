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
    <section className="bg-[#194C4D] text-white py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Proven Results</h2>
          <p className="text-lg font-light max-w-2xl mx-auto text-[#6CC7A1]">
            Encora customers see measurable improvements across all key metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#6CC7A1] mb-3">{result.metric}</div>
              <p className="text-white font-light">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResultsBand
