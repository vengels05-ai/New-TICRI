import type { Metadata } from 'next';
import Image from 'next/image';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About TICRI | The Informed Constitutional Republic Initiative',
  description: 'Learn about TICRI’s mission, independent approach to civic education, and founder Richard W. “Rich” Vengels III, a retired USAF Senior Master Sergeant.',
};

const sectionLinks = [
  { href: '#why-ticri-exists', label: 'Why TICRI exists' },
  { href: '#our-approach', label: 'Our approach' },
  { href: '#about-the-founder', label: 'About the founder' },
  { href: '#our-commitment', label: 'Our commitment' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <header className="bg-gradient-to-br from-[#0F2C47] to-[#1A3A5C] px-5 py-16 text-white sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 h-1 w-12 bg-[#C41E3A]" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About TICRI</h1>
          <p className="mt-5 text-lg text-slate-200 sm:text-xl">The Informed Constitutional Republic Initiative</p>
          <p className="mx-auto mt-8 max-w-2xl text-xl font-semibold leading-relaxed sm:text-2xl">
            An informed citizenry is the foundation of a functioning Constitutional Republic.
          </p>
        </div>
      </header>

      <nav aria-label="On this page" className="border-b border-slate-200 bg-slate-50 px-5 sm:px-8">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-7 gap-y-1 py-4">
          {sectionLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="inline-block rounded px-1 py-2 text-sm font-semibold text-[#0F2C47] underline-offset-4 hover:text-[#9B1829] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C41E3A]">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <section aria-label="Our mission" className={styles.section}>
          <div className={styles.sectionLabel}>
            <p className={styles.eyebrow}>Our mission</p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-[#0F2C47]">Understanding government. Empowering citizens.</p>
          </div>
          <div className={styles.copy}>
              <p>The Informed Constitutional Republic Initiative (TICRI) is an independent, nonpartisan civic education and research initiative founded in November 2025 by retired United States Air Force Senior Master Sergeant Richard W. &quot;Rich&quot; Vengels III.</p>
              <p>TICRI was established to make the American system of government more understandable, accessible, and transparent to the people it was created to serve.</p>
              <p>For nearly 250 years, the United States has operated under a constitutional framework establishing the structure, powers, responsibilities, and limitations of government. Throughout that time, legislation, regulations, judicial decisions, executive actions, and administrative policies have created an increasingly complex system that influences nearly every aspect of American life.</p>
              <p>Today, understanding that system often requires navigating thousands of pages of legislation, centuries of judicial precedent, extensive administrative regulations, and enormous quantities of government data.</p>
              <p>Yet the average American is expected to live under these laws, financially support these institutions, and participate in determining the nation&#x27;s future, often without the resources or knowledge necessary to fully understand how their government operates.</p>
              <p className={styles.emphasis}><strong>TICRI exists to help bridge that gap.</strong></p>
              <p>Our mission is to translate complex government information into clear, accessible explanations, enabling Americans and prospective citizens to better understand the Constitution, their rights and responsibilities, the institutions exercising government authority, and the consequences of public policy.</p>
          </div>
        </section>

        <section id="why-ticri-exists" aria-labelledby="why-heading" className={styles.section}>
          <div className={styles.sectionLabel}>
            <p className={styles.eyebrow}>The purpose</p>
            <h2 id="why-heading" className={styles.heading}>Why TICRI Exists</h2>
          </div>
          <div className={styles.copy}>
              <p>The United States was founded on the principle that legitimate government authority originates with the people.</p>
              <p>The Constitution begins with three words: <strong>&quot;We the People.&quot;</strong></p>
              <p>Those words establish the foundation of our Republic. Government does not grant the people their sovereignty. Rather, the people establish government, delegate authority to it, and impose limitations upon its exercise of that authority.</p>
              <p>But a system of self-government cannot function as intended without meaningful participation from its citizens.</p>
              <p className={styles.emphasis}><strong>Self-government requires far more than voting.</strong></p>
              <p>Elections are essential, but civic participation also requires understanding how laws are created, how courts interpret them, how government institutions exercise authority, what constitutional limitations apply, and how decisions affect the people they are intended to serve.</p>
              <p>Citizens should be equipped to examine not only what government is authorized to do, but also what it actually does, how it operates, who benefits from its decisions, who bears the consequences, and whether those actions remain consistent with constitutional principles.</p>
              <p>Without this understanding, Americans become increasingly dependent on political parties, elected officials, media organizations, and other institutions to interpret government and public policy for them.</p>
              <p>TICRI believes Americans should have the knowledge and tools necessary to evaluate those interpretations independently, challenge questionable actions, and form their own conclusions.</p>
              <p>This is particularly important in an era of deep political division. Americans will never agree on every issue, nor should they be expected to. But disagreements grounded in an informed understanding of government offer greater opportunities for constructive debate, cooperation, and meaningful accountability than disagreements driven primarily by partisan loyalty or incomplete information.</p>
              <p>TICRI views the United States Constitution as our foundational social contract, establishing the relationship between the people and their federal government. It is a framework that protects individual rights, limits government authority, and provides lawful mechanisms through which Americans can shape their nation&#x27;s future.</p>
              <p className={styles.emphasis}><strong>The government exists under the Constitution. The Constitution does not exist to serve the government.</strong></p>
              <p>Our purpose is to help Americans understand and preserve that relationship, ensuring that the direction of the nation remains a responsibility of an informed people rather than something determined exclusively by the institutions entrusted to govern them.</p>
          </div>
        </section>

        <section id="our-approach" aria-labelledby="approach-heading" className={styles.section}>
          <div className={styles.sectionLabel}>
            <p className={styles.eyebrow}>The principles</p>
            <h2 id="approach-heading" className={styles.heading}>Our Approach and Principles</h2>
          </div>
          <div className={styles.copy}>
              <p>TICRI does not endorse political parties, candidates, or partisan agendas.</p>
              <p>Nonpartisanship, however, does not mean avoiding criticism or treating every government action as equally justified.</p>
              <p>Government authority, constitutional limitations, fiscal responsibility, and institutional accountability should be examined using consistent standards, regardless of which political party holds power.</p>
              <p>Our research emphasizes primary sources, including the Constitution, federal and state legislation, judicial opinions, executive actions, administrative regulations, official records, and government financial and economic data.</p>
              <p>TICRI seeks to distinguish documented facts from interpretations, examine the historical and legal context surrounding government actions, and explain how multiple laws, policies, and institutional decisions interact to produce real-world consequences.</p>
              <p>We recognize that the intended function of a government system and its actual operation are not always the same. Understanding this distinction often requires looking beyond individual policies to examine implementation, institutional incentives, conflicting authorities, and cumulative effects.</p>
              <p>Our conclusions are open to scrutiny and revision when additional evidence warrants it. We encourage readers to examine original sources, challenge assumptions, and independently evaluate the information presented.</p>
              <p className={styles.emphasis}><strong>Our goal is not to tell Americans what to think, but to provide the knowledge necessary for them to think critically and decide for themselves.</strong></p>
              <p>TICRI is independently supported by its founder and does not receive funding from government entities, politicians, political parties, or outside organizations.</p>
          </div>
        </section>
      </div>

      <section id="about-the-founder" aria-labelledby="founder-heading" className="scroll-mt-24 border-y border-[#E8E1D5] bg-[#F5F1E8] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <h2 id="founder-heading" className={styles.eyebrow}>About the Founder</h2>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#0F2C47] sm:text-4xl">Richard W. &quot;Rich&quot; Vengels III</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Founder <span aria-hidden="true">|</span> Retired USAF Senior Master Sergeant <span aria-hidden="true">|</span> Civic Researcher</p>
          </div>

          <div className={styles.founderRow}>
            <figure className={styles.portrait}>
              <Image
                src="/images/about/rich-vengels.webp"
                alt="Richard W. Rich Vengels III, founder of TICRI, wearing a navy jacket and light blue shirt"
                width={1274}
                height={1592}
                sizes="(min-width: 1152px) 320px, (min-width: 768px) 30vw, (min-width: 480px) 384px, calc(100vw - 40px)"
                className="h-auto w-full rounded-lg border border-[#0F2C47]/10 shadow-sm"
              />
              <figcaption className={styles.caption}>
                <span className="block font-semibold text-[#0F2C47]">Richard W. &quot;Rich&quot; Vengels III</span>
                Founder, TICRI
              </figcaption>
            </figure>
            <div className={styles.copy}>
              <p>Rich Vengels is a retired United States Air Force Senior Master Sergeant, military instructor, organizational leader, and independent civic researcher with a lifelong interest in understanding how complex systems operate and influence the people who depend upon them.</p>
              <p>The son of a United States Army Noncommissioned Officer, Rich grew up across several states, attending eight different school districts. His interest in history, government, and understanding how things work developed early and was strengthened by an influential high school government teacher.</p>
              <p>During high school, Rich was selected to attend Missouri Boys State, where he participated in developing and operating a simulated state government and served as Speaker of the House of Representatives.</p>
              <p>In April 2006, Rich enlisted in the United States Air Force, beginning a 20-year career primarily supporting the nation&#x27;s land-based nuclear deterrence mission.</p>
              <p>His career included assignments at Minot Air Force Base, North Dakota; Vandenberg Air Force Base, California; and Hill Air Force Base, Utah. He progressed through technical maintenance, quality assurance, military instruction, operational management, and senior enlisted leadership positions.</p>
              <p>Over his career, Rich spent six years instructing military personnel, accumulated more than 4,000 hours of instructional experience, and held leadership responsibilities involving hundreds of Airmen. His final assignment supported operational test planning for the Sentinel intercontinental ballistic missile program, providing direct exposure to the complexities of federal defense acquisition, institutional oversight, operational requirements, and government accountability.</p>
              <p>Rich earned a bachelor&#x27;s degree in Management in 2016 and a master&#x27;s degree in Management in 2025, complementing his technical and instructional education.</p>
            </div>
          </div>

          <div className={styles.founderRow}>
            <figure className={styles.portrait}>
              <Image
                src="/images/about/rich-vengels-air-force.webp"
                alt="Rich Vengels in U.S. Air Force mess dress uniform beside a Hill Air Force Base Minuteman display"
                width={1172}
                height={1592}
                sizes="(min-width: 1152px) 320px, (min-width: 768px) 30vw, (min-width: 480px) 384px, calc(100vw - 40px)"
                className="h-auto w-full rounded-lg border border-[#0F2C47]/10 shadow-sm"
              />
              <figcaption className={styles.caption}>
                <span className="block font-semibold text-[#0F2C47]">20 years of service</span>
                Retired USAF Senior Master Sergeant
              </figcaption>
            </figure>
            <div className={styles.copy}>
              <p>In August 2021, his oldest daughter was diagnosed with Acute Myeloid Leukemia, fundamentally changing his family&#x27;s circumstances and perspective. Seeking specialized pediatric cancer care, Rich volunteered for reassignment to Utah, where his family relocated later that year.</p>
              <p>The experience reinforced his understanding that government policies, institutional decisions, and administrative systems carry consequences far beyond the organizations responsible for creating them.</p>
              <p>It also strengthened his commitment to service beyond the military, including his involvement in Bee the Hope, a nonprofit organization supporting families affected by pediatric cancer.</p>
              <p>Throughout his professional and personal life, Rich has emphasized the importance of understanding systems rather than simply accepting their intended purpose or established explanations. His approach focuses on examining authority, identifying limitations, evaluating real-world outcomes, and holding institutions accountable to the responsibilities entrusted to them.</p>
              <p>As he approached military retirement, his longstanding interest in constitutional government and civic education developed into a broader research effort focused on making the American system of government understandable to ordinary citizens.</p>
              <p>In November 2025, he formally established TICRI in Utah.</p>
              <p>Rich retired from the United States Air Force effective May 1, 2026, after 20 years of honorable service, at the rank of Senior Master Sergeant (E-8).</p>
              <p>Today, he continues researching constitutional law, government structure, public policy, institutional accountability, and the economic and social consequences of government decisions.</p>
              <p>Rich is married, has four children, and resides in Utah with his family.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <section id="our-commitment" aria-labelledby="commitment-heading" className={`${styles.section} ${styles.lastSection}`}>
          <div className={styles.sectionLabel}>
            <p className={styles.eyebrow}>Looking forward</p>
            <h2 id="commitment-heading" className={styles.heading}>Our Commitment</h2>
          </div>
          <div className={styles.copy}>
              <p>TICRI was not established on the belief that its founder possesses all the answers, or that any political party, individual, or institution has a monopoly on truth.</p>
              <p>It was established on the conviction that knowledge should be accessible, authority should be accountable, and citizens should possess the information necessary to participate meaningfully in their own governance.</p>
              <p>The strength of a constitutional republic ultimately depends on more than the institutions established to govern it. It depends on the people understanding those institutions, recognizing their responsibilities, protecting their rights, and remaining actively engaged in determining the nation&#x27;s direction.</p>
              <p className={styles.emphasis}><strong>A government of the people cannot remain accountable to the people if the people do not understand the government.</strong></p>
              <p>That is why TICRI exists.</p>
            <p className="mt-10 border-t border-slate-200 pt-6 text-sm italic leading-relaxed text-slate-600">
              The Informed Constitutional Republic Initiative is an independent civic education initiative. Its research and publications do not represent the official positions or endorsements of the United States Air Force, Department of Defense, or any government agency.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
