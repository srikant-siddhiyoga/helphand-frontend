'use client'
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { Row, Col, Container, Card, Button, ListGroup } from 'react-bootstrap';
import { IoCall } from "react-icons/io5";

const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <AppBar />
                </Row>
                <Row className='mt-2 mr-10 ml-10 text-center'>
                    <Col sm={4}>
                        <div className='m-4'>
                            <ListGroup.Item action variant="success" className='mb-1 p-1'>
                                Electrician
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success" className='mb-1 p-1'>
                                Plumber
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success" className='mb-1 p-1'>
                                Mechanic
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success" className='mb-1 p-1'>
                                Cleaner
                            </ListGroup.Item>  
                            <ListGroup.Item action variant="success" className='mb-1 p-1'>
                                Household
                            </ListGroup.Item>
                            <ListGroup.Item action variant="success" className='mb-1 p-1'>
                                Cook
                            </ListGroup.Item>    
                        </div>
                    </Col>
                    <Col sm={8} className="d-flex flex-column align-items-center">
                        <div className="scrollable-div">
                            <Card border="success" style={{ width: '25rem', backgroundColor: 'rgba(255, 255, 255, 0.8)', border: 'none' }}>
                                <Card.Header>Electrician</Card.Header>
                                <Row>
                                    <Col sm={8}>
                                        <Card.Body>
                                            <Card.Title>Gaurav kumar</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted text-xs">2 years of experience</Card.Subtitle>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card&apos;s content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                    <Col sm={4} className='p-4'>
                                        <Card.Img variant="top" src="/assets/user.png" />
                                        <Button variant="outline-info" className="ms-auto m-2 mt-4 pl-3 pr-3"><IoCall /></Button>
                                    </Col>
                                </Row>
                            </Card><br />
                            <Card border="success" style={{ width: '25rem', backgroundColor: 'rgba(255, 255, 255, 0.8)', border: 'none' }}>
                                <Card.Header>Plumber</Card.Header>
                                <Row>
                                    <Col sm={8}>
                                        <Card.Body>
                                            <Card.Title>Himendra singh</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted text-xs">1 year of experience</Card.Subtitle>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card&apos;s content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                    <Col sm={4} className='p-4'>
                                        <Card.Img variant="top" src="/assets/user.png" />
                                        <Button variant="outline-info" className="ms-auto m-2 mt-4 pl-3 pr-3"><IoCall /></Button>
                                    </Col>
                                </Row>
                            </Card><br />
                            <Card border="success" style={{ width: '25rem', backgroundColor: 'rgba(255, 255, 255, 0.8)', border: 'none' }}>
                                <Card.Header className="transparent-header">Mechanic</Card.Header>
                                <Row>
                                    <Col sm={8}>
                                        <Card.Body>
                                            <Card.Title>Suresh kr</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted text-xs">4 years of experience</Card.Subtitle>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card&apos;s content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Col>
                                    <Col sm={4} className='p-4'>
                                        <Card.Img variant="top" src="/assets/user.png" />
                                        <Button variant="outline-info" className="ms-auto m-2 mt-4 pl-3 pr-3"><IoCall /></Button>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container><br />
            <Footer />
        </div>
    )
}

export default Dashboard
