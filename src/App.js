import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var dataBase = {
    "🦋": "Butterfly",
    "🐬": "Dolphin",
    "🐿️": "Chipmunk",
    "🐪": "Camel",
    "🐆": "Leopard",
    "🐒": "Monkey",
    "🦉": "owl",
    "🦁": "Lion",
    "🐇": "Rabbit",
    "🐹": "Hamster",
    "🦏": "Rhinoceros"
  };

  var [meaning, setMeaning] = useState("");

  var array = Object.keys(dataBase);

  function onClickHandler(emoji) {
    meaning = dataBase[emoji];
    setMeaning(meaning);
  }

  function onChangeHandler(event) {
    var change = event.target.value;
    meaning = dataBase[change];
    if (meaning === undefined) {
      meaning = "We do not have this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="blog-dummy">ANIMAL EMOJI INTERPRETER</h1>
      <div className="section">
        <input onChange={onChangeHandler} placeholder="Enter here"></input>
        <div style={{ padding: "1rem" }}>INPUT/CLICKED EMOJI: {meaning}</div>
        <h3>Emojis we know</h3>
        {array.map((emoji) => {
          return (
            <span
              onClick={() => onClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                cursor: "pointer",
                padding: "1rem 0.5rem"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
      <footer className="blog-dummy">
        <h2 className="footer-header">CONNECT WITH ME HERE</h2>
        <ul className="list-start">
          <li className="list">
            <a className="links" href="https://github.com/vidhi-thakur/">
              github
            </a>
          </li>
          <li className="list">
            <a
              className="links"
              href="https://www.linkedin.com/in/vidhi-thakur-9353271a8"
            >
              linkedin
            </a>
          </li>
          <li className="list">
            <a className="links" href="mailto:thakurvidhi997@gmail.com">
              mail
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
