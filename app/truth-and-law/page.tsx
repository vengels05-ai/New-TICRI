import TruthAndLawExplorer from '@/components/thesource/TruthAndLawExplorer';

export default function TruthAndLawPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5efe3,_#eef3f8_40%,_#d9e4ef_100%)] pb-20">
      <section className="border-b border-[#0F2C47]/10 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-3 inline-flex rounded-full border border-[#0F2C47]/15 bg-[#F7F3EA] px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#0F2C47]">
            Truth & Law
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[#0F2C47] sm:text-5xl">
            Executive Orders and U.S. Code in one searchable workspace.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#29465f]">
            Explore primary-source legal text directly from TheSource Worker data, formatted for readability and consistency.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <TruthAndLawExplorer />
      </div>
    </div>
  );
}
