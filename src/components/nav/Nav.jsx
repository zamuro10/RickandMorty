import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css';
import { Link } from "react-router-dom";

const Nav = ({ onSearch, onRandom,logout }) => {
  return (
    <div>
      <nav className={styles.nav}>
        <Link to={"/about"}>
        <button className={styles.randomButton}>About</button>
        </Link>
        <Link to={"/home"}>
        <button className={styles.randomButton}>Home</button>
        </Link>
        <Link to={"/favorites"}>
        <button className={styles.randomButton}>Favorites</button>
        </Link>
        <SearchBar onSearch={onSearch} />
        <button onClick={onRandom} className={styles.randomButton}><span>Agregar Personaje Random</span></button>
        <button onClick={logout} className={styles.logoutButton}>Log out</button>
 
      </nav>
    </div>
  );
};

export default Nav;
