import "../styles/GameInfos.css";

const GameInfos = (props) => {
  console.log(props.data.metacritic_platforms);
  return (
    <div className="game-resume-container">
      <div className="categories-container">
        <h3>Plateforms</h3>
        <div className="platforms-availables">
          <ul>
            {props.data.metacritic_platforms.map((elem) => {
              return <li>{elem.platform.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="categories-container">
        <h3>Genres</h3>
        <div className="game-type">
          <ul>
            {props.data.genres.map((elem) => {
              return <li>{elem.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="categories-container">
        <h3>Released date</h3>
        <p>{props.data.released}</p>
      </div>
      <div className="categories-container">
        <h3>Developer</h3>
        <div>
          <ul>
            {props.data.developers.map((elem) => {
              return <li>{elem.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="categories-container">
        <h3>Publisher</h3>
        <div className="game-publishers">
          <ul>
            {props.data.publishers.map((elem) => {
              return <li>{elem.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="categories-container">
        <h3>Age rating</h3>
        {props.data.esrb_rating.id}
      </div>
      <div className="categories-container">
        <h3>About</h3>
        <p>{props.data.description_raw}</p>
      </div>
    </div>
  );
};
export default GameInfos;
