import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"
const Feature = () => {
    return (
        <div className="text-center feature mt-5 pb-5">
            <Container>
                <Row className="pt-5 pb-2 mb-4">
                    <h1>
                        How Does Alex Health Work ?
                    </h1>
                </Row>
                <Row>
                    <Col sm>
                        {/* <span className="fa fa-clipboard" style={{ fontSize: 70 }}> </span> */}
                        <Image

                            src="/search.png"
                            width={128}
                            height={128}
                            layout="intrinsic"
                            alt="Alex Health"
                            className=""
                        />
                        <h2 className="mt-2">Compare Hospital <br/> Quality</h2>
                        <p className="fs-5">Get info on emergency services for complications, doctor’s expertise and experience, hospital’s size & specialty
                        </p>
                    </Col>
                    <Col sm>
                        {/* <span className="fa fa-inr" style={{ fontSize: 70 }}> </span> */}
                        <Image

                            src="/compagehospital.png"
                            width={128}
                            height={128}
                            layout="intrinsic"
                            alt="Alex Health"
                            className=""
                        />
                        <h2 className="mt-1">Compare Hospital <br/> Rates </h2>
                        <p className="fs-5">Get an estimated price you need to pay including expenses for medical complications & other additional charges apart from surgery.
                        </p>
                    </Col>
                    <Col sm>
                        {/* <span className="fa fa-check" style={{ fontSize: 70 }}> </span> */}
                        <Image

                            src="/insurance.png"
                            width={128}
                            height={128}
                            layout="intrinsic"
                            alt="Alex Health"
                            className=""
                        />
                        <h2 className="mt-1">Understand Insurance <br/> Coverage</h2>
                        <p className="fs-5">Are you covered? Find out the final amount you need to pay after applying your insurance.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Feature