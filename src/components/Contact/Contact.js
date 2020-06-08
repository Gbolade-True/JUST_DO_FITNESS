import React from 'react';
import '../Extras/css/style.css';
import '../Extras/css/bootstrap.min.css';
import '../Extras/css/font-awesome.min.css';
import "./Contact.css";

const Contact = () => {
	return (
    <div>
        <div className="bradcam_area">
            <div className="single_bradcam d-flex align-items-center bradcam_bg_2 overlay">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-9">
                            <div className="bradcam_text text-center">
                                <h3>contact us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

		<section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Get in Touch</h2>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact_edit " >
                            <div>
                                <a href="https://instagram.com/justdofitnessng?igshid=xsvwkn67ng8m" className="fa fa-facebook"></a>
                            </div>
                            <div>
                                <a href="https://instagram.com/justdofitnessng?igshid=xsvwkn67ng8m" className="fa fa-twitter"></a>
                            </div>
                            <div>
                                <a href="https://instagram.com/justdofitnessng?igshid=xsvwkn67ng8m" className="fa fa-instagram"></a>
                            </div>
                            <div>
                                <a href="https://instagram.com/justdofitnessng?igshid=xsvwkn67ng8m" className="fa fa-youtube"></a>
                            </div>
                            <div>
                                <a href="https://instagram.com/justdofitnessng?igshid=xsvwkn67ng8m" className="fa fa-google"></a>
                            </div>
                        </div>
                        <p>The JustDo fitness family :)</p><br/>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                                <h3>Lagos, Nigeria</h3>
                                <p>UNILAG, Akoka</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                                <h3>+234 909 3300 367</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                                <h3>support@justdofitness.com</h3>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>	
    </div>
	)
}

export default Contact;