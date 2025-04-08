import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
]);

export const home1SliderProps = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000000000,
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, "-20%", -1],
    },
    next: {
      translate: [0, "100%", 0],
    },
  },
  speed: 1000,
  mousewheel: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".hero-main-slider .swiper-pagination",
  },
  navigation: {
    nextEl: ".hero-main-slider .swiper-button-next",
    prevEl: ".hero-main-slider .swiper-button-prev",
  },

  onSlideChange: (swiper) => {
    const swiperSliders = document.querySelectorAll(
      ".hero-main-slider .swiper-slide"
    );
    for (let i = 0; i < swiperSliders.length; i++) {
      const slide = swiperSliders[i];
      if (slide.getAttribute("data-swiper-slide-index") == swiper.realIndex) {
        const dataColor = slide.getAttribute("data-color");
        document.querySelector("body").className =
          dataColor == "dark"
            ? "home page nav-white nav-white-logo dark-first"
            : "home page nav-white nav-white-logo";
      }
    }
  },
};

// # Start of Selection
// Add event listener for arrow keys to change slides
if (typeof window !== "undefined") {
  document.addEventListener("keydown", (event) => {
    const swiperInstance = document.querySelector(".hero-main-slider").swiper;
    if (event.key === "ArrowUp") {
      swiperInstance.slidePrev(400);
    } else if (event.key === "ArrowDown") {
      swiperInstance.slideNext(400);
    }
  });
}

export const HomeGridSliderProps = {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 50,
  centeredSlides: true,
  speed: 1000,
  loop: true,
  mousewheel: true,
  preventInteractionOnTransition: true,
  navigation: false,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
};

export const HomeGridFullySliderProps = {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  speed: 1000,
  loop: true,
  mousewheel: true,
  preventInteractionOnTransition: true,
  navigation: false,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
};

export const jsTestimonials = {
  direction: "vertical",
  slidesPerView: 2,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
};

export const mGalleryCarousel = {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 100,
  speed: 700,
  loop: false,
  pagination: false,
  breakpoints: {
    0: {
      spaceBetween: 30,
    },
    768: {
      spaceBetween: 50,
    },
    1200: {
      spaceBetween: 100,
    },
  },
};
