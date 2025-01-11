import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import Code from "../../../assets/images/v1/code.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";

import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function HeroContent() {
  return (
    <div className="aximo-hero-content">
      <FadeInStaggerTwo>
        <FadeInStaggerTwoChildren>
          <h1>
            <span className="aximo-title-animation">
              A creative
              <img width={80} src={Code} alt="StarImg" />
            </span>{" "}
            <div></div>
            IT Company
          </h1>
        </FadeInStaggerTwoChildren>
        <FadeInStaggerTwoChildren>
          <p>
            {`A Cutting-Edge IT Services Company
              We specialize in delivering innovative IT solutions designed to meet the needs of a rapidly evolving digital world. Our services empower businesses to innovate, grow, and excel in today's technology-driven era.`}
          </p>
        </FadeInStaggerTwoChildren>
        <FadeInStaggerTwoChildren>
          <div className="aximo-hero-user-wrap">
            <div className="aximo-hero-user-thumb">
              <div className="aximo-hero-user-thumb-item">
                <img src={User1Img} alt="User1Img" />
              </div>
              <div className="aximo-hero-user-thumb-item">
                <img src={User3Img} alt="User3Img" />
              </div>
              <div className="aximo-hero-user-thumb-item">
                <img src={User2Img} alt="User2Img" />
              </div>
            </div>
            <div className="aximo-hero-user-data">
              <p>Believed by more than a thousand people</p>
            </div>
          </div>
        </FadeInStaggerTwoChildren>
        <FadeInStaggerTwoChildren>
          <Link className="aximo-call-btn" to="/contact-us">
            Book a free consultation <i className="icon-call"></i>
          </Link>
        </FadeInStaggerTwoChildren>
      </FadeInStaggerTwo>
    </div>
  );
}

export default HeroContent;
