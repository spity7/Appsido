import { Link } from "react-router-dom";
import code from "../../../assets/images/v1/code.png";

function Content() {
  return (
    <div className="aximo-default-content">
      <h2>
        <span className="aximo-title-animation">
          Our high-quality
          <span className="aximo-title-icon">
            <img width={70} src={code} alt="Star2Img" />
          </span>
        </span>{" "}
        working processes
      </h2>
      <p>
        We focus at every stage on effective communication and collaboration
        between the client and ensuring that the final design meets the client s
        objectives and expectations.
      </p>
      <Link className="aximo-call-btn" to="/service">
        More Services <i className="icon-arrow-right"></i>
      </Link>
    </div>
  );
}

export default Content;
