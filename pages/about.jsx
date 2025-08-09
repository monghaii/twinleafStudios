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
                    About
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Image Large */}
        {/* <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="image">
            <div
              className="img js-parallax"
              style={{ backgroundImage: "url(assets/images/about2.jpg)" }}
            />
          </div>
        </div> */}
        <div
          className="section section-inner section-description scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h1>We grow businesses.</h1>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                Twinleaf Studios is an LA-based venture studio and marketing
                company specializing in transforming ideas into digital
                realities. Our portfolio includes innovative fintech solutions
                like QQQTrading.com, a trading signals platform for the Nasdaq
                100 ETF; ScoreAuthority, a comprehensive credit monitoring
                service; and our in-house social media automation platform.
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                With expertise in web development, and digital media production,
                and digital marketing, we bring a comprehensive approach to
                every project. Our team combines technical excellence with
                creative innovation to deliver solutions that are not just
                functional, but also engaging and future-proof. We believe in
                building long-term partnerships with our clients, helping them
                navigate and succeed in the digital landscape.
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
                  <style jsx>{`
                    .services-item .icon i {
                      color: #4ead6d !important;
                    }
                  `}</style>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-chart-line" />
                      </div>
                      <div className="name">
                        Digital Marketing (Paid & Organic)
                      </div>
                      <div className="text">
                        End-to-end digital marketing solutions to maximize reach
                        and engagement through targeted campaigns and
                        performance optimization.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-share-alt" />
                      </div>
                      <div className="name">Social Media Management</div>
                      <div className="text">
                        Comprehensive social media strategy and management to
                        build brand presence and drive engagement across
                        platforms.
                      </div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-code" />
                      </div>
                      <div className="name">Software Development</div>
                      <div className="text">
                        Custom web and mobile applications built with modern
                        technologies, focusing on performance and user
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
                        <i aria-hidden="true" className="fas fa-robot" />
                      </div>
                      <div className="name">Automation </div>
                      <div className="text">
                        Custom automation solutions to streamline business
                        processes. Our clients use our automations to rapidly
                        deploy ads, administer automated customer support, and
                        many other use cases.
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
                        Performance-Driven Marketing
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
                        Audience-Centered Creative Strategy
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
                        Full-Funnel Growth Campaigns
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
                        Measurable ROI and Long-Term Partnerships
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
        {/* Section Testimonials */}
        {/* Section Partners */}
        {/* check commit history init commit for boilerplate */}
      </div>
      {/* Footer */}
      {/* <Footer /> */}
    </Layout>
  );
};
export default About;
