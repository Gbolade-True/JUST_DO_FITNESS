import React, { Component } from 'react';
import Slider from 'react-slick';
import "./slick.css"; 
import "./slick-theme.css";
import "./JustEatFit.css"
import '../Extras/css/style.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

export default class JustEatFit extends Component {


	render() {
		const settings = {
			swipeToSlide: true,
			dots: true,
			// fade: true,
			speed: 4000,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
        	autoplaySpeed: 4000,
	        adaptiveHeight: true,
	     //    autoplay: true,
		    // speed: 3000,
		    // autoplaySpeed: 3000,
		    // cssEase: "linear",
		    nextArrow: <SampleNextArrow />,
      		prevArrow: <SamplePrevArrow />,
      		responsive: [
		        {
		          breakpoint: 1024,
		          settings: {
		            slidesToShow: 1,
		            slidesToScroll: 1,
		            infinite: true,
		            dots: true
		          }
		        },
		        {
		          breakpoint: 600,
		          settings: {
		            slidesToShow: 1,
		            slidesToScroll: 1,
		            initialSlide: 2
		          }
		        },
		        {
		          breakpoint: 480,
		          settings: {
		            slidesToShow: 1,
		            slidesToScroll: 1
		          }
		        }
		      ]	
		};
		return(
			<div className="eat_fit_area">
				<Slider {...settings}>
                    <div className="eat_fit_bg_1 single_eat_fit  d-flex align-items-center overlay">
                    	<div className="container">
		                    <div className="row align-items-center justify-content-center">
		                        <div className="col-xl-12">
		                            <div className="eat_fit_text text-center ">
		                                <span>Just Eat Fit June!</span>
		                                <p>Register for this month's meal planning</p>
		                                <a href="http://eepurl.com/gTDPjH" className="boxed-btn3">Register</a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
                    </div>
                    <div className="eat_fit_bg_2 single_eat_fit  d-flex align-items-center overlay">
                    	<div className="container">
		                    <div className="row align-items-center justify-content-center">
		                        <div className="col-xl-12">
		                            <div className="eat_fit_text text-center">
                                        <span>Regular workouts and good NUTRITION</span>
		                                <p>We've collaborated with the best chefs</p>
		                                <a href="http://eepurl.com/gTDPjH" className="boxed-btn3">Register</a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
                    </div>
                    <div className="eat_fit_bg_3 single_eat_fit  d-flex align-items-center overlay">
                    	<div className="container">
		                    <div className="row align-items-center justify-content-center">
		                        <div className="col-xl-12">
		                            <div className="eat_fit_text text-center">
                                        <span>We pick a diet plan for you</span>
		                                <p>What are you waiting for? Register now!</p>
		                                <a href="http://eepurl.com/gTDPjH" className="boxed-btn3">Register</a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
                    </div>
				</Slider>
			</div>
		);
	}
}