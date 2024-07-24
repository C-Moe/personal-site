import { images } from "../ProjectPreviewImages";

const ProjectCard = (props: {
  imgpath: string;
  title: string;
  projtype: string;
  desc: string;
}) => {
  const { imgpath, title, projtype, desc } = props;

  return (
    <div className="card">
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
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  );
};

export default ProjectCard;
