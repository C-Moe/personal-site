import { images } from "../ProjectPreviewImages";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props: {
  imgpath: string;
  title: string;
  projtype: string;
  desc: string;
  navigateTo: string;
}) => {
  const { imgpath, title, projtype, desc, navigateTo } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(navigateTo);
  };

  return (
    <div
      className="card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
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
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  );
};

export default ProjectCard;
