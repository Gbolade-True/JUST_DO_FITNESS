import React from 'react';
import '../Extras/css/style.css';
import '../Extras/css/bootstrap.min.css';
import '../Extras/css/font-awesome.min.css';
import team1 from '../Extras/img/team/1.png';
import team2 from '../Extras/img/team/4.png';
import team3 from '../Extras/img/team/3.png';

const About = () => {
	return (
		<div>
			<div className="bradcam_area" id="about">
		        <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay">
		            <div className="container">
		                <div className="row align-items-center justify-content-center">
		                    <div className="col-xl-9">
		                        <div className="bradcam_text text-center">
		                            <h3>About Us</h3>
		                            <p>
		                                Enterprise fitness consulting - Run Fitness for enterprise, Diagnosis, Dance Cardio, Weight Loss, Fitness Conditioning <br />
		                                Equipment Sales and Leasing <br />
		                                Trainer outsourcing: Secure clients, recommend and assign available trainers Our FOCUS is on soursing Clients and Providing the best trainees for them <br />
		                            </p>
		                                
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>	
		    <div className="team_area team_bg_1 overlay2">
	            <div className="container">
	                    <div className="row">
	                            <div className="col-xl-12">
	                                <div className="section_title text-center mb-73">
	                                    <h3>Our Trainers</h3>
	                                    <p>Meet the professionals!</p>
	                                </div>
	                            </div>
	                        </div>
	                <div className="row">
	                    <div className="col-lg-4 col-md-6">
	                        <div className="single_team">
	                            <div className="team_thumb">
	                                <img src={team1} alt="" />
	                                <div className="team_hover">
	                                    <div className="hover_inner text-center">
	                                        <ul>
	                                            <li><a href="home"> <i className="fa fa-facebook"></i> </a></li>
	                                            <li><a href="home"> <i className="fa fa-twitter"></i> </a></li>
	                                            <li><a href="home"> <i className="fa fa-instagram"></i> </a></li>
	                                        </ul>
	                                    </div>
	                                </div>
	                            </div>
	                            <div className="team_title text-center">
	                                <h3>Jane Doe</h3>
	                                <p>Female Trainer</p>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-lg-4 col-md-6">
	                        <div className="single_team">
	                            <div className="team_thumb">
	                                <img src={team2} alt="" />
	                                <div className="team_hover">
	                                    <div className="hover_inner text-center">
	                                        <ul>
	                                            <li><a href="home"> <i className="fa fa-facebook"></i> </a></li>
	                                            <li><a href="home"> <i className="fa fa-twitter"></i> </a></li>
	                                            <li><a href="home"> <i className="fa fa-instagram"></i> </a></li>
	                                        </ul>
	                                    </div>
	                                </div>
	                            </div>
	                            <div className="team_title text-center">
	                                <h3>Daniel Ogbechi</h3>
	                                <p>Male Trainer</p>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-lg-4 col-md-6">
	                        <div className="single_team">
	                            <div className="team_thumb">
	                                <img src={team3} alt="" />
	                                <div className="team_hover">
	                                    <div className="hover_inner text-center">
	                                        <ul>
	                                            <li><a href="home"> <i className="fa fa-facebook"></i> </a></li>
	                                            <li><a href="home"> <i className="fa fa-twitter"></i> </a></li>
	                                            <li><a href="home"> <i className="fa fa-instagram"></i> </a></li>
	                                        </ul>
	                                    </div>
	                                </div>
	                            </div>
	                            <div className="team_title text-center">
	                                <h3>John Doe</h3>
	                                <p>Male Trainer</p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
		</div>
	)
}

export default About;