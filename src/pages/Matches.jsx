export default function Matches() {
  const matches = [
    // Premier League
    {
      id: 1,
      home: { name: "Manchester United", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" },
      away: { name: "Chelsea", logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg" },
      date: "Aug 30, 2025",
    },
    {
      id: 2,
      home: { name: "Arsenal", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg" },
      away: { name: "Liverpool", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg" },
      date: "Sep 2, 2025",
    },
    {
      id: 3,
      home: { name: "Manchester City", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg" },
      away: { name: "Tottenham", logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg" },
      date: "Sep 5, 2025",
    },
    {
      id: 4,
      home: { name: "Newcastle United", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg" },
      away: { name: "Everton", logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg" },
      date: "Sep 8, 2025",
    },

    // La Liga
    {
      id: 5,
      home: { name: "Real Madrid", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" },
      away: { name: "Barcelona", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg" },
      date: "Sep 10, 2025",
    },
    {
      id: 6,
      home: { name: "Atletico Madrid", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg" },
      away: { name: "Sevilla", logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Sevilla_FC_logo.svg" },
      date: "Sep 12, 2025",
    },
    {
      id: 7,
      home: { name: "Valencia", logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg" },
      away: { name: "Real Sociedad", logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg" },
      date: "Sep 14, 2025",
    },
    {
      id: 8,
      home: { name: "Real Betis", logo: "https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg" },
      away: { name: "Villarreal", logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg" },
      date: "Sep 16, 2025",
    },

    // Serie A
    {
      id: 9,
      home: { name: "AC Milan", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg" },
      away: { name: "Inter Milan", logo: "https://upload.wikimedia.org/wikipedia/en/0/05/FC_Internazionale_Milano_2021.svg" },
      date: "Sep 18, 2025",
    },
    {
      id: 10,
      home: { name: "Juventus", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg" },
      away: { name: "Napoli", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg" },
      date: "Sep 20, 2025",
    },
    {
      id: 11,
      home: { name: "AS Roma", logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg" },
      away: { name: "Lazio", logo: "https://upload.wikimedia.org/wikipedia/en/e/e2/S.S._Lazio_badge.svg" },
      date: "Sep 22, 2025",
    },
    {
      id: 12,
      home: { name: "Fiorentina", logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/ACF_Fiorentina_2.svg" },
      away: { name: "Torino", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Torino_FC_logo.svg" },
      date: "Sep 24, 2025",
    },

    // Bundesliga
    {
      id: 13,
      home: { name: "Bayern Munich", logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_%282017%29.svg" },
      away: { name: "Borussia Dortmund", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg" },
      date: "Sep 26, 2025",
    },
    {
      id: 14,
      home: { name: "RB Leipzig", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg" },
      away: { name: "Bayer Leverkusen", logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg" },
      date: "Sep 28, 2025",
    },
    {
      id: 15,
      home: { name: "Borussia Monchengladbach", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_Mönchengladbach_logo.svg" },
      away: { name: "Eintracht Frankfurt", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Eintracht_Frankfurt_Logo.svg" },
      date: "Sep 30, 2025",
    },
    {
      id: 16,
      home: { name: "Wolfsburg", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_VfL_Wolfsburg.svg" },
      away: { name: "Schalke 04", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/FC_Schalke_04_Logo.svg" },
      date: "Oct 2, 2025",
    },

    // Ligue 1
    {
      id: 17,
      home: { name: "PSG", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg" },
      away: { name: "Marseille", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Olympique_Marseille_logo.svg" },
      date: "Oct 4, 2025",
    },
    {
      id: 18,
      home: { name: "Lyon", logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Olympique_Lyonnais.svg" },
      away: { name: "Monaco", logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg" },
      date: "Oct 6, 2025",
    },
    {
      id: 19,
      home: { name: "Nice", logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/OGC_Nice_logo.svg" },
      away: { name: "Lille", logo: "https://upload.wikimedia.org/wikipedia/en/5/54/Lille_OSC_2018_logo.svg" },
      date: "Oct 8, 2025",
    },
    {
      id: 20,
      home: { name: "Rennes", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Stade_Rennais_FC.svg" },
      away: { name: "Nantes", logo: "https://upload.wikimedia.org/wikipedia/en/4/44/FC_Nantes_logo.svg" },
      date: "Oct 10, 2025",
    },

    // Extra fixtures to hit 30
    { id: 21, home: { name: "West Ham United", logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg" }, away: { name: "Brighton", logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_&_Hove_Albion_logo.svg" }, date: "Oct 12, 2025" },
    { id: 22, home: { name: "Leicester City", logo: "https://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png" }, away: { name: "Aston Villa", logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/Aston_Villa_FC_new_crest.svg" }, date: "Oct 14, 2025" },
    { id: 23, home: { name: "Real Madrid", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg" }, away: { name: "Athletic Bilbao", logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Athletic_Bilbao_logo.svg" }, date: "Oct 16, 2025" },
    { id: 24, home: { name: "Roma", logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg" }, away: { name: "Napoli", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg" }, date: "Oct 18, 2025" },
    { id: 25, home: { name: "Sevilla", logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Sevilla_FC_logo.svg" }, away: { name: "Valencia", logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/Valenciacf.svg" }, date: "Oct 20, 2025" },
    { id: 26, home: { name: "Marseille", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Olympique_Marseille_logo.svg" }, away: { name: "Nice", logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/OGC_Nice_logo.svg" }, date: "Oct 22, 2025" },
    { id: 27, home: { name: "Bayern Munich", logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_%282017%29.svg" }, away: { name: "Eintracht Frankfurt", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Eintracht_Frankfurt_Logo.svg" }, date: "Oct 24, 2025" },
    { id: 28, home: { name: "Borussia Dortmund", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg" }, away: { name: "RB Leipzig", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg" }, date: "Oct 26, 2025" },
    { id: 29, home: { name: "PSG", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg" }, away: { name: "Lyon", logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Olympique_Lyonnais.svg" }, date: "Oct 28, 2025" },
    { id: 30, home: { name: "Inter Milan", logo: "https://upload.wikimedia.org/wikipedia/en/0/05/FC_Internazionale_Milano_2021.svg" }, away: { name: "Juventus", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg" }, date: "Oct 30, 2025" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Upcoming Soccer Matches ⚽</h2>
      {matches.map((match) => (
        <div
          key={match.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "12px",
            backgroundColor: "#f9f9f9",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Home team */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={match.home.logo} alt={match.home.name} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
            <strong>{match.home.name}</strong>
          </div>

          <span style={{ fontWeight: "bold" }}>vs</span>

          {/* Away team */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={match.away.logo} alt={match.away.name} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
            <strong>{match.away.name}</strong>
          </div>

          {/* Date */}
          <p style={{ marginLeft: "20px", fontStyle: "italic" }}>{match.date}</p>
        </div>
      ))}
    </div>
  );
}
