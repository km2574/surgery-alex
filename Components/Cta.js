import { Container, Row, Col, Button } from "react-bootstrap"
import Link from "next/link"
import { useState } from 'react';
import CustomModal from "./CustomModal";
const Cta = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Container className=" mt-5 mb-5">
                <Row>
                    <Col className="d-flex justify-content-around my-2" sm>
                        <Button onClick={() => setModalShow(true)} size="lg" className="freecall border-0">
                            <span className="fa fa-phone px-1" style={{ fontSize: 20 }}> </span>
                            &nbsp;&nbsp;&nbsp;Book a free call
                        </Button>
                        <CustomModal show={modalShow}
                            onHide={() => setModalShow(false)} />
                    </Col>
                    <Col className="d-flex justify-content-around my-2" sm>
                        <Button className="wp-button flex justify-items-center my-auto border-0" sm={6} size="lg">
                            <span className="fa fa-whatsapp" style={{ fontSize: 25 }}> </span>
                            <a href="http://wa.me/919657225542" className="text-white text-decoration-none my-auto px-3">
                                &nbsp;WhatsApp&nbsp;us
                            </a>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cta