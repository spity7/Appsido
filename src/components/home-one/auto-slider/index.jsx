import Code from "../../../assets/images/v1/code.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const sliderData = [
  {
    id: crypto.randomUUID(),
    title: "Innovative Web Solutions for Your Business",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Transform Your Ideas into Powerful Mobile Apps",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Secure Your Business with Advanced Cybersecurity",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Harness the Power of Cloud Technology",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "AI & Machine Learning for Smarter Decisions",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Custom Software Tailored to Your Needs",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Seamless IT Consulting for Growth",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Build Scalable Solutions for the Future",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Enhance User Experience with Stunning UI/UX Design",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Data-Driven Insights for Business Success",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Automate Processes for Maximum Efficiency",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Reliable IT Support When You Need It",
    img: Code,
  },
  {
    id: crypto.randomUUID(),
    title: "Future-Ready Technology Solutions",
    img: Code,
  },
];

const swiperSettings = {
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: "auto",
  allowTouchMove: false,
  modules: [Autoplay],
  // slidesPerView: 1,
  // breakpoints: {
  // 	1200: {
  // 		slidesPerView: 2,
  // 	},
  // 	1400: {
  // 		slidesPerView: 2.5,
  // 	},
  // },
};

function AutoSlider() {
  return (
    <div className="aximo-auto-slider-section">
      <div className="swiper aximo-auto-slider">
        {
          <Swiper {...swiperSettings}>
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="aximo-auto-slider-item">
                  <h3>{item.title}</h3>
                  <img width={50} src={item.img} alt={item.title} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </div>
  );
}

export default AutoSlider;
