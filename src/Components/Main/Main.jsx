import "w3-css/w3.css";
import "./Main.css";
import ImageSlider from './ImageSlider'

const Main = ({slides}) => {
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
      <div>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
  );
};



export default Main;
