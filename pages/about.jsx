import { Swiper, SwiperSlide } from "swiper/react";
import AboutVideo from "../src/components/AboutVideo";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { jsTestimonials } from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* titles */}
                <div className="h-titles">
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    About us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Image Large */}
        <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="image">
            <div
              className="img js-parallax"
              style={{ backgroundImage: "url(assets/images/about2.jpg)" }}
            />
          </div>
        </div>
        <div
          className="section section-inner section-description scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>
                  We are Twinleaf Studios
                  <br />
                  Digital Innovation Agency
                </h1>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                Twinleaf Studios is an LA-based venture studio specializing in
                transforming ideas into digital realities. Our portfolio
                includes innovative fintech solutions like QQQTrading.com, a
                trading signals platform for the Nasdaq 100 ETF, and
                ScoreAuthority, a comprehensive credit monitoring service. We
                also develop cutting-edge blockchain technology through projects
                like ZeroFlow, a decentralized exchange built on wire.network.
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                With expertise in web development, UI/UX design, and digital
                media production, we bring a comprehensive approach to every
                project. Our team combines technical excellence with creative
                innovation to deliver solutions that are not just functional,
                but also engaging and future-proof. We believe in building
                long-term partnerships with our clients, helping them navigate
                and succeed in the digital landscape.
              </div>
            </div>
          </div>
        </div>
        {/* Section Services */}
        <div className="section section-inner m-services">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our services
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* services */}
                <div className="services-items row">
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-code" />
                      </div>
                      <div className="name">Web Development</div>
                      <div className="text">
                        Custom web solutions built with modern technologies,
                        focusing on performance, scalability, and user
                        experience.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-object-group" />
                      </div>
                      <div className="name">UI/UX Design</div>
                      <div className="text">
                        Creating intuitive and engaging digital experiences
                        through thoughtful interface design and user research.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-camera" />
                      </div>
                      <div className="name">Digital Media</div>
                      <div className="text">
                        Professional photo, video, and audio production services
                        to enhance your digital presence.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-bullseye" />
                      </div>
                      <div className="name">Lead Generation</div>
                      <div className="text">
                        Strategic lead generation services to help businesses
                        identify and connect with potential customers.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-mobile-alt" />
                      </div>
                      <div className="name">Mobile Solutions</div>
                      <div className="text">
                        Responsive and native mobile applications that provide
                        seamless experiences across all devices.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="far fa-life-ring" />
                      </div>
                      <div className="name">Support</div>
                      <div className="text">
                        Ongoing technical support and maintenance to ensure your
                        digital solutions remain effective and up-to-date.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Description */}
        <div className="section section-inner m-description">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our vision
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="description-list-items">
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">01.</span>
                        Digital Innovation Excellence
                      </div>
                    </div>
                  </div>
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">02.</span>
                        User-Centered Design Approach
                      </div>
                    </div>
                  </div>
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">03.</span>
                        Comprehensive Digital Solutions
                      </div>
                    </div>
                  </div>
                  <div
                    className="description-list-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="desc">
                      <div className="name">
                        <span className="number">04.</span>
                        Long-term Client Partnerships
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Video Large */}
        {/* <AboutVideo /> */}
        {/* Section Team */}
        <div className="section section-inner m-team">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Meet the team
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* team */}
                <div className="team-items row">
                  <div className="team-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div
                      className="team-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <img src="assets/images/team5.jpg" alt="" />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Founder</div>
                        <div className="name">Natasha Singh</div>
                      </div>
                    </div>
                  </div>
                  <div className="team-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div
                      className="team-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <img src="assets/images/team1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Co-founder</div>
                        <div className="name">Robert Long</div>
                      </div>
                    </div>
                  </div>
                  <div className="team-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
                    <div
                      className="team-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <div className="img">
                          <img src="assets/images/team2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="desc">
                        <div className="category">Designer</div>
                        <div className="name">Viktoria Freeman</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Testimonials */}
        <div className="section section-inner m-testimonials">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 align-left col-lg-12">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Our testimonials
                  </h2>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* Carousel */}
                <Swiper
                  {...jsTestimonials}
                  className="swiper-container js-testimonials"
                >
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev1.png" alt="John Smith" />
                      </div>
                      <div className="desc">
                        <div className="title">John Smith</div>
                        <div className="name">Designer</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev3.png" alt="Natasha Singh" />
                      </div>
                      <div className="desc">
                        <div className="title">Natasha Singh</div>
                        <div className="name">Photographer</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev2.png" alt="Gray Woodman" />
                      </div>
                      <div className="desc">
                        <div className="title">Gray Woodman</div>
                        <div className="name">Bloger</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Testimonials item */}
                  <SwiperSlide className="testimonials-item swiper-slide">
                    <div
                      className="scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="image">
                        <img src="assets/images/rev4.png" alt="Robert Long" />
                      </div>
                      <div className="desc">
                        <div className="title">Robert Long</div>
                        <div className="name">Photographer</div>
                        <div className="text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour, or randomised words
                          which don't look even slightly believable.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* Pagination  */}
                  <div className="swiper-pagination" />
                </Swiper>
                {/* /Carousel */}
              </div>
            </div>
          </div>
        </div>
        {/* Section Partners */}
        <div className="section section-inner m-partners">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* partners */}
                <div className="partners-box">
                  <div className="partners-items row">
                    <div
                      className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="partners-item">
                        <div className="image">
                          <a target="_blank" href="https://www.envato.com/">
                            <img
                              src="assets/images/brand_logo_03_1.png"
                              alt="#1"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="partners-item">
                        <div className="image">
                          <a target="_blank" href="https://www.envato.com/">
                            <img
                              src="assets/images/brand_logo_08_1.png"
                              alt="#2"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="partners-item">
                        <div className="image">
                          <a target="_blank" href="https://www.envato.com/">
                            <img
                              src="assets/images/brand_logo_06_1.png"
                              alt="#3"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="partners-item">
                        <div className="image">
                          <a target="_blank" href="https://www.envato.com/">
                            <img
                              src="assets/images/brand_logo_05_1.png"
                              alt="#4"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};
export default About;
