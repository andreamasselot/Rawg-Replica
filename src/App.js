import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=179d5f2b8e7b4bb1995903efd90c0599&page_size=36`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/game/:gameId" element={<Game data={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
