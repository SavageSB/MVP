import "w3-css/w3.css";
import Last from "./Last";
import People from "../Data/People";
const Footer = () => {
  return (
    <div className="w3-row-padding w3-center">
      <h2 className="w3-center">People Working on the project</h2>
      {People.map((person) => {
        return (
          <Last
            url={person.url}
            name={person.name}
            joined={person.joined}
            description={person.description}
          ></Last>
        );
      })}
    </div>
  );
};

export default Footer;
