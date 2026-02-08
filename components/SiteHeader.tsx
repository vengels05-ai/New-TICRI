"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/config/nav";

export default function SiteHeader() {
  const pathname = usePathname?.() || "";
  return (
    <header style={styles.header}>
      <div style={styles.inner}>
        <Link href="/" style={styles.brand}>
          TICRI
        </Link>

        <nav style={styles.nav}>
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  ...styles.link,
                  ...(active ? styles.linkActive : {}),
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "white",
    borderBottom: "1px solid #e5e5e5",
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  brand: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: 0.2,
    color: "#111",
    textDecoration: "none",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  link: {
    fontSize: 14,
    color: "#333",
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 8,
  },
  linkActive: {
    background: "#f5f5f5",
    color: "#111",
  },
};
