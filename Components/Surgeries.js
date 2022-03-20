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
                <Card className="border-0 shadow-lg" style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="/eye.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Piles</Card.Title>
                        <Card.Text>
                            Blood vessels in and around the anus get swollen and cause pain
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="/eye.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Cataract</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="/eye.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Hernia</Card.Title>
                        <Card.Text>
                            A condition where an internal organ bulges out abnormally
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Row>
            <Row className="my-5 d-flex justify-content-around">
                <Card className="border-0 shadow-lg" style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="/eye.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Lasik Surgery</Card.Title>
                        <Card.Text>
                            A laser surgery that permanently corrects vision
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="/eye.jpg" /> */}
                    <Card.Body>
                        <Card.Title>GallStone</Card.Title>
                        <Card.Text>
                            Small, hard crystalline mass formed abnormally in the gall bladder
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="/eye.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Gastro-Intestinal</Card.Title>
                        <Card.Text>
                            Diseases of  esophagus, stomach, rectum, small and large intestine{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </Row>
            <Row className="my-5 d-flex justify-content-around">
                <Card className="border-0 shadow-lg" style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="/eye.jpg" /> */}
                    <Card.Body>
                        <Card.Title>Knee Replacement</Card.Title>
                        <Card.Text>
                            Replace a knee joint with a man-made artificial joint
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="/eye.jpg" /> */}
                    <Card.Body>
                        <Card.Title>ACL Tear</Card.Title>
                        <Card.Text>
                            A partial or total rupture in the anterior cruciate ligament
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="border-0 shadow-lg" style={{ width: '24rem' }}>
                    {/* <Card.Img variant="top" src="/eye.jpg" /> */}
                    <Card.Body>
                        <Card.Title>IVF</Card.Title>
                        <Card.Text>
                            IVF is a series of complex procedures that help couples bear a child who cannot conceive one naturally
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Surgeries