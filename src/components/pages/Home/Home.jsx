import { Main } from "../../Main/Main";
import { useGetGamesQuery } from "../../reducers/gameReducer";
import "./Home.css";

export const Home = () => {
  const {isLoading, error} = useGetGamesQuery();

  if (error) {
    return (
      <div className='app'>
        <h1>Произошла ошибка запроса!</h1>
      </div>
    )
  }

  return (
    <div className='home'>
      {isLoading ? <h1>Подождите, данные загружаются!</h1> : <Main />}
    </div>
  );
};