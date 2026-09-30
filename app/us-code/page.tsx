import UscodeSearchClient from '@/components/thesource/UscodeSearchClient';

export const metadata = {
  title: 'U.S. Code Search | TICRI',
  description: 'Search and read U.S. Code sections inside TICRI, served from TheSource.',
};

export default function UscodePage() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] pb-16">
      <section className="border-b border-[#0F2C47]/10 bg-[#0F2C47] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D7B56D]">Primary Source Library</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">U.S. Code</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100">
            Search federal statutory law by keyword, citation, title number, or section and read the full section text in TICRI.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <UscodeSearchClient />
      </section>
    </main>
  );
}
