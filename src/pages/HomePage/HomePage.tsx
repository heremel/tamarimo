import { useState } from "react";
import Marimo from "../../components/Marimo/Marimo";
import styles from "./HomePage.module.css";

interface MarimoType {
  id: string;
  name: string;
  eggImage: string;
  initialStats: { hunger: number; thirst: number; fun: number };
}

const marimos: MarimoType[] = [
  {
    id: "baby",
    name: "Baby Marimo",
    eggImage: "/happytama.png",
    initialStats: { hunger: 100, thirst: 100, fun: 100 },
  },
  {
    id: "big",
    name: "Big Marimo",
    eggImage: "/happytama.png",
    initialStats: { hunger: 100, thirst: 100, fun: 100 },
  },
];

const HomePage = () => {
  const [selectedMarimo, setSelectedMarimo] = useState<MarimoType | null>(null);
  const [stats, setStats] = useState({ hunger: 100, thirst: 100, fun: 100 });

  const handleSelectMarimo = (marimo: MarimoType) => {
    setSelectedMarimo(marimo);
    setStats(marimo.initialStats);
  };

  const handleDeleteMarimo = () => {
    setSelectedMarimo(null);
    setStats({ hunger: 100, thirst: 100, fun: 100 });
  };

  return (
    <div className={styles.tamagotchiContainer}>
      <h1>Bienvenue sur ta page d'accueil !</h1>

      {!selectedMarimo ? (
        <div className={styles.selectionButtons}>
          <h2>Choisis ton Marimo !</h2>
          {marimos.map((m) => (
            <button
              key={m.id}
              className={styles.marimoButton}
              onClick={() => handleSelectMarimo(m)}
            >
              {m.name}
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.eggFrame}>
          <img
            src={selectedMarimo.eggImage}
            alt="Cadre œuf"
            className={styles.eggImage}
          />
          <Marimo hunger={stats.hunger} thirst={stats.thirst} fun={stats.fun} />
          <button className={styles.deleteButton} onClick={handleDeleteMarimo}>
            Supprimer le Marimo
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
