import React from 'react';
import '../Extras/css/style.css';
import '../Extras/css/bootstrap.min.css';
import '../Extras/css/font-awesome.min.css';
import icon1 from '../Extras/img/svg_icon/1.svg';
import icon2 from '../Extras/img/svg_icon/2.svg';
import icon3 from '../Extras/img/svg_icon/3.svg';
import icon4 from '../Extras/img/svg_icon/4.svg';

const Body = () => {
	return (
		<div>
			<div className="features_area">
		        <div className="container">
		            <div className="row">
		                <div className="col-xl-12">
		                    <div className="section_title text-center mb-73">
		                        <h3>Our Features</h3>
		                        <p>A preview of our unique services</p>
		                    </div>
		                </div>
		            </div>
		            <div className="row">
		                <div className="col-lg-3 col-md-6">
		                    <div className="single_feature text-center mb-73">
		                        <div className="icon">
		                            <img src={icon1} alt="" />
		                        </div>
		                        <h4>Enterprise fitness consulting</h4>
		                        <p>Fitness conditioning and diagnosis</p>
		                    </div>
		                </div>
		                <div className="col-lg-3 col-md-6">
		                    <div className="single_feature text-center">
		                        <div className="icon">
		                            <img src={icon2} alt="" />
		                        </div>
		                        <h4>Equipment Sales and Leasing</h4>
		                        <p>Sales of JDF certified equipment</p>
		                    </div>
		                </div>
		                <div className="col-lg-3 col-md-6">
		                    <div className="single_feature text-center">
		                        <div className="icon">
		                            <img src={icon3} alt="" />
		                        </div>
		                        <h4>Trainer Outsourcing</h4>
		                        <p>Providing the best trainers for our clients</p>
		                    </div>
		                </div>
		                <div className="col-lg-3 col-md-6">
		                    <div className="single_feature text-center">
		                        <div className="icon">
		                            <img src={icon4} alt="" />
		                        </div>
		                        <h4>Fitness blogging</h4>
		                        <p>Promotion of the Just Live Fit lifestyle TV</p>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>

			 <div className="priscing_area">
	            <div className="container">
	                    <div className="row">
	                            <div className="col-xl-12">
	                                <div className="section_title text-center mb-73 slider_text">
	                                    <h3>Our Pricing</h3>
	                                    <p>Check out our prices for our fitness plans</p>
	                                </div>
	                            </div>
	                        </div>
	                <div className="row">
	                    <div className="col-lg-4 col-md-6">
	                        <div className="single_prising text-center">
	                            <div className="prising_header">
	                                    <h3>Beginner</h3>
	                                    <span><p className="naira">N</p>15,000/m</span>
	                            </div>
	                            <div className="pricing_body">	
	                                <ul>
	                                    <li>24h unlimited access</li>
	                                </ul>
	                            </div>
	                            <div className="pricing_btn">
	                                    <a href="home" className="boxed-btn3">Register</a>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-lg-4 col-md-6">
	                        <div className="single_prising text-center">
	                            <div className="prising_header">
	                                    <h3>Expert</h3>
	                                    <span><p className="naira">N</p>45,000/m</span>
	                            </div>
	                            <div className="pricing_body">
	                                <ul>
	                                    <li>24h unlimited access</li>
	                                    <li>Trainer Advice</li>
	                                </ul>
	                            </div>
	                            <div className="pricing_btn">
	                                    <a href="home" className="boxed-btn3">Register</a>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-lg-4 col-md-6">
	                        <div className="single_prising text-center">
	                            <div className="prising_header">
	                                    <h3>Pro</h3>
	                                    <span><p className="naira">N</p>60,000/m</span>
	                            </div>
	                            <div className="pricing_body">
	                                <ul>
	                                    <li>24h unlimited access</li>
	                                    <li>Trainer Advice</li>
	                                    <li className="off-color">Personal trainer</li>
	                                </ul>
	                            </div>
	                            <div className="pricing_btn">
	                                    <a href="home" className="boxed-btn3">Register</a>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	)
}

export default Body;