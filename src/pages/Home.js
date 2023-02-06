import "../styles/Home.css";
import logo from "../assets/img/logo.png";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <section className="searchBar">
          <div className="title-searchBar logo-title">
            <img src={logo} alt="gamepad logo" />
            <h1>Gamepad</h1>
          </div>
          <input type="search" />
        </section>
      </div>
    </>
  );
};
export default Home;
