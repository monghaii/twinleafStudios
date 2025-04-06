import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layout/Layout";
import { home1SliderProps } from "../src/sliderProps";
// import Splitting from "splitting";

const Index = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Hero Main Slider */}
        <Swiper {...home1SliderProps} className="section hero-main-slider">
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1596526131090-bcbe09e432d3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">martech</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Affiliate Marketing
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      We help businesses maximize their reach and engagement
                      through targeted ad campaigns, ensuring optimal
                      performance and return on investment. Partner with us to
                      elevate your social media marketing strategy and achieve
                      your business goals.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="mailto:matt@twinleaf.studio">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        contact us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title use titles dark for dark text */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">fintech</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        QQQTrading.com
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Trading signals for the QQQ Nasdaq 100 ETF returning over
                      22% CAGR since 2005.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="https://qqqtrading.com">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(/assets/images/yambo.png)",
                // backgroundPosition: "calc(85%) center",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">
                      gamification
                    </div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        Yambo
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      Experience an imaginative new way to play games with
                      Yambo's micro-game tournaments and gamification layer for
                      Web3. Earn exclusive rewards, engage with a vibrant
                      community, and unlock growth opportunities.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="https://yambo.com">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(https://images.pexels.com/photos/6969937/pexels-photo-6969937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">fintech</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        ScoreAuthority
                      </span>
                    </div>
                    <div className="subtitle scrolla-element-anim-1">
                      All three of your credit scores and reports in one place,
                      along with 24/7 credit monitoring. Stay informed and
                      protected with unlimited access to your credit
                      information.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="https://scoreauthority.net">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        see details
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              }}
            />
            {/* slide titles */}
            <div className="slide-titles">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {/* title */}
                  <div className="titles">
                    <div className="label scrolla-element-anim-1">fintech</div>
                    <div className="title">
                      <span
                        className="title-inner splitting-text-anim-2"
                        data-splitting=""
                      >
                        ZeroFlow
                      </span>
                    </div>
                    <div
                      className="subtitle scrolla-element-anim-1"
                      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
                    >
                      Next-generation decentralized exchange focused on
                      providing no-fee trading experiences for crypto
                      enthusiasts. Built on the robust wire.network, we are an
                      ecosystem designed to revolutionize the way you trade.
                    </div>
                  </div>
                  <div className="more-bts">
                    <Link legacyBehavior href="/">
                      <a
                        data-splitting=""
                        className="btn more-btn scrolla-element-anim-1"
                      >
                        Coming Soon
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* pagination */}
          <div
            className="swiper-pagination scrolla-element-anim-1 scroll-animate swiper-pagination-bullets swiper-pagination-horizontal animate__active animate__animated"
            data-animate="active"
          />
          {/* navigation */}
          <div className="swiper-buttons">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
    </Layout>
  );
};
export default Index;
