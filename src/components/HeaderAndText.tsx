// subsection header is mini header within main text content
// section header is serif in left column e.g. "Overview" or "Background"
// project info is sanserif used for overview project info

// text can be empty string (if section header)

const HeaderAndText = (props: {
  type: "section header" | "project info";
  title: string;
  text: string;
}) => {
  const { type, title, text } = props;

  return (
    <div>
      {type == "section header" ? <h3>{title}</h3> : <h5>{title}</h5>}
      <p>{text}</p>
    </div>
  );
};

export default HeaderAndText;
