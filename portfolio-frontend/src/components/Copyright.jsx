import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-white text-muted">

            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                <div>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 link-secondary">
                        <i className="fab fa-github"></i>
                    </a>
                </div>

            </section>

            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3 text-secondary"></i>ElevateYourProfile
                            </h6>
                            <p>
                            Welcome to ElevateYourProfile, your ultimate destination for developing a website that not only showcases your skills and accomplishments but also helps you create a resume that stands out in the digital age
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Resume</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Portfolio</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Resume Score</a>
                            </p>
    
                        </div>

                        
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3 text-secondary"></i> Hyderabad, HY 10012, India</p>
                            <p>
                                <i className="fas fa-envelope me-3 text-secondary"></i>
                                elevateyouprofile@example.com
                            </p>
                            <p><i className="fas fa-phone me-3 text-secondary"></i> 8106629402</p>
                            <p><i className="fas fa-print me-3 text-secondary"></i> 6281961474</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
                © 2023 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">elavateyourprofile.com</a>
            </div>
        </footer>
    )
}

export default Footer;
