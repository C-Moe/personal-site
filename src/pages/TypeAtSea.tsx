import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProjectSubtitles from "../components/ProjectSubtitles";
import { images } from "../img_files/TypeAtSeaImages";
import { useBodyClassName } from "../utils";

const TypeAtSea = () => {
  useBodyClassName("body-dark");
  return (
    <div className="projectPage">
      <Nav />
      <img
        className="container projectTopImage"
        src={images["poster"]}
        alt="Typographical poster"
        id="type_at_sea_poster"
      />
      <div className="projectPageContent">
        <h1>Type At Sea -- Poster</h1>
        <ProjectSubtitles
          subtitle1={"A poster defining 21 typographical terms."}
        />
        <div className="sectionSpacer" />
        <div className="sectionSpacer" />
        <div className="sectionSpacer" />
        <Footer />
      </div>
    </div>
  );
};

export default TypeAtSea;
