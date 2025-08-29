import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#111",
        color: "white",
      }}
    >
      <h2>FanPulse ⚡</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/matches" style={{ color: "white", textDecoration: "none" }}>
          Matches
        </Link>
        <Link to="/posts" style={{ color: "white", textDecoration: "none" }}>
          Posts
        </Link>
        <Link to="/teams" style={{ color: "white", textDecoration: "none" }}>
          Teams
        </Link>
      </div>
    </nav>
  );
}
