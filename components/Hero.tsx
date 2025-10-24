import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-encora-gray to-white dark:from-encora-green dark:via-encora-green-dark dark:to-encora-green min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-80 h-80 bg-encora-mint/10 dark:bg-encora-mint/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-encora-green/5 dark:bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-encora-mint/5 dark:bg-encora-mint/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-encora relative z-10 px-4 sm:px-8 text-center">
        {/* Announcement badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white dark:bg-white/10 border border-encora-mint/30 dark:border-encora-mint/50 rounded-full shadow-sm animate-fade-in backdrop-blur-sm">
          <span className="flex items-center justify-center w-2 h-2 bg-encora-mint rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-encora-green dark:text-white">Trusted by leading retailers worldwide</span>
        </div>

        {/* Main headline with gradient */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="block text-encora-green dark:text-white leading-tight">Smart Return</span>
          <span className="block bg-gradient-to-r from-encora-green via-encora-mint to-encora-green dark:from-encora-mint dark:via-white dark:to-encora-mint bg-clip-text text-transparent leading-tight">
            Infrastructure
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-encora-text/80 dark:text-white/80 mb-4 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up">
          Transform product returns into sustainable value. Reduce labor costs, minimize shrink, and maximize compliance with intelligent automation.
        </p>

        {/* Key value props */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm sm:text-base text-encora-green/70 dark:text-encora-mint animate-slide-up">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-encora-mint dark:text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">40% Faster Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-encora-mint dark:text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Compliance Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-encora-mint dark:text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">25% Better Recovery</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-slide-up mb-12">
          <Link
            href="/pilot"
            className="group bg-encora-green dark:bg-white text-white dark:text-encora-green px-8 py-3 rounded-lg text-base font-semibold hover:bg-encora-green-dark dark:hover:bg-encora-mint transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2"
          >
            Request a Pilot
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/docs"
            className="group border-2 border-encora-mint dark:border-white text-encora-green dark:text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-encora-gray dark:hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Developer Docs
          </Link>
        </div>

        {/* Social proof / Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 pt-8 border-t border-encora-green/10 dark:border-white/20 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-encora-green dark:text-white mb-1">500K+</div>
            <div className="text-sm text-encora-text/60 dark:text-white/60">Returns Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-encora-green dark:text-white mb-1">50+</div>
            <div className="text-sm text-encora-text/60 dark:text-white/60">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-encora-green dark:text-white mb-1">99.9%</div>
            <div className="text-sm text-encora-text/60 dark:text-white/60">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  )
}