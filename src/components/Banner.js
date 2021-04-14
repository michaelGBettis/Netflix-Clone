import React, { useEffect, useState } from "react";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import "./Banner.css";
import Modal from "./Modal.js";
import axios from "../axios";
import requests from "../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [genreNames, setGenreName] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTvGenres);
      setGenreName(request.data.genres);
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">
            <FaPlay />
            &nbsp;Play
          </button>
          <button onClick={() => setIsOpen(true)} className="banner_button">
            <FaInfoCircle />
            &nbsp;More Info
          </button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
      <Modal
        movie={movie}
        genres={genreNames}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />
    </header>
  );
};

export default Banner;
