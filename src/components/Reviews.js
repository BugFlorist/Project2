import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar as faStarFull} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarOutline} from '@fortawesome/free-regular-svg-icons';

function Reviews({name, stars, content}) {

    const starArray = [];

    for (let i = 0; i < 5; i ++){
        if (i < stars) {
            starArray.push(<FontAwesomeIcon icon={faStarFull} />);
        } else {
            starArray.push(<FontAwesomeIcon icon={faStarOutline} />);
        }
    }


  return (
    <ListGroup>
      <ListGroup.Item>{name}</ListGroup.Item>
      <ListGroup.Item>{starArray}</ListGroup.Item>
      <ListGroup.Item>{content}</ListGroup.Item>

    </ListGroup>
  );
}

export default Reviews;