const GameCard = (props) => {
  return (
    <div className="game-container">
      <img
        src={props.image}
        alt="game illlustration"
        className="home-game-img"
      />
      <h2>{props.name}</h2>
    </div>
  );
};
export default GameCard;
