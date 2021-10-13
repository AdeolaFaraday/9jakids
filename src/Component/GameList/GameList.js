import React from "react";
import "./GameList.css";
import { AnimateOnChange } from "react-animation";

const GameList = ({ gameData, filteredGame }) => {
  const gameToShow = filteredGame.length ? filteredGame : gameData;
  return (
    <section>
      <div className="gamelist-container">
        {gameToShow.map((game, i) => {
          return (
            <AnimateOnChange
              animationIn="bounceIn"
              animationOut="bounceOut"
              durationOut={500}
            >
              <div key={i} className="game-card">
                <img src={game.GameImage} alt="gameImage" />

                <div className="game-info">
                  <p>Title: {game.GameTitle}</p>
                  {/* <p>Desc: {game.GameDescription}</p> */}
                </div>
              </div>
            </AnimateOnChange>
          );
        })}
      </div>
    </section>
  );
};

export default GameList;
