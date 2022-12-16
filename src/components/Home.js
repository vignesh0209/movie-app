import React, { useEffect, useState } from "react";
import "./styles/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import avenger from "../Assets/avenger.jpg";
import strangerthings from "../Assets/strangerthings.jpeg";
import { Link } from "react-router-dom";



const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

 

  

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="movie-images"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="heading">
        <div className="inner-heading">
          <h1>Popular Collection</h1>
        </div>
      </div>
      <div class="popular-title">
        <div class="ameniti-img">
          <Link
            to="movies"
            smooth
            duration={500}
            style={{ textDecoration: "none" }}
          >
            <img src={avenger} alt="movie-images" />
            <div class="image-overlay">
              <h2>MOVIES</h2>
            </div>
          </Link>
          <div className="link-heading">
            <Link
              to="movies"
              smooth
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <span>Popular Movies</span>
            </Link>
          </div>
        </div>
        <div class="ameniti-img">
          <Link
            to="series"
            smooth
            duration={500}
            style={{ textDecoration: "none" }}
          >
            <img src={strangerthings} alt="series-images" />
            <div class="image-overlay">
              <h2>SERIES</h2>
            </div>
          </Link>
          <div className="link-heading">
            <Link
              to="series"
              smooth
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <span>Popular Series</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
