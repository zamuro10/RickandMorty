// App.js
import React, { useState, useEffect } from "react";
import "./"
import { useHistory } from "react-router-dom";
import { Route, useLocation } from "react-router-dom";
import axios from "axios";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Favorites from "./components/favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const [access, setAccess] = useState(false);
  const EMAIL = "difericali@hotmail.com";
  const PASSWORD = "diego1";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      history.push("/home");
    }
  }
  function logout() {
    setAccess(false);
    history.push('/');
  }

  useEffect(() => {
    !access && history.push("/");
  }, [access, history]);

  function randomCharacter() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then(({ data }) => {
        const randomCharacter =
          data.results[Math.floor(Math.random() * data.results.length)];
        if (randomCharacter) {
          const isCharacterExist = characters.find(
            (character) => character.id === randomCharacter.id
          );
          if (!isCharacterExist) {
            setCharacters((oldChars) => [...oldChars, randomCharacter]);
          } else {
            window.alert("¡Este personaje ya está en la pantalla!");
          }
        } else {
          window.alert("¡No se pudo obtener un personaje aleatorio!");
        }
      })
      .catch((error) => {
        console.log("Error fetching random character:", error);
      });
  }

  function onSearch(id) {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.id) {
          const isCharacterExist = characters.find(
            (character) => character.id === data.id
          );
          if (!isCharacterExist) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡Este personaje ya está en la pantalla!");
          }
        } else {
          window.alert("¡No se encontró un personaje con este ID!");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert("¡No se encontró un personaje con este ID!");
        } else {
          console.log("Error fetching character:", error);
          window.alert("¡Ocurrió un error al buscar el personaje!");
        }
      });
  }

  function onClose(id) {
    const filteredCharacters = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filteredCharacters);
  }

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} onRandom={randomCharacter} logout={logout}/>
      )}

      <Route path="/" exact render={() => <Form login={login} />} />

      <Route path="/home" component={Cards}>
        <Cards characters={characters} onClose={onClose} />
      </Route>
      <Route path="/about" component={About} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/detail/:id" component={Detail} />
    </div>
  );
}

export default App;
