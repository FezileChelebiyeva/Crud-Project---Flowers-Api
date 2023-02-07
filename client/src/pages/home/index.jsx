import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./index.scss";
import { Helmet } from "react-helmet";
import CardFlowers from "../../components/card-flowers";
import image1 from "../../assets/images/portr1.jpg";
import image2 from "../../assets/images/portr2.jpg";
import image3 from "../../assets/images/portr3.jpg";
const HomePage = () => {
  return (
    <div id="home-page">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section id="slider">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide>
            <div className="first">
              <div className="text">
                <p>Floral</p>
                <h1>Excellent bouquets for you</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="second">
              <div className="text">
                <p>Floral</p>
                <h1>Excellent bouquets for you</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="third">
              <div className="text">
                <p>Fixed-Height Slider</p>
                <h1>Excellent bouquets for you</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="our-mission">
        <div className="container">
          <div className="our-mission">
            <div className="mission">
              <div className="text">
                <h1>Our Mission</h1>
                <p>
                  Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
                  dicunt an, ea civibus.
                </p>
                <button>Read more</button>
              </div>
            </div>
            <div className="img"></div>
          </div>
        </div>
      </section>
      <CardFlowers />
      <section id="contacts">
        <div className="container">
          <div className="contacts">
            <p>Contacts</p>
            <h1>Our Team</h1>
            <div className="our-team">
              <div className="cards">
                <div className="card">
                  <div className="img">
                    <img src={image1} alt="" />
                  </div>
                  <h2>Velva Kopf</h2>
                  <p>Biologist</p>
                </div>
                <div className="card">
                  <div className="img">
                    <img src={image2} alt="" />
                  </div>
                  <h2>Sarah Palmer</h2>
                  <p>Florist</p>
                </div>
                <div className="card">
                  <div className="img">
                    <img src={image3} alt="" />
                  </div>
                  <h2>Jessica Swift</h2>
                  <p>Photographer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
