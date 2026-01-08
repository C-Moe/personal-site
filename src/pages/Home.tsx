// import './App.css'

// import Projects from "./components/Projects";

// const images = require.context('../../images', true);
// const imageList = images.keys().map(image => images(image));
// import BoundarEase from "./components/BoundarEase";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
// import HiNeighbor from "./components/HiNeighbor";
// import ProjectCard from "./components/ProjectCard";
// TODO: remove
// import ShopGreen from "./components/ShopGreen";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const projects: {
  id: string;
  imgpath: string;
  title: string;
  projtype: string;
  desc: string;
}[] = [
  {
    id: "boundarease",
    imgpath: "boundarease",
    title: "BoundarEase",
    projtype: "ux, research, academic study",
    desc: "A web platform for community members to explore school attendance boundaries and offer feedback, aiming to facilitate engagement and foster more equitable policies.",
  },
  {
    id: "hi-neighbor",
    imgpath: "hi neighbor",
    title: "hi neighbor!",
    projtype: "ux, concept",
    desc: "A digital bulletin board experience to encourage and support relationships in hyperlocal communities via user-generated content.",
  },
  {
    id: "shopgreen",
    imgpath: "shopgreen",
    title: "ShopGreen",
    projtype: "ui, concept",
    desc: "A curated database for consumers aiming to shop more sustainably.",
  },
  //   {
  //     id: "neu-voters",
  //     imgpath: "neu voters",
  //     title: "NEU Voters",
  //     projtype: "ux, concept",
  //     desc: "A campaign designed to address low young-voter turnout in the United States, particularly among college students voting out-of-state.",
  //   },
  {
    id: "country",
    imgpath: "country",
    title: "Country at a Glance — Canada",
    projtype: "information design",
    desc: "An infographic poster providing 27 high-level data points. 38 x 24 in.",
  },
  {
    id: "typesetting",
    imgpath: "typesetting",
    title: "Typesetting Exploration",
    projtype: "type study",
    desc: "45 compositions exploring placement, orientation, contrast, motion, hierarchy, etc.",
  },
  {
    id: "type-at-sea",
    imgpath: "type at sea",
    title: "Type at Sea — Poster",
    projtype: "type study",
    desc: "A poster defining 21 typographical terms.",
  },
];

const Home = () => {
  return (
    <div className="appContainer">
      {/* <Projects /> */}
      <Nav />

      <div className="mainContent">
        <div className="container homepageHeaderContainer mb-4">
          <h3
            style={{
              textTransform: "none",
              fontWeight: 400,
              letterSpacing: "-0.1px",
              marginRight: "10px",
            }}
          >
            Hi, I'm Cassandra
          </h3>
          <div>// UX designer and occasional developer driven by the why</div>
        </div>
        <div className="container projectsContainer">
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4"
            style={{ width: "100%" }}
          >
            {projects.map((project) => (
              <Link to={"/" + project.id} style={{ textDecoration: "none" }}>
                <ProjectCard
                  key={project.id}
                  imgpath={project.imgpath}
                  title={project.title}
                  projtype={project.projtype}
                  desc={project.desc}
                />
              </Link>
            ))}
          </div>
          {/* UNDER CONSTRUCTION */}
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="card-title" style={{ fontStyle: "italic" }}>
              under construction...
            </div>
            <div style={{ color: "#474747" }}>be back soon!!!</div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
