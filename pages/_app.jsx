import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Preloader from "../src/layout/Preloader";
import "../styles/globals.css";
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Twinleaf Studios</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="beshleyua" />
        {/* Fonts */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100i%2C300%2C300i%2C400%2C400i%2C500%2C500i%2C700%2C700i%2C900%2C900i%7CPlayfair+Display%3A100%2C100i%2C300%2C300i%2C400%2C400i%2C500%2C500i%2C700%2C700i%2C900%2C900i%7CMr+De+Haviland&display=swap"
          type="text/css"
          media="all"
        />
        {/* CSS STYLES */}
        <link
          rel="stylesheet"
          href="assets/css/vendors/bootstrap.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/font-awesome/css/font-awesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/magnific-popup.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/splitting.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/swiper.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/animate.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/main.css"
          type="text/css"
          media="all"
        />
        <style>
          {`
            /* Override highlight colors */
            .navbar-default.navbar-light .active>a, 
            .navbar-default.navbar-light .active>a:focus, 
            .navbar-default.navbar-light .active>a:hover, 
            .navbar-default.navbar-light li>a:focus, 
            .navbar-default.navbar-light li>a:hover, 
            .navbar-default.navbar-light .open>a:focus, 
            .navbar-default.navbar-light .open>a:hover, 
            .sidenav>li>a.active, 
            .sidenav>li>a:hover, 
            .sidenav li.active>a, 
            .sidebar-boxed .sidenav>li>a.open, 
            .sidebar-boxed .sidenav>li>a:hover, 
            a, a:focus, a:hover, 
            .tabs-text .nav-tabs>li.active a, 
            .tabs-icon .nav-tabs>li.active a, 
            .tabs-btn .nav-tabs li.active a {
                color: #4EAD6D !important;
            }

            /* Keep button text white */
            a.btn, .btn, a.btn-link, .btn-link, button {
                color: #fff !important;
            }

            .btn-outline.btn-primary:hover,
            .btn-round.btn-primary:hover,
            .pagination>li>a:focus, 
            .pagination>li>a:hover, 
            .pagination>li>span:focus, 
            .pagination>li>span:hover, 
            .pager li>a:hover {
                color: #4EAD6D !important;
            }

            .navbar-default.navbar-light .open>a {
                color: #4EAD6D !important;
            }

            h1 a:before, h2 a:before, h3 a:before {
                color: #4EAD6D !important;
            }

            .error-page__num {
                color: #4EAD6D !important;
            }
          `}
        </style>
        {/*[if lt IE 9]>
	
	
	<![endif]*/}
        {/* Favicon */}
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {loader && <Preloader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
