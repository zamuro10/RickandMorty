import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    onSearch(id);
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          placeholder='Digite el id del personaje'
          type="search"
          className={styles.input}
          value={id}
          onChange={handleChange}
        />
        <button onClick={handleSearch} className={styles.agregar}>
          <span>Agregar</span>
        </button>
      </div>
    </div>
  );
}
