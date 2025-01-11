import Portfolio1Img from "../../../assets/images/portfolio/p_1.png";
import Portfolio2Img from "../../../assets/images/portfolio/p_2.png";
import Portfolio3Img from "../../../assets/images/portfolio/p_3.png";
import Portfolio4Img from "../../../assets/images/portfolio/p_4.png";
import Portfolio5Img from "../../../assets/images/portfolio/p_5.png";
import Portfolio6Img from "../../../assets/images/portfolio/p_6.png";
import Portfolio7Img from "../../../assets/images/portfolio/p_7.png";
import Portfolio8Img from "../../../assets/images/portfolio/p_8.png";
import FadeInStagger from "../../animation/FadeInStagger";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
  {
    id: crypto.randomUUID(),
    title: "Fashion Brand Platform",
    description:
      "Provide a seamless shopping experience for their global customers.",
    img: Portfolio1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Food Delivery App",
    description:
      "A user-friendly mobile app to streamline food ordering and delivery for their customers.",
    img: Portfolio2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "AI-Powered Chatbot",
    description:
      "HealthCare Chatbot the handles patient inquiries, appointment scheduling, and FAQs efficiently.",
    img: Portfolio3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Financial Services Firm",
    description:
      "FinTrust that migrates the legacy systems to the cloud to improve scalability, security, and cost-efficiency.",
    img: Portfolio4Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Real Estate Agency CRM",
    description:
      "A custom CRM system to manage client interactions, property listings, and sales pipelines.",
    img: Portfolio5Img,
  },
  {
    id: crypto.randomUUID(),
    title: "AI-Driven Inventory Management System",
    description:
      "UrbanMart with inventory management, leading to overstocking and stockouts.",
    img: Portfolio6Img,
  },
];
function PortfolioList() {
  return (
    <div className="section aximo-project-page aximo-section-padding5">
      <div className="container">
        <div className="row">
          {portfolioListData.map((portfolio, index) => (
            <FadeInStagger
              className="col-lg-6"
              key={portfolio.id}
              index={index}
            >
              <PortfolioCard portfolio={portfolio} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioList;
