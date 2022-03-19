import Image from "next/image"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useState } from 'react';
import CustomModal from "./CustomModal";


const Herosection = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="mt-5 mb-5 flex flex-column containerhero">
            <Container >
                <Row className="mb-5 mt-5 pt-5" >
                    <Col lg={6} sm={12} md={6} className="my-auto center" md>
                        <p className="fs-2 fw-bold">Compare price & hospitals for <br /> Baby-delivery</p>
                        <p className="fs-5">
                            With Alex Health you can Compare price & quality of hospitals, Get an estimated bill for all complications, Know what’s covered in your insurance, Get final amount you pay
                        </p>
                        <br />
                        <Button onClick={() => setModalShow(true)} size="lg" className="freecall border-0">
                            <span className="fa fa-phone" style={{ fontSize: 20 }}> </span>
                            &nbsp;&nbsp;&nbsp;Book a free call
                        </Button>
                        <CustomModal show={modalShow}
                            onHide={() => setModalShow(false)} />
                    </Col>
                    <Col lg={6} sm={12} md={6} className="mb-1 center" md>
                        <Image
                            src="/herosection.png"
                            width={400}
                            height={400}
                            layout="intrinsic"
                            alt="herosection"
                            className=" mx-auto my-auto"
                        />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Herosection