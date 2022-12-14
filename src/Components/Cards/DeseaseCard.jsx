import "w3-css/w3.css";
import './DeseaseCard.css'
import { FaVirus } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { CgDanger } from "react-icons/cg";
import { CgPill } from "react-icons/cg";

const DiseaseCard = (props) => {
  return (
    <div className="w3-card-4 w3-third">
      <header className="w3-container w3-deep-orange header w3-xlarge">
        <h2>
          <FaVirus className="w3-xlarge" /> {props.disease}
        </h2>
      </header>
      <div className="w3-container w3-padding-16">
        <p className="w3-center w3-large">
          <b>
            <TbFileDescription className="w3-large" /> Desciption:
          </b>
          {props.description}
        </p>
        <p className="w3-center w3-large">
          <b>
            <CgDanger className="w3-large" /> Fear rate:
          </b>
          {props.rate}
        </p>
        <p className="w3-center w3-large">
          <b>
            <CgPill className="w3-large" /> remedies:
          </b>
          {props.remedies}
        </p>
      </div>
    </div>
  );
};

export default DiseaseCard;
