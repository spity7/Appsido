import Star2Img from "../../../assets/images/v1/star2.png";
import StoryContent from "./StoryContent";
import StoryPhotos from "./StoryPhotos";
function Story() {
  return (
    <div className="section aximo-section-padding6">
      <div className="container">
        <div className="aximo-section-title center title-description">
          <h2>
            <span className="aximo-title-animation">
              We think our story is
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star" />
              </span>
            </span>
            worth sharing with you
          </h2>
          <p>
            What started as a small team of passionate developers and IT
            enthusiasts has grown into a trusted partner for companies across
            industries. Over the years, we’ve worked tirelessly to deliver
            tailored solutions that address the unique challenges of our
            clients, helping them stay ahead of the curve in a competitive
            market.
          </p>
        </div>

        <StoryPhotos />

        <div className="aximo-story-content">
          <StoryContent />
        </div>
      </div>
    </div>
  );
}

export default Story;
