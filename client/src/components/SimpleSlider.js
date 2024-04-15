
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import food_image_1 from '../images/food_image_1.jpg';
import food_image_2 from '../images/food_image_2.jpg';
import food_image_3 from '../images/food_image_3.jpg';
import food_image_4 from '../images/food_image_4.jpg';
import food_image_5 from '../images/food_image_5.jpg';

function SimpleSlider() {

  const images = [
    food_image_1,
    food_image_2,
    food_image_3,
    food_image_4,
    food_image_5
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            {
              images.map( (img) => {
                return(
                  <div className="">
                    <img src={img} width={800} height={400}/>
                  </div>
                )
              })
            }
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;




















