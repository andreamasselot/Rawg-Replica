const RelatedGames = (props) => {
  return (
    <div className="related-card-container">
      {props.related.map((elem) => {
        return (
          <div className="related-game-card">
            <h2 className="related-game-title">{elem.name}</h2>
            <img
              src={elem.background_image}
              alt="videogame illustration"
              className="related-games-images"
            />
          </div>
        );
      })}
    </div>
  );
};
export default RelatedGames;
