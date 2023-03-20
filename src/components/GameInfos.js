import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/GameInfos.css";

const GameInfos = (props) => {
  const { gameId } = useParams();
  const [data, setData] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${gameId}?key=179d5f2b8e7b4bb1995903efd90c0599`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [gameId]);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="game-resume-container">
      <div className="categories-container">
        <h3>Plateforms</h3>
        <div className="platforms-availables">
          <ul>
            {data.metacritic_platforms.map((elem) => {
              return <li>{elem.platform.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="categories-container">
        <h3>Genres</h3>
        <div className="game-type">
          <ul>
            {data.genres.map((elem) => {
              return <li>{elem.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="categories-container">
        <h3>Released date</h3>
        <p>{data.released}</p>
      </div>
      <div className="categories-container">
        <h3>Developer</h3>
        <div>
          <ul>
            {data.developers.map((elem) => {
              return <li>{elem.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="categories-container">
        <h3>Publisher</h3>
        <div className="game-publishers">
          <ul>
            {data.publishers.map((elem) => {
              return <li>{elem.name}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="categories-container">
        <h3>Age rating</h3>
        {data.esrb_rating.id}
      </div>
      <div className="categories-container">
        <h3>About</h3>
        <p>{data.description_raw}</p>
      </div>
    </div>
  );
};
export default GameInfos;
