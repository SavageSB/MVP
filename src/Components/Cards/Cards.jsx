import "w3-css/w3.css";
import fluData from "../Data/FluData";
import DiseaseCard from "./DeseaseCard";

const Cards = () => {
  return (
    <div className="w3-row-padding w3-center">
      {fluData.map((disease) => {
        return <DiseaseCard disease={disease.name} description={disease.description}/>;
      })}
    </div>
  );
};

export default Cards;
