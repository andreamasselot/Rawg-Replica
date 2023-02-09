import "../styles/Home.css";
import logo from "../assets/img/logo.png";
import Header from "../components/Header";
import GameCard from "../components/GameCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=179d5f2b8e7b4bb1995903efd90c0599`
        );
        console.log(response);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Header />
      <div className="container">
        <section className="searchBar">
          <div className="title-searchBar logo-title">
            <img src={logo} alt="gamepad logo" />
            <h1>Gamepad</h1>
          </div>
          <input type="search" placeholder="Search for a game..." />
          <p>Search 0000000 games</p>
        </section>
        <section>
          <h2>Most Relevance Games</h2>
          <div className="game-section-homepage">
            {data.results.map((elem) => {
              return (
                <GameCard
                  key={elem.id}
                  gameId={elem.id}
                  image={elem.background_image}
                  name={elem.name}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
