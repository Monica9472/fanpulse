import { Routes, Route, BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import Matches from "./pages/Matches";
import Posts from "./pages/Posts";
import Teams from "./pages/Teams";
import TeamDetail from "./pages/TeamDetail"; // ✅ new import

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to FanPulse ⚡</h2>
      <p>Your hub for everything football (soccer). ⚽</p>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Featured Match */}
        <div
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "6px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3>🏆 Featured Match</h3>
          <p>
            <strong>Real Madrid vs Barcelona</strong> <br />
            Sep 7, 2025
          </p>
        </div>

        {/* Fan Highlight */}
        <div
          style={{
            background: "#fff",
            padding: "15px",
            borderRadius: "6px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3>📢 Fan Highlight</h3>
          <p>
            <strong>🔥 ArsenalTillIDie:</strong> “Liverpool has no chance, Arsenal is too strong!”
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div style={{ marginTop: "30px" }}>
        <a
          href="/matches"
          style={{
            marginRight: "15px",
            background: "#1d3557",
            color: "white",
            padding: "10px 15px",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          View Matches
        </a>
        <a
          href="/posts"
          style={{
            marginRight: "15px",
            background: "#457b9d",
            color: "white",
            padding: "10px 15px",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Join Discussions
        </a>
        <a
          href="/teams"
          style={{
            background: "#2a9d8f",
            color: "white",
            padding: "10px 15px",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Explore Teams
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:teamName" element={<TeamDetail />} /> {/* ✅ new route */}
      </Routes>
    </BrowserRouter>
  );
}
