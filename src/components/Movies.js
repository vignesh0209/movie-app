import React from 'react';
import sample from './sample.json';
import './styles/Movies.css'
import avenger from "../Assets/avenger.jpg";
import { useState, useEffect } from 'react';


const Movies = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, )
  },[])

  return (
    <>
      {loading ? (
        <h1 style={{textAlign:"center"}}>Loading...</h1>
      ) : (
        <div className="movies">
          <div className="inner-movies">
            {sample
              .filter((filtered) => {
                return filtered.releaseYear >= 2016;
              })
              .map((data, id) => {
                return (
                  <div key={id} className="image-div">
                    <img src={avenger} alt="avenger" />
                    <div className="title">
                      <span>{data.title}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default Movies