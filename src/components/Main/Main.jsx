import './Main.css';
import { useGetGamesQuery } from "../reducers/gameReducer";
import { useState } from "react";
import { Card } from "./Card/Card";
import { Select } from "./Select/Select";


export const Main = () => {
    const {data = []} = useGetGamesQuery();

    const [count, setCount] = useState(12);
    const [providerFilter, setProviderFilter] = useState("Provider");
    const [currencyFilter, setCurrencyFilter] = useState("Currency");

    if (!data || data.lenght === 0) return <p>Нет данных.</p>;

    const sortGames = Object.values(data);
    sortGames.sort((a, b) => a.collections.popularity - b.collections.popularity);

    
    const providerOptions = ["Provider"];
    for (let i = 0; i < sortGames.length; i++) {
      if ("provider" in sortGames[i]) {
        if (!providerOptions.includes(sortGames[i].provider)) {
          providerOptions.push(sortGames[i].provider);
        }
      }
    }
  
    const currencyOptions = ["Currency"];
    for (let i = 0; i < sortGames.length; i++) {
      if ("real" in sortGames[i]) {
        const currency = Object.keys(sortGames[i].real);
        currency.map(
          (item) => !currencyOptions.includes(item) && currencyOptions.push(item)
        );
      }
    }
  
    const filterGames = (game) => {
      if (providerFilter === "Provider" && currencyFilter === "Currency") {
        return true;
      }
  
      if (
        providerFilter === "Provider" &&
        Object.keys(game.real).includes(currencyFilter)
      ) {
        return true;
      }
  
      if (game.provider === providerFilter && currencyFilter === "Currency") {
        return true;
      }
  
      if (
        game.provider === providerFilter &&
        Object.keys(game.real).includes(currencyFilter)
      ) {
        return true;
      }
  
      return false;
    };
  
    const getGamesList = (games) => {
      const gameList = [];
      let i = 0;
      games.map(
        (game) =>
          i !== count &&
          filterGames(game) &&
          gameList.push(
            <Card
              key={sortGames.indexOf(game)}
              game={game}
              imgPath={Object.keys(data).find((key) => data[key] === game)}
            />
          ) &&
          i++
      );
      return gameList;
    };


  const btnHandleClick = () => {
    setCount(count + 12);
  };
    return (
        <div className="main">
            <div className='filters'>
                <Select options={providerOptions} updateState={setProviderFilter} />
                <Select options={currencyOptions} updateState={setCurrencyFilter} />
            </div>
            <div className='wrapper'>
                {getGamesList(sortGames)}
            </div>
            <button onClick={btnHandleClick} className='button'>Показать ещё</button>
        </div>
    )
}