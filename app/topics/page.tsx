import Link from "next/link";
import PageLayout from "../../components/PageLayout";
import { TOPICS } from "../../config/nav";

export default function TopicsPage() {
  const readyTopics = TOPICS.filter(t => t.status !== "draft");
  
  return (
    <PageLayout
      title="Topics"
      subtitle="Browse constitutional literacy topics and structured analysis."
    >
      <div style={styles.grid}>
        {readyTopics.map((t) => (
          <Link key={t.href} href={t.href} style={styles.card}>
            <div style={styles.cardTitle}>{t.title}</div>
            <div style={styles.cardDesc}>{t.description}</div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 14,
    marginTop: 10,
  },
  card: {
    display: "block",
    border: "1px solid #e5e5e5",
    borderRadius: 14,
    padding: 16,
    textDecoration: "none",
    background: "white",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#111",
  },
  cardDesc: {
    marginTop: 8,
    fontSize: 14,
    color: "#444",
    lineHeight: 1.5,
  },
};
