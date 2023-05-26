import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

const Detail = () => {
  const [character, setCharacter] = useState({}); // Estado local para almacenar los datos del personaje
  const { id } = useParams(); // Obtener el id del personaje de los parámetros de la URL

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });

    // Limpiar el estado local cuando el componente se desmonte
    return () => {
      setCharacter({});
    };
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.name}>{character.name}</h2>
        {character.status && <p className={styles.status}>Status: {character.status}</p>}
        {character.species && <p className={styles.species}>Species: {character.species}</p>}
        {character.gender && <p className={styles.gender}>Gender: {character.gender}</p>}
        {character.origin && <p className={styles.origin}>Origin: {character.origin.name}</p>}
      </div>
      <div className={styles.content_img}>
        {character.image && (
          <img src={character.image} alt="Character" className={styles.characterImage} />
        )}
      </div>
    </div>
  );
};

export default Detail;

