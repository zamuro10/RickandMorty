import React from "react";
import Card from "../card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.cards}>
      {characters.map((character) => (
        <div className={styles.cardBackground}>
        <div className={styles.cardWrapper} key={character.id}>
          
          <Card
            onClose={() => onClose(character.id)}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            id={character.id}
          />
          </div>
        </div>
      ))}
    </div>
  );
}
