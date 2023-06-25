import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({image, title, content, isVisible = true}) {

  return (
    <Card style={{ width: '18rem' , display: isVisible? 'block' : 'none'}}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button variant="primary">Explore</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;