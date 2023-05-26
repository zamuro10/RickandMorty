import React, { useState,useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";

function Card({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
  id,
  addFavorite,
  removeFavorite,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({
        onClose,
        name,
        status,
        species,
        gender,
        origin,
        image,
        id,
        addFavorite,
        removeFavorite,
      });
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div
      className={`${styles.card} ${styles.cardShadow} ${isClicked ? styles.clicked : ""}`}
      onClick={handleClick}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardBack}>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
          <Link to={`/detail/${id}`}>
            <h2 className={styles.name}>{name}</h2>
          </Link>
          <h2 className={styles.status}>{status}</h2>
          <h2 className={styles.species}>{species}</h2>
          <h2 className={styles.gender}>{gender.name}</h2>
          <h2 className={styles.origin}>{origin}</h2>
        </div>
        <div className={styles.cardFront}>
          {isFav ? (
            <button onClick={handleFavorite} className={styles.favoriteButton}>
              ❤️
            </button>
          ) : (
            <button onClick={handleFavorite} className={styles.favoriteButton}>
              🤍
            </button>
          )}
          <img src={image} alt="imagen" />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
