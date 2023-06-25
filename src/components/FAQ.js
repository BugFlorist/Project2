import Accordion from 'react-bootstrap/Accordion';

function FAQ({title, content}) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          {content}
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  );
}

export default FAQ;