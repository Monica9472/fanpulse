import { useParams } from "react-router-dom";

const teams = {
  "Manchester United": {
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    players: [
      "André Onana", "Raphaël Varane", "Lisandro Martínez", "Luke Shaw",
      "Casemiro", "Bruno Fernandes", "Mason Mount", "Christian Eriksen",
      "Marcus Rashford", "Antony", "Rasmus Højlund", "Jadon Sancho"
    ]
  },
  "Chelsea": {
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    players: [
      "Robert Sánchez", "Thiago Silva", "Benoît Badiashile", "Reece James",
      "Ben Chilwell", "Enzo Fernández", "Moises Caicedo", "Conor Gallagher",
      "Raheem Sterling", "Mykhailo Mudryk", "Nicolas Jackson", "Christopher Nkunku"
    ]
  },
  "Arsenal": {
    logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    players: [
      "Aaron Ramsdale", "William Saliba", "Gabriel Magalhães", "Ben White",
      "Oleksandr Zinchenko", "Declan Rice", "Martin Ødegaard", "Thomas Partey",
      "Bukayo Saka", "Gabriel Jesus", "Leandro Trossard", "Kai Havertz"
    ]
  },
  "Liverpool": {
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    players: [
      "Alisson Becker", "Virgil van Dijk", "Ibrahima Konaté", "Trent Alexander-Arnold",
      "Andrew Robertson", "Alexis Mac Allister", "Dominik Szoboszlai", "Curtis Jones",
      "Mohamed Salah", "Darwin Núñez", "Luis Díaz", "Diogo Jota"
    ]
  },
  "Manchester City": {
    logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    players: [
      "Ederson", "Kyle Walker", "Rúben Dias", "John Stones",
      "Joško Gvardiol", "Rodri", "Kevin De Bruyne", "Bernardo Silva",
      "Phil Foden", "Erling Haaland", "Jack Grealish", "Julián Álvarez"
    ]
  },
  "Real Madrid": {
    logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    players: [
      "Thibaut Courtois", "David Alaba", "Éder Militão", "Antonio Rüdiger",
      "Ferland Mendy", "Luka Modrić", "Toni Kroos", "Federico Valverde",
      "Jude Bellingham", "Vinícius Jr", "Rodrygo", "Joselu"
    ]
  },
  "Barcelona": {
    logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    players: [
      "Marc-André ter Stegen", "Ronald Araújo", "Jules Koundé", "Alejandro Balde",
      "Frenkie de Jong", "Pedri", "Gavi", "İlkay Gündoğan",
      "Raphinha", "Robert Lewandowski", "Lamine Yamal", "Ferran Torres"
    ]
  },
  "Atletico Madrid": {
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg",
    players: [
      "Jan Oblak", "José Giménez", "Mario Hermoso", "Axel Witsel",
      "Rodrigo De Paul", "Koke", "Saúl Ñíguez", "Thomas Lemar",
      "Álvaro Morata", "Antoine Griezmann", "Memphis Depay", "Ángel Correa"
    ]
  },
  "Bayern Munich": {
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_München_logo_%282017%29.svg",
    players: [
      "Manuel Neuer", "Joshua Kimmich", "Dayot Upamecano", "Matthijs de Ligt",
      "Alphonso Davies", "Leon Goretzka", "Jamal Musiala", "Thomas Müller",
      "Serge Gnabry", "Kingsley Coman", "Leroy Sané", "Harry Kane"
    ]
  },
  "Borussia Dortmund": {
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    players: [
      "Gregor Kobel", "Niklas Süle", "Mats Hummels", "Emre Can",
      "Julian Brandt", "Karim Adeyemi", "Donyell Malen", "Marcel Sabitzer",
      "Marco Reus", "Youssoufa Moukoko", "Nico Schlotterbeck", "Felix Nmecha"
    ]
  },
  "PSG": {
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
    players: [
      "Gianluigi Donnarumma", "Marquinhos", "Achraf Hakimi", "Milan Škriniar",
      "Lucas Hernández", "Fabián Ruiz", "Vitinha", "Marco Asensio",
      "Ousmane Dembélé", "Kylian Mbappé", "Randal Kolo Muani", "Gonçalo Ramos"
    ]
  },
  "Juventus": {
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg",
    players: [
      "Wojciech Szczęsny", "Danilo", "Bremer", "Alex Sandro",
      "Adrien Rabiot", "Manuel Locatelli", "Weston McKennie", "Filip Kostić",
      "Federico Chiesa", "Dusan Vlahović", "Arkadiusz Milik", "Moise Kean"
    ]
  },
  "AC Milan": {
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
    players: [
      "Mike Maignan", "Davide Calabria", "Fikayo Tomori", "Malick Thiaw",
      "Theo Hernández", "Ismaël Bennacer", "Ruben Loftus-Cheek", "Christian Pulisic",
      "Samuel Chukwueze", "Olivier Giroud", "Rafael Leão", "Noah Okafor"
    ]
  },
  "Inter Milan": {
    logo: "https://upload.wikimedia.org/wikipedia/en/0/05/FC_Internazionale_Milano_2021.svg",
    players: [
      "Yann Sommer", "Stefan de Vrij", "Francesco Acerbi", "Denzel Dumfries",
      "Federico Dimarco", "Nicolò Barella", "Hakan Çalhanoğlu", "Henrikh Mkhitaryan",
      "Marcus Thuram", "Lautaro Martínez", "Marko Arnautović", "Juan Cuadrado"
    ]
  },
  "Napoli": {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg",
    players: [
      "Alex Meret", "Giovanni Di Lorenzo", "Amir Rrahmani", "Min-jae Kim",
      "Piotr Zieliński", "Stanislav Lobotka", "Eljif Elmas", "Matteo Politano",
      "Khvicha Kvaratskhelia", "Victor Osimhen", "Giacomo Raspadori", "Hirving Lozano"
    ]
  }
};

export default function TeamDetail() {
  const { teamName } = useParams();
  const team = teams[teamName];

  if (!team) {
    return <h2 style={{ padding: "20px" }}>Team not found ⚠️</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{teamName}</h2>
      <img
        src={team.logo}
        alt={teamName}
        style={{ width: "100px", marginBottom: "20px" }}
      />
      <h3>Players</h3>
      <ul>
        {team.players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}
