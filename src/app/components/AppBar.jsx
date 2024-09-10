'use client'
import Image from 'next/image'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { useRouter } from 'next/navigation';

const AppBar = () => {
    const router = useRouter();
    const handleRegistration = () => {
        router.push('/registration');
    }
    
  return (
    <div className='Navbar'>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand className="cursor-pointer" onClick={() => router.push('/')}>
                        <Image
                            alt="logo"
                            src="/assets/logo.png"
                            width={30}
                            height={30}
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Button variant="secondary" className="ms-auto rounded-pill pl-2 pr-2 shadow-lg fw-semibold custom-button" onClick={handleRegistration}>
                                Join as a Worker
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
  )
}

export default AppBar
