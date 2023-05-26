import { useSelector } from "react-redux";
import Card from "../card/Card";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  return (
    <div className={styles.container}>
      {favorites.map(({ id, name, species, gender, image, status }) => {
        return (
          <Card
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
