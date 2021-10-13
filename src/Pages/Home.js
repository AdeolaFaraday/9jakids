import React, { useState } from "react";
import GameList from "../Component/GameList/GameList";
import Header from "../Component/Header/Header";
import SearchBar from "../Component/SearchBar/SearchBar";
import { GameData } from "../Component/GameList/GameData";
import Filter from "../Component/Filter/Filter";

const Home = () => {
  const removeDuplicateVal = (arr) => {
    return Array.from(new Set(arr));
  };
  const Level = removeDuplicateVal(GameData.map((game) => game.Level));
  const Group = removeDuplicateVal(GameData.map((game) => game.Group));

  const [gameData, setGameData] = useState(GameData);
  const [filterTerm, setFilterTerm] = useState([]);
  const [filteredGame, setFilteredGame] = useState([]);

  const searchGame = (term) => {
    const games = GameData.filter(
      (game) =>
        game.GameTitle == game.GameTitle.match(new RegExp(`^${term}.*`, "i"))
    );
    setGameData(games);
  };

  const filterGame = (val) => {
    let filterArr = [...filterTerm];
    if (filterArr.indexOf(val) === -1) {
      filterArr.push(val);
    } else {
      filterArr = filterArr.filter((value) => value !== val);
    }
    setFilterTerm(filterArr);
    const games = GameData.filter(
      (game) => filterArr.includes(game.Level) || filterArr.includes(game.Group)
    );
    setFilteredGame(games);
  };

  return (
    <>
      <Header />
      <SearchBar searchGame={searchGame} />
      <Filter Group={Group} Level={Level} filterGame={filterGame} />
      <GameList gameData={gameData} filteredGame={filteredGame} />
    </>
  );
};

export default Home;
