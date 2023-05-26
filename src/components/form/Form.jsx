import { useState } from "react";
import validated from "./Valited.js";
import styles from "./Form.module.css"; // Importa los estilos del archivo Form.module.css

function Form({login}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validated({ ...userData, [property]: value }, setErrors, errors);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.contenedor}>
    <div className={styles.card}>
      <h1 className={styles.titulo_form}> RICK AND MORTY</h1>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input type="text" name="email" value={userData.email} onChange={handleChange} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label} >Password: </label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default Form;
