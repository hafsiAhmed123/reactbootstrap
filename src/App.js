import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form  } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col md>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Example@email.com"/>
            <Form.Text className="Text-muted">
              we'll never share your email address, trust us!
            </Form.Text>
          </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>
          </Col>
          </Row>
          <Button variant="secondary" type="submit">Login</Button>
        </Form>
        <Card className="mb-3" style={ {color: "#000"}}>
         <Card.Img src="https://picsum.photos/200/50" />
         <Card.Body>
           <Card.Title>
             <Card.Text>
               this is an example of react bootstrap cards
             </Card.Text>
           </Card.Title>
           <Button variant='primary'>read more</Button>
         </Card.Body>
        </Card>
        <Breadcrumb>
        <Breadcrumb.Item>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test1</Breadcrumb.Item>
        <Breadcrumb.Item active>Test2</Breadcrumb.Item>

        </Breadcrumb>
        <Alert variant="succes">this is a button</Alert>
        <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
