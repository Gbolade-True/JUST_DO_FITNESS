import React, { Component } from 'react';
import Slider from 'react-slick';
import "./slick.css"; 
import "./slick-theme.css";
import "./SlideView.css"
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

export default class SlideView extends Component {


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
			<div className="slider_area">
				<Slider {...settings}>
                    <div className="slider_bg_1 single_slider  d-flex align-items-center overlay">
                    	<div className="container">
		                    <div className="row align-items-center justify-content-center">
		                        <div className="col-xl-12">
		                            <div className="slider_text text-center ">
		                                <span>Increase Your</span>
		                                <h3>Fitness</h3>
		                                <p>Your ultimate professional guide to fitness</p>
		                                <a href="http://eepurl.com/gTDPjH" className="boxed-btn3">Join Us</a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
                    </div>
                    <div className="slider_bg_2 single_slider  d-flex align-items-center overlay">
                    	<div className="container">
		                    <div className="row align-items-center justify-content-center">
		                        <div className="col-xl-12">
		                            <div className="slider_text text-center">
		                                <span>Build Up Your</span>
		                                <h3>Strength</h3>
		                                <p>Build Your Body and Fitness with a Professional Touch</p>
		                                <a href="http://eepurl.com/gTDPjH" className="boxed-btn3">Join Us</a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
                    </div>
                    <div className="slider_bg_3 single_slider  d-flex align-items-center overlay">
                    	<div className="container">
		                    <div className="row align-items-center justify-content-center">
		                        <div className="col-xl-12">
		                            <div className="slider_text text-center">
		                                <span>Fitness</span>
		                                <h3>No Weakness</h3>
		                                <a href="http://eepurl.com/gTDPjH" className="boxed-btn3">Join Us</a>
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