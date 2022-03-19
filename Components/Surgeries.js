import { Container, Card, CardGroup, Row } from "react-bootstrap"


const Surgeries = () => {
    return (
        <Container >
            <Row className="my-5 text-center">
                    <h1>
                        Surgeries We Cover
                    </h1>
                </Row>
            <Row className="mt-5 d-flex justify-content-around">
                <Card className="border-0 shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/eye.jpg" />
                    <Card.Body>
                        <Card.Title>Lasik</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/eye.jpg" />
                    <Card.Body>
                        <Card.Title>Lasik</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/eye.jpg" />
                    <Card.Body>
                        <Card.Title>Lasik</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/eye.jpg" />
                    <Card.Body>
                        <Card.Title>Lasik</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="my-5 d-flex justify-content-around">
                <Card className="border-0 shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/eye.jpg" />
                    <Card.Body>
                        <Card.Title>Lasik</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/eye.jpg" />
                    <Card.Body>
                        <Card.Title>Lasik</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/eye.jpg" />
                    <Card.Body>
                        <Card.Title>Lasik</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/eye.jpg" />
                    <Card.Body>
                        <Card.Title>Lasik</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Surgeries