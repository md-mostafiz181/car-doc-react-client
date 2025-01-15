import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Banner.css";
import Container from "../../../Components/Container/Container";

const Banner = () => {
  return (
    <div id="banner-part">
      <div className="banner-main">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="img1">
              <div className="overlay">
              <Container>
                <div className="banner-text px-3">
                  <h1 className="lg:text-7xl md:text-4xl sm:text-2xl font-bold ">Affordable <br /> Price For Car <br /> Servicing</h1>
                  <p className="lg:text-3xl md:text-2xl sm:text-1xl font-normal mt-5">
                    There are many variations of passages of available, but <br /> the
                    majority have suffered alteration in some form
                  </p>

                  <div className="banner-btn mt-5">
                  <button className="btn1  ">Discover More</button>
                  <button className="btn2 ms-2">Latest Project</button>
                  </div>
                </div>
              </Container>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img2">
              <div className="overlay">
              <Container>
                <div className="banner-text px-3">
                  <h1 className="lg:text-7xl md:text-4xl sm:text-2xl font-bold ">Affordable <br /> Price For Car <br /> Servicing</h1>
                  <p className="lg:text-3xl md:text-2xl sm:text-1xl font-normal mt-5">
                    There are many variations of passages of available, but <br /> the
                    majority have suffered alteration in some form
                  </p>

                  <div className="banner-btn mt-5">
                  <button className="btn1  ">Discover More</button>
                  <button className="btn2 ms-2">Latest Project</button>
                  </div>
                </div>
              </Container>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img3">
              <div className="overlay">
              <Container>
                <div className="banner-text px-3">
                  <h1 className="lg:text-7xl md:text-4xl sm:text-2xl font-bold ">Affordable <br /> Price For Car <br /> Servicing</h1>
                  <p className="lg:text-3xl md:text-2xl sm:text-1xl font-normal mt-5">
                    There are many variations of passages of available, but <br /> the
                    majority have suffered alteration in some form
                  </p>

                  <div className="banner-btn mt-5">
                  <button className="btn1  ">Discover More</button>
                  <button className="btn2 ms-2">Latest Project</button>
                  </div>
                </div>
              </Container>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img4">
              <div className="overlay">
              <Container>
                <div className="banner-text px-3">
                  <h1 className="lg:text-7xl md:text-4xl sm:text-2xl font-bold ">Affordable <br /> Price For Car <br /> Servicing</h1>
                  <p className="lg:text-3xl md:text-2xl sm:text-1xl font-normal mt-5">
                    There are many variations of passages of available, but <br /> the
                    majority have suffered alteration in some form
                  </p>

                  <div className="banner-btn mt-5">
                  <button className="btn1  ">Discover More</button>
                  <button className="btn2 ms-2">Latest Project</button>
                  </div>
                </div>
              </Container>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img5">
              <div className="overlay">
              <Container>
                <div className="banner-text px-3">
                  <h1 className="lg:text-7xl md:text-4xl sm:text-2xl font-bold ">Affordable <br /> Price For Car <br /> Servicing</h1>
                  <p className="lg:text-3xl md:text-2xl sm:text-1xl font-normal mt-5">
                    There are many variations of passages of available, but <br /> the
                    majority have suffered alteration in some form
                  </p>

                  <div className="banner-btn mt-5">
                  <button className="btn1  ">Discover More</button>
                  <button className="btn2 ms-2">Latest Project</button>
                  </div>
                </div>
              </Container>
              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img6">
              <div className="overlay">
              <Container>
                <div className="banner-text px-3">
                  <h1 className="lg:text-7xl md:text-4xl sm:text-2xl font-bold ">Affordable <br /> Price For Car <br /> Servicing</h1>
                  <p className="lg:text-3xl md:text-2xl sm:text-1xl font-normal mt-5">
                    There are many variations of passages of available, but <br /> the
                    majority have suffered alteration in some form
                  </p>

                  <div className="banner-btn mt-5">
                  <button className="btn1  ">Discover More</button>
                  <button className="btn2 ms-2">Latest Project</button>
                  </div>
                </div>
              </Container>
              </div>

            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
