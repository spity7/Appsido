import Star2Img from "../../../assets/images/v1/star2.png";
import Thumb1Img from "../../../assets/images/v1/t_thumb1.png";
import Thumb2Img from "../../../assets/images/v1/t_thumb2.png";
import Thumb3Img from "../../../assets/images/v1/t_thumb3.png";
import Thumb4Img from "../../../assets/images/v1/t_thumb4.png";
import FadeInStagger from "../../animation/FadeInStagger";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: "Super customer service!",
    description:
      "Appsido transformed our business with their innovative IT solutions. Their team was professional, responsive, and truly understood our needs. We couldn’t be happier with the results!",
    author: "Mostafa Haidar",
    designation: "Chief Executive  Officer (CTO)",
    img: Thumb1Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 4,
    title: "Exceptional creativity and vision",
    description:
      "From start to finish, Appsido made the process seamless. Their expertise in web development and cybersecurity gave us the confidence to scale our operations. Highly recommend!",
    author: "Charbel Boustani",
    designation: "Businessman",
    img: Thumb2Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 5,
    title: "Innovative and professional",
    description:
      "The Appsido team went above and beyond to deliver a solution that perfectly aligned with our goals. Their attention to detail and commitment to excellence is unmatched.",
    author: "Mohamad Siblini",
    designation: "IT Manager/Director",
    img: Thumb3Img,
  },
  {
    id: crypto.randomUUID(),
    rating: 4,
    title: "Transformed our brand",
    description:
      "Our partnership with Mthemeus transformed our brand from ordinary to extraordinary. Their branding expertise and design work elevated our marketing materials to a whole new level. Our customers have taken notice, and boost in brand recognition.",
    author: "Toni Salemeh",
    designation: "Startup Founder",
    img: Thumb4Img,
  },
];

function Testimonial() {
  return (
    <div className="section aximo-section-padding3">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            Clients are always
            <span className="aximo-title-animation">
              satisfied with us
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="Star2Img" />
              </span>
            </span>
          </h2>
        </div>
        <div className="row">
          {testimonialsData.map((testimonial, index) => (
            <FadeInStagger
              index={index}
              className="col-lg-6"
              key={testimonial.id}
            >
              <TestimonialCard testimonial={testimonial} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
