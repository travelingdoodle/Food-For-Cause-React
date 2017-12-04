import React from "react";
import "./Carousel.css";
import Community from "../../assets/img/community.png";
import Skyline from "../../assets/img/kcSkyline.png";
import FoodBank from "../../assets/img/foodBank.png";


const Carousel = () => (
  <div className="container">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="first-slide" src={Skyline} alt="Kansas City Skyline" />
          <div className="container">
            <div className="carousel-caption text-left">
              <h1 className="carousel-heading">Welcome</h1>
              <p className="carousel-subheading">Food For Cause is proudly based out of Kansas City, Missouri.</p>
              <br />
              <p><a className="btn btn-lg btn-primary" href="#" role="button">About Us</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide" src={Community} alt="Community" />
          <div className="container">
            <div className="carousel-caption">
              <h1 className="carousel-heading">Our Mission</h1>
              <p className="carousel-subheading">Help supply local food pantries, to make Kansas City a better place.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="third-slide" src={FoodBank} alt="FoodBank" />
          <div className="container">
            <div className="carousel-caption text-right">
              <h1 className="carousel-heading">Help Our Community</h1>
              <p className="carousel-subheading">Roughly 72 billion pounds of food in the United States is thrown away every year.</p>
              <p><a className="btn btn-lg btn-primary" href="http://www.feedingamerica.org/our-work/our-approach/reduce-food-waste.html" target="_blank" role="button">Resource</a></p>
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
  </div>
);

export default Carousel;
