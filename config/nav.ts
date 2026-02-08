export type NavItem = { label: string; href: string };
export type TopicItem = { title: string; href: string; description: string; status?: "ready" | "draft" };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/constitution" },
  { label: "Topics", href: "/topics" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Edit this list to match your real routes.
// Keep it honest. If a page is unfinished, set status: "draft" and do not feature it on the homepage.
export const TOPICS: TopicItem[] = [
  { title: "Federalism", href: "/federalism", description: "How power is divided between federal and state governments.", status: "ready" },
  { title: "Rights", href: "/rights", description: "Bill of Rights basics, scope, and common misconceptions.", status: "ready" },
  { title: "Separation of Powers", href: "/separation-of-powers", description: "Legislative, executive, and judicial roles in practice.", status: "ready" },

  // Example draft topic. Keep it listed on /topics but do not promote it elsewhere.
  { title: "Truth and Law", href: "/truth-and-law", description: "Planned content and definitions. In progress.", status: "draft" },
];
