import CountUp from "react-countup";
function AboutCounter() {
  return (
    <div className="aximo-counter-wrap">
      <div className="aximo-counter-data">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            <CountUp end={10} duration={3} redraw={true} enableScrollSpy />
          </span>
          +
        </h2>
        <p>Years of experience</p>
      </div>
      <div className="aximo-counter-data">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            <CountUp end={47} duration={3} redraw={true} enableScrollSpy />
          </span>
        </h2>
        <p>Successful projects</p>
      </div>
      <div className="aximo-counter-data">
        <h2 className="aximo-counter-number">
          <span className="aximo-counter">
            <CountUp end={90} duration={3} redraw={true} enableScrollSpy />
          </span>
          %
        </h2>
        <p>Client satisfaction rate</p>
      </div>
    </div>
  );
}

export default AboutCounter;
