import "w3-css/w3.css";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from "semantic-ui-react";
// import { UserCard } from "react-ui-cards";
const Last = () => {
  return (
    <div className="w3-quarter">
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
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