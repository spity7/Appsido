import { Link } from "react-router-dom";
import ArrowRightImg from "../../../assets/images/icon/arrow-right.svg";
function ServiceCard({ service: { title, description, icon } }) {
  return (
    <div className="aximo-iconbox-wrap">
      <div className="aximo-iconbox-icon">
        <i className={`${icon}`}></i>
      </div>
      <div className="aximo-iconbox-data">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="aximo-call-btn" to="/contact-us">
          Contact us <i className="icon-call"></i>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
