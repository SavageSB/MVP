import "w3-css/w3.css";
import fluData from "../Data/FluData";
import DiseaseCard from "./DeseaseCard";
import DocData from "../Data/DocData";
import DoctorCard from "./Doctor/DoctorCard";
const Cards = () => {
  return (
    <div>
      <div className="w3-row-padding w3-center">
        {fluData.map((disease) => {
          return (
            <DiseaseCard
              disease={disease.name}
              description={disease.description}
              rate={disease.dangerRate}
              remedies={disease.remedies}
            />
          );
        })}
      </div>
      <br></br>
      <div className="w3-row-padding w3-center">
        {DocData.map((doc) => {
          return (
            <DoctorCard
              name={doc.name}
              experience={doc.experience}
              workPlace={doc.workPlace}
              rate={doc.rate}
            />
          );
        })}
      </div>
      <br></br>
    </div>
  );
};

export default Cards;
