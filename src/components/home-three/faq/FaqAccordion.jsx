function FaqAccordion() {
  return (
    <div
      className="accordion aximo-accordion-wrap4 col-12"
      id="aximo-accordion"
    >
      <div className="accordion-item">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#one"
        >
          What services does Appsido offer?
        </button>

        <div
          id="one"
          className="accordion-collapse collapse show"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Appsido specializes in a wide range of IT solutions, including: Web
            Development, Mobile App Development, Cloud Solutions, AI & Machine
            Learning, Cybersecurity, IT Consulting, UI/UX Design
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#two"
        >
          Who can benefit from Appsido’s services?
        </button>

        <div
          id="two"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Our services are tailored for businesses of all sizes, from startups
            to enterprises, across various industries. Whether you need a custom
            website, a mobile app, or IT consulting, we’ve got you covered.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#three"
        >
          How long does it take to see results from Appsido?
        </button>

        <div
          id="three"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            SEO is an ongoing process, and the time it takes to see results can
            vary based on factors like the competitiveness of your industry and
            the specific strategies you use. Generally, it can take Some Time to
            see significant improvements.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#four"
        >
          Do you offer ongoing support after project completion?
        </button>

        <div
          id="four"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Yes, we provide post-launch support and maintenance to ensure your
            solution continues to perform optimally. Our support plans are
            flexible and tailored to your needs.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#five"
        >
          How much do your services cost?
        </button>

        <div
          id="five"
          className="accordion-collapse collapse"
          data-bs-parent="#aximo-accordion"
        >
          <div className="accordion-body">
            Pricing varies based on the scope, complexity, and duration of the
            project. We offer transparent pricing and will provide a detailed
            quote after understanding your requirements.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqAccordion;
