import "../styles/Game.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameInfos from "../components/GameInfos";
import Header from "../components/Header";

const Game = (props) => {
  const { gameId } = useParams();
  const [data, setData] = useState([]);
  // const [relatedGames, setRelatedGames] = useState({ results: [] });
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
    <>
      <Header />
      <p>GAME PAGE</p>
      <section className="gamepage-top-section">
        <div>
          <h1>{data.name}</h1>
          <img
            src={data.background_image}
            alt="videogame illustration"
            className="gamepage-images"
          />
        </div>
        <div className="game-infos-container">
          <GameInfos data={data} />
        </div>
      </section>
      <section className="related-games">
        <h3>Games like {data.name}</h3>
        <div className="related-games-container"></div>
      </section>
      <section className="reviews-section">
        <div>
          <h2>Reviews</h2>
        </div>
        <div className="best-review">
          <h3>Most Relevant Review</h3>
          <div className="review-container">
            <h4>Title</h4>
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Game;
