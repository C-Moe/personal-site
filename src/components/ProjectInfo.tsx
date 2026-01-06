import HeaderAndText from "./HeaderAndText";

const ProjectInfo = (props: { info: IProjectInfo }) => {
  const { info } = props;

  return (
    <div>
      {/* year + project role */}
      <div className="row mb-4">
        <div className="col-12 col-md-3 offset-md-1 sectionHeaderColumn d-flex projectInfoLeftCol">
          <div>
            <HeaderAndText type="project info" title="year" text={info.year} />
            <HeaderAndText
              type="project info"
              title="project role"
              text={info.projectRole}
            />
          </div>
        </div>
        {/* <div className="col-1" /> */}

        {/* deliverables + skills + tools */}
        <div className="col-12 col-md-8 col-lg-6 offset-lg-1">
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
