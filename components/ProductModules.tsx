const ProductModules = () => {
  const modules = [
    {
      title: "Bins",
      description: "Intelligent bin management and tracking for efficient returns processing.",
      icon: "📦",
    },
    {
      title: "Tags",
      description: "Smart labeling and identification system for product categorization.",
      icon: "🏷️",
    },
    {
      title: "Verify",
      description: "Automated verification and compliance checking for all returns.",
      icon: "✓",
    },
    {
      title: "Connect",
      description: "Seamless integration with your existing retail and logistics systems.",
      icon: "🔗",
    },
  ]

  return (
    <section className="bg-[#F8F9F8] py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#194C4D] mb-4">Core Platform Modules</h2>
          <p className="text-lg text-[#1F1F1F] font-light max-w-2xl mx-auto">
            Encora's modular architecture gives you the flexibility to build the returns solution that fits your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-[#E0E0E0]"
            >
              <div className="text-4xl mb-4">{module.icon}</div>
              <h3 className="text-xl font-bold text-[#194C4D] mb-3">{module.title}</h3>
              <p className="text-[#1F1F1F] font-light">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductModules
