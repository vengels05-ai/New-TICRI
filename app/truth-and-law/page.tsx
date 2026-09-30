import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, Landmark } from 'lucide-react';

export default function TruthAndLawPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5efe3,_#eef3f8_40%,_#d9e4ef_100%)] pb-20">
      <section className="border-b border-[#0F2C47]/10 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-3 inline-flex rounded-full border border-[#0F2C47]/15 bg-[#F7F3EA] px-4 py-1 text-xs font-bold uppercase tracking-[0.24em] text-[#0F2C47]">
            Truth & Law
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[#0F2C47] sm:text-5xl">
            Executive Orders, Bills, and the U.S. Code in one searchable workspace.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#29465f]">
            Explore primary-source legal text directly from TheSource Worker data, formatted for readability and consistency.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <Link
            href="/truth-and-law/bills"
            className="group border border-[#0F2C47]/10 bg-white p-6 shadow-sm transition hover:border-[#C41E3A]/40 hover:shadow-md"
          >
            <Landmark className="h-7 w-7 text-[#C41E3A]" />
            <h2 className="mt-4 text-2xl font-black text-[#0F2C47]">Bills</h2>
            <p className="mt-2 text-sm leading-6 text-[#29465f]">
              Search congressional bills by title, keyword, Congress number, and latest action.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0F2C47] group-hover:text-[#C41E3A]">
              Open search <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            href="/truth-and-law/executive-orders"
            className="group border border-[#0F2C47]/10 bg-white p-6 shadow-sm transition hover:border-[#C41E3A]/40 hover:shadow-md"
          >
            <FileText className="h-7 w-7 text-[#C41E3A]" />
            <h2 className="mt-4 text-2xl font-black text-[#0F2C47]">Executive Orders</h2>
            <p className="mt-2 text-sm leading-6 text-[#29465f]">
              Search orders by text, EO number, signing date, citation, and president.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0F2C47] group-hover:text-[#C41E3A]">
              Open search <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          <Link
            href="/us-code"
            className="group border border-[#0F2C47]/10 bg-white p-6 shadow-sm transition hover:border-[#C41E3A]/40 hover:shadow-md"
          >
            <BookOpen className="h-7 w-7 text-[#C41E3A]" />
            <h2 className="mt-4 text-2xl font-black text-[#0F2C47]">U.S. Code</h2>
            <p className="mt-2 text-sm leading-6 text-[#29465f]">
              Search federal statutory law by keyword, citation, title number, and section.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0F2C47] group-hover:text-[#C41E3A]">
              Open search <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}
