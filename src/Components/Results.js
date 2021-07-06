// import axios from "axios";
import React, { useState, useEffect } from "react";
import instance from "../axios";
import "./Results.css";
import VideoCard from "./VideoCard";
// to get animation
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(selectedOption);
      setMovies(request.data.results);
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
