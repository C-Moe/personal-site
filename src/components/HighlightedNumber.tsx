const HighlightedNumber = (props: { num: string }) => {
  const num = props.num;
  return (
    <div className="offsetCircleContent">
      <div className="circle" />
      <div className="offsetText KeyNumber">{num}</div>
    </div>
  );
};

export default HighlightedNumber;
