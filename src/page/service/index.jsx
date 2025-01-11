import BreadCrumb from "../../components/common/Breadcrumb";
import TwoColumnFaq from "../../components/contact/TwoColumnFaq";
import AutoSlider from "../../components/home-one/auto-slider";
import Services from "../../components/home-one/services";
import WhyChooseUs from "../../components/home-one/why-choose-us";

const services = [
  {
    id: crypto.randomUUID(),
    title: "Web Services",
    description:
      "At Appsido, we create stunning, high-performance websites that captivate your audience and drive results. Whether you need a simple landing page or a complex web application, our team delivers tailored solutions to meet your business goals.",
    icon: "icon-design-tools",
  },
  {
    id: crypto.randomUUID(),
    title: "App Services",
    description:
      "From concept to launch, we develop mobile apps that are intuitive, feature-rich, and scalable. Whether you need an iOS, Android, or cross-platform app, Appsido has the expertise to bring your vision to life.",
    icon: "icon-branding",
  },
  {
    id: crypto.randomUUID(),
    title: "AI Services",
    description:
      "Leverage AI to automate processes, gain insights, and make smarter decisions. Our AI solutions are designed to help your business stay ahead in a competitive market.",
    icon: "icon-web",
  },
  {
    id: crypto.randomUUID(),
    title: "IT Services",
    description:
      "Navigating the world of technology can be challenging. Our IT consulting services provide expert guidance to help you make informed decisions and achieve your business objectives.",
    icon: "icon-design-thinking",
  },
  {
    id: crypto.randomUUID(),
    title: "E-Commerce Solutions",
    description:
      "Create a seamless shopping experience for your customers with our end-to-end e-commerce solutions. From platform selection to payment integration, we handle it all.",
    icon: "icon-layers",
  },
];

function ServicePage() {
  return (
    <>
      <BreadCrumb title="Service" />
      <Services services={services} />
      <AutoSlider />
    </>
  );
}

export default ServicePage;
