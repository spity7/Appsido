import Logo from "../../../assets/images/logo/appsido-white.svg";

function FooterBottom() {
  return (
    <>
      <div className="col-lg-6">
        <div className="aximo-footer-logo">
          <a href="">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="aximo-copywright one">
          <p> &copy; Copyright 2024, All Rights Reserved by Appsido</p>
        </div>
      </div>
    </>
  );
}

export default FooterBottom;
