const GameInfos = (props) => {
  console.log(props.data.metacritic_platforms);
  return (
    <div>
      <h3>Plateforms</h3>
      <div className="platforms-availables">
        <ul>
          {props.data.metacritic_platforms.map((elem) => {
            return <li>{elem.platform.name}</li>;
          })}
        </ul>
      </div>
      <h3>Genre</h3>
      <h3>Released date</h3>
      <h3>Developer</h3>
      <h3>Publisher</h3>
      <h3>Age rating</h3>
      <h3>About</h3>
      <p>{props.data.description}</p>
    </div>
  );
};
export default GameInfos;
