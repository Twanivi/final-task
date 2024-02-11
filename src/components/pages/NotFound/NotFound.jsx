import "./NotFound.css";
import { Link } from "react-router-dom";


export const NotFound = () => {
  return (
    <div className="not-found">
      Страница не найдена. Вернить на  
      <Link to='/'> Главную страницу</Link>
    </div>
  );
};