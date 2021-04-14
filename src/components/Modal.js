import React from "react";
import ReactDOM from "react-dom";
import { FaPlay, FaPlus, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import "./Modal.css";

function Modal(props) {
  const genreIds = props.movie.genre_ids;
  const genresArray = props.genres;
  document.body.style.overflow = "hidden";

  if (!props.isOpen){
    document.body.style.overflow = "unset";
    return null
  } 
  
  return ReactDOM.createPortal(
    <header className="modal">
      <div className="modal_container">
        <div
          className="modal_top_content"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${props.movie?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <h1 className="modal_title">
            {props.movie?.title ||
              props.movie?.name ||
              props.movie?.original_name}
          </h1>

          <div className="modal_buttons">
            <button className="modal_button">
              <FaPlay />
              &nbsp;Play
            </button>
            <button className="modal_round_button">
              <FaPlus />
            </button>
            <button className="modal_round_button">
              <FaRegThumbsUp />
            </button>
            <button className="modal_round_button">
              <FaRegThumbsDown />
            </button>
            <button
              onClick={() => props.onRequestClose(false)}
              className="modal_round_button"
              style={{
                position: "absolute",
                top: "16px",
                right: "0",
              }}
            >
              X
            </button>
          </div>
          <div className="modal--fadeBottom" />
        </div>

        <div className="modal_bottom_content">
          <h2 className="modal_description">{props.movie.overview}</h2>
          <h2>
            Genres:{" "}
            {genresArray
              .filter((item) => genreIds.includes(item.id))
              .map((genre) => genre.name)
              .join(", ")}
          </h2>
          <h2>Release Date: {props.movie.first_air_date}</h2>
          <h2>Rating: {props.movie.vote_average * 10}%</h2>
        </div>
      </div>
    </header>,
    document.getElementById("portal")
  );
}

export default Modal;
