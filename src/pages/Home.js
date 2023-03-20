import "../styles/Home.css";
import logo from "../assets/img/logo.png";
import Header from "../components/Header";
import GameCard from "../components/GameCard";

const Home = (props) => {
  return (
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
            {props.data.results.map((elem) => {
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
