const ProjectSubtitles = (props: { subtitle1: String; subtitle2: String }) => {
  const { subtitle1, subtitle2 } = props;

  return (
    <div>
      <div className="projectSubtitle1 col-12 col-md-11 col-lg-10 mb-2">
        {subtitle1}
      </div>
      {/* <div className="projectSubtitle2 mb-4 mb-lg-5">{subtitle2}</div> */}
    </div>
  );
};

export default ProjectSubtitles;
