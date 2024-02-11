import { Link, useParams } from "react-router-dom";
import "./GamePage.css";
import { useGetGamesQuery } from "../../reducers/gameReducer";

export const GamePage = () => {
  const params = useParams();
  const { data = [] } = useGetGamesQuery();

  const gameKey = Object.keys(data).find(
    (key) => key === `${params.provider}/${params.game}`
  );

  const game = data[gameKey];

  return (
    <div className="game-page">
      <Link to='/'>На главную</Link>
      <h1>{game.title}</h1>
    </div>
    )
};