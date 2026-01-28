import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ProjectSubtitles from "../components/ProjectSubtitles";
import { images } from "../img_files/TypesettingImages";
import { useBodyClassName } from "../utils";

const imgs = Object.values(images).map((src) => (
  <img key={src} src={src} className="col-12 col-md-2" />
));

const Typesetting = () => {
  useBodyClassName("body-dark");
  return (
    // <div className="projectPage" style={{ backgroundColor: "#131212" }}>
    <div className="projectPage">
      <Nav />
      <div className="row g-3">{imgs}</div>
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

export default Typesetting;
