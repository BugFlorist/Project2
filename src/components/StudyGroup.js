import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

function StudyGroup({course, date, time, tutor}) {
  return (
    <ListGroup>
    
      <ListGroup.Item>
        <div className='row'>
        <div className='col-md-3'>
            {course}
        </div>
        <div className='col-md-3'>
            {date}
        </div>
        <div className='col-md-3'>
            {time}
        </div>
        <div className='col-md-3'>
           <Button variant='primary'>Reserve a Spot</Button> 
            
        </div>
        </div>

        

      </ListGroup.Item>
    </ListGroup>
  );
}

export default StudyGroup;