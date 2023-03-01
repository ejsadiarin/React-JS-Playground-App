import { useContext } from "react";
import { AppContext } from "../../App";

export default function Planets() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ];

  const { word } = useContext(AppContext);

  return (
    <div>
      <h2>This word is changing based on input: <i style={{ color: "red" }}>{word}</i> </h2>
      {planets.map((planet, key ) =>
        planet.isGasPlanet &&
        <h3 key={key}>{planet.name}</h3>
      )}
    </div>
  );
}