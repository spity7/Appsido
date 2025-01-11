import Video from "./Video";
import Code from "../../../assets/images/v1/code.png";
import AboutCounter from "./AboutCounter";

function About() {
  return (
    <div className="section aximo-section-padding">
      <div id="aximo-counter"></div>
      <div className="container">
        <div className="aximo-section-title">
          <div className="row">
            <div className="col-lg-7">
              <h2>
                <span className="aximo-title-animation">
                  We make your
                  <span className="aximo-title-icon">
                    <img width={70} src={Code} alt="Code" />
                  </span>
                </span>{" "}
                business stand out
              </h2>
            </div>
            <div className="col-lg-4 offset-lg-1 d-flex align-items-center">
              <p>
                Our mission is to empower organizations with cutting-edge
                solutions that drive growth, efficiency, and success in an
                ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <Video />
          </div>
          <div className="col-lg-4">
            <AboutCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
