import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function Accordion() {
  return (
    <FadeInStaggerTwo
      className="accordion aximo-accordion-wrap"
      id="aximo-accordion"
    >
      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
          >
            Web Services
          </button>
        </h3>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            we create stunning, high-performance websites that captivate your
            audience and drive results.
          </div>
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
          >
            App Services
          </button>
        </h3>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            From concept to launch, we develop mobile apps that are intuitive,
            feature-rich, and scalable.
          </div>
        </div>
      </FadeInStaggerTwoChildren>
      <FadeInStaggerTwoChildren className="accordion-item">
        <h3 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
          >
            AI Services
          </button>
        </h3>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Leverage AI to automate processes, gain insights, and make smarter
            decisions.
          </div>
        </div>
      </FadeInStaggerTwoChildren>
    </FadeInStaggerTwo>
  );
}

export default Accordion;
