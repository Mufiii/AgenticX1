




export function BusinessIntelligenceSection() {
    return (
      <section
        id="business-intelligence"
        className="relative overflow-hidden bg-[#0b0a0f] text-white"
      >
        <div className="relative mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-8 lg:py-[120px]">
          
          {/* Content */}
          <div
            className="mx-auto max-w-[820px] text-center"
            data-campus-reveal
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#635BFF]" />
  
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b8cff]">
                Business Intelligence × Business Psychology
              </span>
  
              <span className="h-px w-10 bg-[#635BFF]" />
            </div>
  
            {/* Headline */}
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.035em]">
              Understand the Business.
              <br />
              <span className="bg-gradient-to-r from-[#635BFF] via-[#8B6CFF] to-[#B39AFF] bg-clip-text text-transparent">
                Understand the People.
              </span>
            </h2>
  
            {/* Description */}
            <p className="mx-auto mt-7 max-w-[680px] text-[16px] leading-[1.75] text-white/55 sm:text-[17px]">
              Understand your business through both{' '}
              <span className="text-white/85">data and human behaviour</span>{' '}
              to make smarter decisions and build better AI-powered systems.
            </p>
          </div>
  
          {/* Visual */}
          <div
            className="relative mx-auto mt-10 w-full max-w-[1180px] sm:mt-16 lg:mt-20"
            data-campus-reveal
          >
            {/* Soft glow behind image */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#635BFF]/[0.08] blur-[100px]" />
  
            <div className="relative">
              <img
                src="/images/bussiness_intelligence.png"
                alt="Business Intelligence and Business Psychology"
                className="mx-auto block h-auto w-full object-contain"
              />
            </div>
          </div>
  
        </div>
      </section>
    )
  }