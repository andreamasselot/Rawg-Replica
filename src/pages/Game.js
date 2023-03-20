import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameInfos from "../components/GameInfos";
import Header from "../components/Header";

const Game = (props) => {
  const { gameId } = useParams();
  const [data, setData] = useState([]);
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
        </div>
        <div>
          <GameInfos data={data} />
        </div>
      </section>
    </>
  );
};
export default Game;
