import React from "react";

export default function PageLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main style={styles.main}>
      <header style={styles.header}>
        <h1 style={styles.h1}>{title}</h1>
        {subtitle ? <p style={styles.subtitle}>{subtitle}</p> : null}
      </header>
      <section style={styles.content}>{children}</section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    maxWidth: 760,
    margin: "0 auto",
    padding: "34px 20px",
  },
  header: {
    marginBottom: 20,
  },
  h1: {
    fontSize: 32,
    lineHeight: 1.15,
    letterSpacing: -0.2,
    margin: 0,
    color: "#111",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 1.55,
    color: "#444",
  },
  content: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "#222",
  },
};
