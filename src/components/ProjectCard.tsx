import { images } from "../img_files/ProjectPreviewImages";

const ProjectCard = (props: {
  imgpath: string;
  title: string;
  projtype: string;
  desc: string;
  featured?: boolean;
}) => {
  const { imgpath, title, projtype, desc, featured } = props;

  return (
    <div
      className={`card ${featured ? "card--featured" : ""}`}
      // style={{ cursor: "pointer" }}
    >
      <div className="card-img">
        <img
          src={images[imgpath]}
          className="card-img-top"
          alt={"Mockup of " + title}
        />
        <div className="card-img-overlay">
          <p className="card-text-overlay">{desc}</p>
        </div>
      </div>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <p className="card-text">{projtype}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
