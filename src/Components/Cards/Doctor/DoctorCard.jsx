import "w3-css/w3.css";
import { FcAbout } from "react-icons/fc";
import { FcLibrary } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import './DoctorCard.css'
const DoctorCard = (props) => {
  return (
    <div className="w3-card-4 w3-third">
      <header className="w3-container w3-teal header">
        <h2 className="w3-xlarge">{props.name}</h2>
      </header>

      <div className="w3-container w3-padding-16">
        <p className="w3-center w3-large">
          <b>
            <FcAbout className="w3-large" /> experience:  
          </b>
          {props.experience}
        </p>
        <p className="w3-center w3-large">
          <b>
            <FcLibrary className="w3-large" />
            work place:{" "}
          </b>
          {props.workPlace}
        </p>
        <p className="w3-center w3-large">
          <b>
            <FcCheckmark className="w3-large" /> rate:{" "}
          </b>
          {props.rate}
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
