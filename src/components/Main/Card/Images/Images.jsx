import { Link } from "react-router-dom";
import "./Images.css";

export const Images = ({ alt, img }) => {
  return (
    <div className="images">
      <Link to={img}>
        <img
          className="images"
          src={`https://cdn2.softswiss.net/i/s2/${img}.png`}
          alt={alt}
        />
      </Link>
    </div>
  );
};
