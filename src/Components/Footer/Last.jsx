import "w3-css/w3.css";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from "semantic-ui-react";
// import { UserCard } from "react-ui-cards";
const Last = (props) => {
  return (
    <div className="w3-quarter">
      <Card>
        <Image
          src={props.url}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header className="w3-xlarge">{props.name}</Card.Header>
          <Card.Meta>
            <span className="date w3-large">{props.joined}</span>
          </Card.Meta>
          <Card.Description className="w3-large">
            {props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Last;
