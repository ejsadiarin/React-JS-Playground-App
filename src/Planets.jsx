export default function Planets() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true }
  ];

  return (
    <div>
      {planets.map((planet, key ) =>
        planet.isGasPlanet &&
        <h3 key={key}>{planet.name}</h3>
      )}
    </div>
  );
}