export default function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 200, background: "#222", color: "white" }}>
        Sidebar
      </div>

      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
}
