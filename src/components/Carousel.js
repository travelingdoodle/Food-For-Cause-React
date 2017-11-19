import React from "react";
import "../styles/Carousel.css";

const Carousel = () => (
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="first-slide" src="#" alt="First slide" />
      <div className="container">
        <div className="carousel-caption text-left">
          <h1>Our Mission</h1>
          <p>Help supply local food pantries, to make Kansas City a better place.</p>
          <br />
          <p><a className="btn btn-lg btn-primary" href="#" role="button">About Us</a></p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img className="second-slide" src="#" alt="Second slide" />
      <div className="container">
        <div className="carousel-caption">
          <h1>TBD</h1>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img className="third-slide" src="#" alt="Third slide" />
      <div className="container">
        <div className="carousel-caption text-right">
          <h1>TBD</h1>
          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
        </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
);

export default Carousel;
