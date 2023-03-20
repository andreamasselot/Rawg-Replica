import { Link } from "react-router-dom";

const RelatedGames = (props) => {
  return (
    <div className="related-card-container">
      {props.related.map((elem) => {
        return (
          <div className="related-game-card" key={elem.id}>
            <h2 className="related-game-title">{elem.name}</h2>
            <Link to={`/game/${elem.id}`}>
              <img
                src={elem.background_image}
                alt="videogame illustration"
                className="related-games-images"
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default RelatedGames;
