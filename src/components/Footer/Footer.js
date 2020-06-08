import React from 'react';
import '../Extras/css/style.css';
import '../Extras/css/bootstrap.min.css';
import footer_logo from '../Extras/img/footer_logo.png';
import { NavLink } from "react-router-dom";

function Footer() {
	function topFunction() {
	  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	return (
		<footer className="footer">
	        <div className="footer_top">
	            <div className="container">
	                <div className="row">
	                    <div className="col-xl-3 col-md-6 col-lg-3">
	                        <div className="footer_widget">
	                            <div className="footer_logo">
	                                <NavLink onClick={topFunction} exact to='/'>
	                                    <img src={footer_logo} alt="" />
	                                </NavLink>
	                            </div>
	                            <p>University of Lagos<br/>Akoko-Yaba, Lagos</p>
	                            <p>+234 909 3300 367</p>
	                            <p>support@justdofitness.com</p>

	                            <div className="socail_links">
	                                <ul>
	                                    <li>
	                                        <a href="contact">
	                                            <i className="fa fa-facebook"></i>
	                                        </a>
	                                    </li>
	                                    <li>
	                                        <a href="contact">
	                                            <i className="fa fa-twitter"></i>
	                                        </a>
	                                    </li>
	                                    <li>
	                                        <a href="https://instagram.com/justdofitnessng?igshid=xsvwkn67ng8m">
	                                            <i className="fa fa-instagram"></i>
	                                        </a>
	                                    </li>
	                                    <li>
	                                        <a href="contact">
	                                            <i className="fa fa-pinterest"></i>
	                                        </a>
	                                    </li>
	                                    <li>
	                                        <a href="cotact">
	                                            <i className="fa fa-youtube-play"></i>
	                                        </a>
	                                    </li>
	                                </ul>
	                            </div>
	                        </div>
	                    </div>
	                    <div className="col-xl-4 col-md-6 col-lg-4 offset-xl-1">
	                        <div className="footer_widget">
	                            <h3 className="footer_title">
	                                Useful Links
	                            </h3>
	                            <ul className="links">
	                            	<li><NavLink onClick={topFunction} exact to="/">Home</NavLink></li>
	                            	<li><NavLink onClick={topFunction} exact to="/about">About</NavLink></li>
	                            	<li><NavLink onClick={topFunction} exact to="/contact">Contact</NavLink></li>
	                            	<li><NavLink onClick={topFunction} exact to="/gallery">Gallery</NavLink></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="col-xl-4 col-md-6 col-lg-4">
	                        <div className="footer_widget ml-auto">
	                            <h3 className="footer_title">
	                                Subscribe
	                            </h3>
	                            <form action="#" className="newsletter_form">
	                                <input type="text" placeholder="Enter your mail" />
	                                <button type="submit">Subscribe</button>
	                            </form>
	                            <p className="newsletter_text">Join us today</p>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div className="copy-right_text">
	            <div className="container">
	                <div className="footer_border"></div>
	                <div className="row">
	                    <div className="col-xl-12">
	                        <p className="copy_right text-center">
	                     
	Copyright &copy;{(new Date().getFullYear())} | All rights reserved | This project was made referencing <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
	                        </p>
	                    </div>
	                </div>
	            </div>
	        </div>
    	</footer>
	)
}

export default Footer;