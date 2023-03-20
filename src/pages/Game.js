import "../styles/Game.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameInfos from "../components/GameInfos";
import Header from "../components/Header";
import RelatedGames from "../components/RelatedGames";

const Game = (props) => {
  const { gameId } = useParams();
  const [data, setData] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games/${gameId}/game-series?key=179d5f2b8e7b4bb1995903efd90c0599`
        );
        setData(response.data);
        console.log(response.data);
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

      <section className="gamepage-top-section">
        <div className="game-infos-container">
          <GameInfos gameId={gameId} />
        </div>
      </section>
      <section className="related-games">
        <h3>Related Games</h3>
        <div className="related-games-container">
          <RelatedGames related={data.results} />
        </div>
      </section>
      <section className="reviews-section">
        <div>
          <h2>Reviews</h2>
        </div>
        <div className="best-review">
          <h3>Most Relevant Review</h3>
          <div className="review-container">
            <h4>Title</h4>
            <p>
              review Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquid voluptatibus neque totam possimus amet natus cum obcaecati
              commodi est eaque.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Game;
