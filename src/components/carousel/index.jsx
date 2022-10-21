import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import moment from "moment";

export default function Carousel() {
  const navigate = useNavigate();
  const [milestones, setMilestones] = useState([]);
  const WAIT_TIME = 5000;

  const getMilestones = async () => {
    try {
      const { data } = await axios.get(
        "https://performance-task-ino.herokuapp.com/milestones/"
      );
      setMilestones(data);
      WAIT_TIME();
    } catch (error) {}
  };

  useEffect(() => {
    getMilestones();
  }, [milestones]);

  const getDay = (date) => {
    const d = new Date(date);
    return moment(d).format("D");
  };

  const getMonth = (date) => {
    const d = new Date(date);
    return moment(d).format("MMM");
  };

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
      <span className="carousel-title">
        Milestones
        <span
          className="carousel-description"
          onClick={() => {
            navigate("/milestones");
          }}
        >
          View all
        </span>
      </span>
      {milestones.length === 0 ? (
        <div className="spinner-border" role="status"></div>
      ) : (
        <Slider {...settings}>
          {milestones.map((current) => (
            <div className="out" key={current.id}>
              <div className="card">
                <div
                  className="card-body"
                  onClick={() => {
                    navigate("/milestones/"+current.id);
                  }}
                >
                  <span className="date">
                    <span className="date-month">
                      {getMonth(current.due_date)}
                    </span>
                    <span className="date-day">{getDay(current.due_date)}</span>
                  </span>
                  <span className="card-title">{current.title}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
      <button
        className="button-add"
        onClick={() => {
          navigate("/milestones/create");
        }}
      >
        +
      </button>
    </div>
  );
}
