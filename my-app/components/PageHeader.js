import { Card } from 'react-bootstrap';

export default function PageHeader(props, subtext) {
  return (
    <>
    <div className="container">
      <Card className="bg-light">
        <Card.Body className="p-4 mb-4 text-center rounded-3 bg-light">
          <h1 className="display-4">{props.text}</h1>
          <p className="lead">{props.subtext}</p>
        </Card.Body>
      </Card>
    </div>
    <br/>
    </>
  );
}