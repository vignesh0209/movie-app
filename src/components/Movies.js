import React from "react";
import "./styles/Movies.css";
import { useState, useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            backgroundColor: " #303c6c",
            color: "#f3d250",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        </div>
      ) : (
        <div className="movies">
          <div className="inner-movies">
            {movieList.map((data, id) => {
              return (
                <div key={id} className="image-div">
                  <img
                    className="cards__img"
                    src={`https://image.tmdb.org/t/p/original${
                      data ? data.poster_path : ""
                    }`}
                    alt="movie"
                  />
                  <div className="title">
                    <span>{data.title}</span>
                    <h3 style={{ fontFamily: "arial" }}>
                      {data.vote_average} <BsFillStarFill size={15} />
                    </h3>
                    <h3>{data.release_date}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
