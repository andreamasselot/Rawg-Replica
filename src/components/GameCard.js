import { Link } from "react-router-dom";

const GameCard = (props) => {
  return (
    <div className="game-container">
      <Link to={`/game/${props.gameId}`}>
        <img
          src={props.image}
          alt="game illustration"
          className="home-game-img"
        />
        <h2>{props.name}</h2>
      </Link>
    </div>
  );
};
export default GameCard;
