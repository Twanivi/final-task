import './Card.css';
import { Images } from "./Images/Images";
import { Title } from "./Title/Title";

export const Card = ({game, imgPath}) => {

    return (
        <div className="card">
          <Images img={imgPath} alt={game.title} />
          <div className="card-title">
            <Title text={game.title} />
          </div>
        </div>
      );
}