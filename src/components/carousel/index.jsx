import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";

export default function Carousel() {
    const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      });
  }, []);

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container">
      <h6 className="text-muted">Friend Suggestions</h6>
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status"></div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current) => (
            <div className="out" key={current.id}>
              <div className="card">
                <div className="card-body">
                    <span className="date">
                        <span className="date-month">{current.id}</span>
                        <span className="date-day">{current.id}</span>
                    </span>
                    <span className="card-title">{current.username}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
  }