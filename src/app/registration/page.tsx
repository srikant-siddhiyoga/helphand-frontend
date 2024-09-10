'use client'
import { Form, Button } from 'react-bootstrap'
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

const Registration = () => {
    return (
        <>
        <AppBar />
        <div className="m-6 p-6 form-container flex gap-6 flex-wrap items-center justify-center">
            <h2 className="mb-4">Fill the required details to register</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className="form-control"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Full name" className="form-control"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" className="form-control"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMobile">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter mobile number" className="form-control"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPricePerHour">
                    <Form.Label>Price per Hour</Form.Label>
                    <Form.Control type="number" placeholder="Enter price per hour" className="form-control"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPincode">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter pincode" 
                        maxLength={6}
                        className="form-control"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAvailability">
                    <Form.Check type="checkbox" label="Available for work" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formWorkerType">
                    <Form.Label>Worker Type</Form.Label>
                    <Form.Control as="select" className="form-control">
                        <option value="">Select worker field</option>
                        <option value="full-time">Electrician</option>
                        <option value="part-time">Plumber</option>
                        <option value="freelancer">Mechanic</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div><br/><br/>
        <Footer />
        </>
    )
}

export default Registration
