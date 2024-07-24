import ProjectCard from "./ProjectCard";
// TODO: remove
import ShopGreen from "./ShopGreen";

const projects: {
  id: string;
  title: string;
  projtype: string;
  desc: string;
}[] = [
  {
    id: "boundarease",
    title: "BoundarEase",
    projtype: "ux, research, academic study",
    desc: "A web platform for community members to explore school attendance boundaries and offer feedback, aiming to facilitate engagement and foster more equitable policies.",
  },
  {
    id: "hi neighbor",
    title: "hi neighbor!",
    projtype: "ux, concept",
    desc: "A digital bulletin board experience to encourage and support relationships in hyperlocal communities via user-generated content.",
  },
  {
    id: "shopgreen",
    title: "ShopGreen",
    projtype: "ui, concept",
    desc: "A curated database for consumers aiming to shop more sustainably.",
  },
  {
    id: "neu voters",
    title: "NEU Voters",
    projtype: "ux, concept",
    desc: "A campaign designed to address low young-voter turnout in the United States, particularly among college students voting out-of-state.",
  },
  {
    id: "country",
    title: "Country at a Glance — Canada",
    projtype: "information design",
    desc: "An infographic poster providing 27 high-level data points. 38 x 24 in.",
  },
  {
    id: "typesetting",
    title: "Typesetting Exploration",
    projtype: "type study",
    desc: "45 compositions exploring placement, orientation, contrast, motion, hierarchy, etc.",
  },
  {
    id: "type at sea",
    title: "Type at Sea — Poster",
    projtype: "type study",
    desc: "A poster defining 21 typographical terms.",
  },
];

const Projects = () => {
  return (
    <>
      {/* {projects.map(project => (<ProjectCard key={project.id} imgpath={"../assets/project_previews/" + project.id} />))} */}

      <div className="container projectsContainer">
        {/* TODO: update breakpoint */}
        <div className="row row-cols-4 g-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imgpath={project.id}
              title={project.title}
              projtype={project.projtype}
              desc={project.desc}
            />
          ))}
        </div>
      </div>

      <ShopGreen />
    </>
  );
};

export default Projects;
