import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router";

export default function Carousel() {
  const navigate = useNavigate();
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
    slidesToShow: 3.5,
    slidesToScroll: 3,

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
    <div className="carousel">
      <span className="carousel-title">Milestones
        <span className="carousel-description" onClick={() => {navigate("/milestones")}}>View all</span>
      </span>
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status"></div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current) => (
            <div className="out" key={current.id}>
              <div className="card">
                <div className="card-body" onClick={() => {navigate("milestones/${current.id}")}}>
                  <span className="date">
                    <span className="date-month">{current.id}</span>
                    <span className="date-day">{current.id}</span>
                  </span>
                  <span className="card-title">{current.name}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <button className="button-add" onClick={() => {navigate("/milestones/create")}}>+</button>
    </div>
  );
}