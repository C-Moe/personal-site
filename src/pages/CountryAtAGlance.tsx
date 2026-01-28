import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProjectSubtitles from "../components/ProjectSubtitles";
import { images } from "../img_files/CountryAtAGlanceImages";
import { useBodyClassName } from "../utils";

const CountryAtAGlance = () => {
  useBodyClassName("body-dark");
  return (
    <div className="projectPage">
      <Nav />
      <img
        className="container projectTopImage"
        src={images["poster"]}
        alt="Infographic poster containing 27 data points about Canada. 38 x 24 in."
      />
      <div className="projectPageContent">
        <h1>Country At A Glance -- Canada</h1>
        <ProjectSubtitles
          subtitle1={
            "An exercise in information design. 27 data points, 38x24 inches."
          }
        />
        <div className="sectionSpacer" />
        <div className="sectionSpacer" />
        <div className="sectionSpacer" />
        <Footer />
      </div>
    </div>
  );
};

export default CountryAtAGlance;
