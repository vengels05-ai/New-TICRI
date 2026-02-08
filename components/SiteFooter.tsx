export default function SiteFooter() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.line}>
          © {new Date().getFullYear()} The Informed Constitutional Republic Initiative. A Utah nonprofit corporation.
        </div>
        <div style={styles.line}>
          Educational and informational. No political party or candidate endorsements.
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    borderTop: "1px solid #e5e5e5",
    background: "white",
    marginTop: 40,
  },
  inner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "20px",
    color: "#444",
    fontSize: 13,
    lineHeight: 1.5,
  },
  line: {
    marginTop: 4,
  },
};
