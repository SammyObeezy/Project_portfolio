import React from "react";
import profile from "../assets/profile-1.png";
import dev from "../assets/devbook-cover.png";
const About = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 pt-5 mb-5 align-self-center">
            <div className="promo pe-md-3 pe-lg-5">
              <h1 className="headline mb-3">
                Discover, Purchase, &amp;
                <br />
                Enjoy eBooks Easily
              </h1>
              <div className="subheadline mb-4">
                Discover Your Next Great Read!
              </div>
              <div className="cta-holder row gx-md-3 gy-3 gy-md-0">
                <div className="col-12 col-md-auto">
                  <a className="btn btn-primary w-100" href="../home.html">
                    Explore
                  </a>
                </div>
                <div className="col-12 col-md-auto">
                  <a
                    className="btn btn-secondary scrollto w-100"
                    href="#benefits-section"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="hero-quotes mt-5">
                <div
                  id="quotes-carousel"
                  className="quotes-carousel carousel slide carousel-fade mb-5"
                  data-bs-ride="carousel"
                  data-bs-interval="8000"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#quotes-carousel"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#quotes-carousel"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#quotes-carousel"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <blockquote className="quote p-4 theme-bg-light">
                        "BookWave has completely changed the way I read and
                        discover new books. The platform is user-friendly, and
                        the community features have connected me with fellow
                        readers who share my interests. Highly recommended!"
                      </blockquote>
                      <div className="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                        <div className="col-12 col-md-auto text-center text-md-start">
                          <img
                            className="source-profile"
                            src={profile}
                            alt="image"
                          />
                        </div>
                        <div className="col source-info text-center text-md-start">
                          <div className="source-name">Charlotte</div>
                          <div className="source-title">Reader</div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <blockquote className="quote p-4 theme-bg-light">
                        "I love the extensive library on BookWave. From
                        bestsellers to niche genres, I always find something new
                        to read. The download process is smooth and secure,
                        making it easy to access books."
                      </blockquote>
                      <div className="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                        <div className="col-12 col-md-auto text-center text-md-start">
                          <img
                            className="source-profile"
                            src="DevBook-BS5-v3.0/assets/images/profiles/profile-2.png"
                            alt="image"
                          />
                        </div>
                        <div className="col source-info text-center text-md-start">
                          <div className="source-name">Samantha</div>
                          <div className="source-title">Book Enthusiast</div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <blockquote className="quote p-4 theme-bg-light">
                        "The 'Connect' page on BookWave is a wonderful feature.
                        I've joined several book groups on Discord and Reddit
                        through the platform and have had great discussions
                        about my favorite books."
                      </blockquote>
                      <div className="source row gx-md-3 gy-3 gy-md-0 align-items-center">
                        <div className="col-12 col-md-auto text-center text-md-start">
                          <img
                            className="source-profile"
                            src="DevBook-BS5-v3.0/assets/images/profiles/profile-3.png"
                            alt="image"
                          />
                        </div>
                        <div className="col source-info text-center text-md-start">
                          <div className="source-name">Michael</div>
                          <div className="source-title">Community Member</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 mb-5 align-self-center">
            <div className="book-cover-holder">
              <img
                className="img-fluid book-cover"
                src={dev}
                alt="book cover"
                style={{ width: "70%", height: "auto" }}
              />
              <div
                className="book-badge d-inline-block shadow"
                style={{ backgroundColor: "#ff6b6b", fontSize: "larger" }}
              >
                Explore
                <br />
                Bookwave
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
