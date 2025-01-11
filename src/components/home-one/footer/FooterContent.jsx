import Shape1Img from "../../../assets/images/v1/shape1.png";
import Code from "../../../assets/images/v1/code.png";

function FooterContent() {
  return (
    <div className="aximo-default-content light position-relative">
      <h2>
        <span className="aximo-title-animation">
          Lets start a
          <span className="aximo-title-icon">
            <img width={70} src={Code} alt="Code" />
          </span>
        </span>
        <br />
        project together
      </h2>
      <p>
        We aim to establish a strong online presence, attract potential clients,
        and showcase our expertise in the IT solutions industry. Let’s
        collaborate to bring Appsido’s vision to life!
      </p>
      <div className="aximo-info-wrap">
        <div className="aximo-info">
          <ul>
            <li>Give us a call:</li>
            <li>
              <a href="tel:+961 71 601 751">+961 71 601 751</a>
            </li>
            <li>
              <a href="tel:+49 176 22777648">+49 176 22777648</a>
            </li>
          </ul>
        </div>
        <div className="aximo-info">
          <ul>
            <li>Send us an email:</li>
            <li>
              <a href="mailto:Info@appsido.com">Info@appsido.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="aximo-social-icon social-large">
        <ul>
          <li>
            <a href="https://twitter.com/" target="_blank">
              <i className="icon-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/" target="_blank">
              <i className="icon-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="icon-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="icon-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterContent;
