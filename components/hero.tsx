export function Hero() {
  return (
    <div className="flex h-full flex-col justify-end p-8">
      <h1
        className="mb-4 font-sans text-5xl font-semibold text-white sm:text-6xl md:text-7xl lg:text-8xl"
        style={{ letterSpacing: "-0.06em" }}
      >
        Hansel Altamirano
      </h1>
      <p className="text-lg text-zinc-400 sm:text-xl">
        Product Engineer & AI-Native Builder
      </p>
    </div>
  );
}
