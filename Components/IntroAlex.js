import { Col, Container, Row } from "react-bootstrap"
import Image from "next/image"
import IntroAlexCard from '../Components/IntroAlexCard'
import Cta from "./Cta"

const IntroAlex = () => {
    return (
        <div className="introalexbg1 px-0 py-5">
            <Container >


                <Row>
                    <Col sm={7}>
                        {/* <IntroAlexCard /> */}
                        <Row className="mb-5">
                <h1>
                    Advice you can count on
                </h1>
                <p>
                    With Alex Health, you get access to the best advisors in town. Book a call at your convenience.
                </p>
            </Row>
            <Row>
                <Row className="mb-4">
                    <Col sm>
                        <h3>
                            <span className="fa fa-check" style={{ fontSize: 25, paddingRight: 20 }}> </span>No Salespeople
                        </h3>
                        <p style={{ paddingLeft: 48 }}>
                            You won’t be talking to annoying salesmen. You’ll only be engaging with exceptional advisors.

                        </p>
                    </Col>
                    <Col sm>
                        <h3>
                            <span className="fa fa-check" style={{ fontSize: 25, paddingRight: 20 }}> </span>No spam ever
                        </h3>
                        <p style={{ paddingLeft: 48 }}>
                            We won’t call you when you least expect it. Ditto Hotline comes with a spam-free guarantee

                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col sm>
                        <h3>
                            <span className="fa fa-check" style={{ fontSize: 25, paddingRight: 20 }}> </span>30 min consultation
                        </h3>
                        <p style={{ paddingLeft: 48 }}>
                            Good advice takes time. And you will have our undivided attention for at least 30 mins.
                        </p>
                    </Col>
                    <Col sm>
                        <h3>
                            <span className="fa fa-check" style={{ fontSize: 25, paddingRight: 20 }}> </span>It’s free
                        </h3>
                        <p style={{ paddingLeft: 48 }}>
                            Our consultations are free and we won’t harass you to buy from Alex Health

                        </p>
                    </Col>

                </Row>
            </Row>
                    </Col>
                    <Col sm={5}>
                        <Row>
                            <Image

                                src="/introalexdiv1.png"
                                width={755}
                                height={507}
                                layout="intrinsic"
                                alt="Alex Health"
                                className="introaleximg"
                            />
                        </Row>
                        <Row>
                        <Cta/>
                        </Row>
                    </Col>

                </Row>
                <div>

                </div>
            </Container>
        </div>
    )
}

export default IntroAlex