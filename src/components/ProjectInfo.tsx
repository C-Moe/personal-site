import HeaderAndText from "./HeaderAndText";

const ProjectInfo = (props: { info: IProjectInfo }) => {
  const { info } = props;

  return (
    <div className="container projectInfoContainer">
      {/* year + project role */}
      <div className="row">
        <div className="col-3">
          <HeaderAndText type="project info" title="year" text={info.year} />
          <HeaderAndText
            type="project info"
            title="project role"
            text={info.projectRole}
          />
        </div>
        <div className="col-1" />

        {/* deliverables + skills + tools */}
        <div className="col-8">
          <HeaderAndText
            type="project info"
            title="deliverables"
            text={info.deliverables}
          />
          <HeaderAndText
            type="project info"
            title="skills"
            text={info.skills}
          />
          <HeaderAndText type="project info" title="tools" text={info.tools} />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
