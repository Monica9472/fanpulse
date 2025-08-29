import { useState } from "react";

export default function Teams() {
  // Premier League
  const premierLeagueTeams = [
    { name: "Arsenal", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Aston Villa", logo: "https://upload.wikimedia.org/wikipedia/en/f/f9/Aston_Villa_FC_crest_%282016%29.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Bournemouth", logo: "https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Brentford", logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Brighton & Hove Albion", logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Burnley", logo: "https://upload.wikimedia.org/wikipedia/en/6/62/Burnley_FC_badge.png", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Chelsea", logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Crystal Palace", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Crystal_Palace_FC_logo.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Everton", logo: "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Fulham", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Liverpool", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Luton Town", logo: "https://upload.wikimedia.org/wikipedia/en/8/81/Luton_Town_FC_logo.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Manchester City", logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Manchester United", logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Newcastle United", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Nottingham Forest", logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/Nottingham_Forest_logo.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Sheffield United", logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Tottenham Hotspur", logo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "West Ham United", logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
    { name: "Wolverhampton Wanderers", logo: "https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg", league: "Premier League", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" },
  ];



  // La Liga
  const laLigaTeams = [
  { name: "Real Madrid", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Barcelona", logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Atletico Madrid", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Athletic Bilbao", logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Club_Athletic_Bilbao_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Real Sociedad", logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Real_Sociedad_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Villarreal", logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Villarreal_CF_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Sevilla", logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Sevilla_FC_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Valencia", logo: "https://upload.wikimedia.org/wikipedia/en/c/ce/Valencia_CF_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Real Betis", logo: "https://upload.wikimedia.org/wikipedia/en/1/13/Real_betis_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Celta Vigo", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/RC_Celta_de_Vigo_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Osasuna", logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/CA_Osasuna_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Getafe", logo: "https://upload.wikimedia.org/wikipedia/en/4/46/Getafe_CF_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Rayo Vallecano", logo: "https://upload.wikimedia.org/wikipedia/en/8/8d/Rayo_Vallecano_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Mallorca", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Rcd_mallorca.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Girona", logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/Girona_FC_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Granada", logo: "https://upload.wikimedia.org/wikipedia/en/7/75/Granada_CF_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Alaves", logo: "https://upload.wikimedia.org/wikipedia/en/c/cd/Deportivo_Alav%C3%A9s_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Las Palmas", logo: "https://upload.wikimedia.org/wikipedia/en/a/a4/UD_Las_Palmas_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Cadiz", logo: "https://upload.wikimedia.org/wikipedia/en/3/3f/C%C3%A1diz_CF_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
  { name: "Espanyol", logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/Rcd_espanyol_logo.svg", league: "La Liga", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg" },
];


  // Serie A
  const serieATeams = [
  { name: "Juventus", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "AC Milan", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Inter Milan", logo: "https://upload.wikimedia.org/wikipedia/en/0/05/FC_Internazionale_Milano_2021.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Napoli", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Napoli.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Roma", logo: "https://upload.wikimedia.org/wikipedia/en/f/f7/AS_Roma_logo_%282017%29.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Lazio", logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/SS_Lazio.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Fiorentina", logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/ACF_Fiorentina_2.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Atalanta", logo: "https://upload.wikimedia.org/wikipedia/en/6/66/AtalantaBC.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Torino", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Torino_FC_Logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Sassuolo", logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/US_Sassuolo_Calcio_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Udinese", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Udinese_Calcio_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Bologna", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/Bologna_F.C._1909_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Genoa", logo: "https://upload.wikimedia.org/wikipedia/en/7/76/Genoa_C.F.C._logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Sampdoria", logo: "https://upload.wikimedia.org/wikipedia/en/d/d2/U.C._Sampdoria_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Hellas Verona", logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Hellas_Verona_FC_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Empoli", logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Empoli_FC_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Salernitana", logo: "https://upload.wikimedia.org/wikipedia/en/5/56/US_Salernitana_1919_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Monza", logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/AC_Monza_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Cagliari", logo: "https://upload.wikimedia.org/wikipedia/en/8/88/Cagliari_Calcio_logo.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
  { name: "Lecce", logo: "https://upload.wikimedia.org/wikipedia/en/2/2d/US_Lecce.svg", league: "Serie A", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg" },
];

  // Bundesliga
   const bundesligaTeams = [
  { name: "Bayern Munich", logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_Munich_logo_%282017%29.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Borussia Dortmund", logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "RB Leipzig", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/RB_Leipzig_2014_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Union Berlin", logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/1._FC_Union_Berlin_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "SC Freiburg", logo: "https://upload.wikimedia.org/wikipedia/en/8/81/SC_Freiburg_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Bayer Leverkusen", logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Eintracht Frankfurt", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Eintracht_Frankfurt_Logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Borussia Mönchengladbach", logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Wolfsburg", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo-VfL-Wolfsburg.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Mainz 05", logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/FSV_Mainz_05.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Cologne", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/FC_Cologne_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Hoffenheim", logo: "https://upload.wikimedia.org/wikipedia/en/e/e7/Logo_TSG_Hoffenheim.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Werder Bremen", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/SV-Werder-Bremen-Logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Augsburg", logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/FC_Augsburg_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "VfB Stuttgart", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/VfB_Stuttgart_1893_Logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Bochum", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/VfL_Bochum_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Heidenheim", logo: "https://upload.wikimedia.org/wikipedia/en/9/95/1._FC_Heidenheim_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
  { name: "Darmstadt 98", logo: "https://upload.wikimedia.org/wikipedia/en/0/04/SV_Darmstadt_98_logo.svg", league: "Bundesliga", leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg" },
];


  // Ligue 1
const ligue1Teams = [
  { name: "Paris Saint-Germain", logo: "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Marseille", logo: "https://upload.wikimedia.org/wikipedia/en/2/27/Olympique_Marseille_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Lyon", logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Olympique_Lyonnais_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Monaco", logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/AS_Monaco_FC.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Lille", logo: "https://upload.wikimedia.org/wikipedia/en/5/54/Lille_OSC_2018_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Rennes", logo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Stade_Rennais_FC.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Nice", logo: "https://upload.wikimedia.org/wikipedia/en/6/6d/OGC_Nice_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Nantes", logo: "https://upload.wikimedia.org/wikipedia/en/2/2e/FC_Nantes_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Lens", logo: "https://upload.wikimedia.org/wikipedia/en/6/62/RC_Lens_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Strasbourg", logo: "https://upload.wikimedia.org/wikipedia/en/f/f4/Racing_Club_de_Strasbourg_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Montpellier", logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/Montpellier_HSC_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Toulouse", logo: "https://upload.wikimedia.org/wikipedia/en/6/63/Toulouse_FC_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Reims", logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/Stade_de_Reims_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Brest", logo: "https://upload.wikimedia.org/wikipedia/en/5/5a/Stade_Brestois_29_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Clermont", logo: "https://upload.wikimedia.org/wikipedia/en/1/17/Clermont_Foot_63_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Metz", logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/FC_Metz_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Lorient", logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/FC_Lorient_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
  { name: "Le Havre", logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Le_Havre_AC_logo.svg", league: "Ligue 1", leagueLogo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg" },
];
  // Combine all
  const leagues = [
    { name: "Premier League", logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg", teams: premierLeagueTeams },
    { name: "La Liga", logo: "https://upload.wikimedia.org/wikipedia/en/9/92/La_Liga_Santander.svg", teams: laLigaTeams },
    { name: "Serie A", logo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Serie_A_logo_%282019%29.svg", teams: serieATeams },
    { name: "Bundesliga", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Bundesliga_logo_%282017%29.svg", teams: bundesligaTeams },
    { name: "Ligue 1", logo: "https://upload.wikimedia.org/wikipedia/en/c/c7/Ligue_1_Uber_Eats_logo.svg", teams: ligue1Teams },
  ];

  // 🔍 Search + Filter states
  const [search, setSearch] = useState("");
  const [leagueFilter, setLeagueFilter] = useState("All");

  // Helper: Flatten all teams for search
  const allTeams = leagues.flatMap(l => l.teams);

  const filteredTeams = allTeams.filter((team) => {
    const matchesSearch = team.name.toLowerCase().includes(search.toLowerCase());
    const matchesLeague = leagueFilter === "All" || team.league === leagueFilter;
    return matchesSearch && matchesLeague;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Explore Teams ⚽</h2>

      {/* 🔍 Search + Filter */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Search team..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            flex: 1,
          }}
        />
        <select
          value={leagueFilter}
          onChange={(e) => setLeagueFilter(e.target.value)}
          style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "6px" }}
        >
          <option value="All">All Leagues</option>
          {leagues.map((l, i) => (
            <option key={i} value={l.name}>{l.name}</option>
          ))}
        </select>
      </div>

      {/* Grouped by League */}
      {leagues.map((league, idx) => {
        // Filter each league section
        const leagueTeams = filteredTeams.filter(t => t.league === league.name);
        if (leagueTeams.length === 0) return null; // hide if empty after filter

        return (
          <div key={idx} style={{ marginBottom: "40px" }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={league.logo} alt={league.name} style={{ width: "40px" }} />
              {league.name}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "20px",
              }}
            >
              {leagueTeams.map((team, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "15px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={team.logo}
                    alt={team.name}
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h3 style={{ marginTop: "10px" }}>{team.name}</h3>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}