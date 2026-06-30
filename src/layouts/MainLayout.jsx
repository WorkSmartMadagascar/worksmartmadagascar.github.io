import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* SIDEBAR */}
      <div style={{ width: 220, background: "#1f2937", color: "white", padding: 20 }}>
        <h2>DPMS</h2>

        <nav style={{ marginTop: 30 }}>
          <p><Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link></p>
          <p><Link to="/" style={{ color: "white" }}>Logout</Link></p>
        </nav>
      </div>

      {/* CONTENT */}
      <div style={{ flex: 1, padding: 20 }}>
        {children}
      </div>

    </div>
  );
}
