export type SiteNavItem = {
  href: string;
  label: string;
  highlight?: boolean;
};

export const primaryNavItems: SiteNavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/constitution', label: 'Constitution' },
  { href: '/articles', label: 'Articles' },
  { href: '/acts', label: 'Acts' },
  { href: '/executive-orders', label: 'Executive Orders' },
  { href: '/cases', label: 'Cases' },
];

export const secondaryNavItems: SiteNavItem[] = [
  { href: '/framework', label: 'Framework' },
  { href: '/rights', label: 'Rights' },
  { href: '/federalism', label: 'Federalism' },
  { href: '/state-powers', label: 'State Powers' },
  { href: '/state-constitutions', label: 'State Constitutions' },
  { href: '/us-code', label: 'U.S. Code' },
  { href: '/federal-funding', label: 'Federal Funding' },
  { href: '/fiscal-policy', label: 'Fiscal' },
  { href: '/taxes', label: 'Taxes' },
  { href: '/economics', label: 'Economics' },
  { href: '/spending', label: 'Government Spending' },
  { href: '/voting', label: 'Voting' },
  { href: '/parties', label: 'Parties & Policy' },
  { href: '/535', label: 'Project 535', highlight: true },
  { href: '/truth-and-law', label: 'Truth & Law' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const footerNavGroups = [
  {
    title: 'Learn',
    items: [
      ...primaryNavItems.filter((item) => item.href !== '/'),
      { href: '/rights', label: 'Rights' },
      { href: '/us-code', label: 'U.S. Code' },
    ],
  },
  {
    title: 'Explore',
    items: secondaryNavItems.filter((item) => !['/rights', '/us-code'].includes(item.href)),
  },
];
