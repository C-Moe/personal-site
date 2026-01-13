import { images } from "../CountryAtAGlanceImages";

const CountryAtAGlance = () => {
  return (
    <div className="projectPage">
      <img
        className="container projectTopImage"
        src={images["poster"]}
        alt="Infographic poster containing 27 data points about Canada. 38 x 24 in."
      />
    </div>
  );
};

export default CountryAtAGlance;
