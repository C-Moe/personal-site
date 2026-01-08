const ProjectSubtitles = (props: { subtitle1: String }) => {
  const { subtitle1 } = props;

  return (
    <div className="mb-4">
      <div className="projectSubtitle1 col-12 col-md-11 col-lg-10 mb-2">
        {subtitle1}
      </div>
    </div>
  );
};

export default ProjectSubtitles;
