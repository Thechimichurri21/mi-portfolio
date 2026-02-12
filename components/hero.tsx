export function Hero() {
  return (
    <div className="flex h-full flex-col justify-end p-8">
      <h1 className="mb-4 text-5xl font-semibold text-white sm:text-6xl md:text-7xl lg:text-8xl" style={{ letterSpacing: '-0.04em' }}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
          Hansel Altamirano
        </span>
      </h1>
      <p className="text-lg text-slate-400 sm:text-xl">
        Product Engineer & AI-Native Builder
      </p>
    </div>
  );
}
