import "../styles/Home.css";
import logo from "../assets/img/logo.png";
import Header from "../components/Header";
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
                <>
                  <div className="game-container">
                    <img
                      src={elem.background_image}
                      alt="game illlustration"
                      className="home-game-img"
                    />
                    <h2>{elem.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
