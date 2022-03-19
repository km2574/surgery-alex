import { Navbar, Container, Button } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
const nav = () => {
    return (
        <div >
            <Navbar className="shadow-lg " fixed="top" expand="lg" bg="light" variant="dark">
                <Container>
                    <Navbar.Brand className="fs-4" href="#home">
                        <Link href="/" passHref={true}>
                            <Image

                                src="/logo.png"
                                width={180}
                                height={50}
                                layout="intrinsic"
                                alt="Alex Health"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="fs-4">

                            <Link href="http://wa.me/919657225542" passHref>
                                <Button className="wp-button flex justify-items-center my-auto border-0" sm={6} size="lg">
                                    <span className="fa fa-whatsapp" style={{ fontSize: 25 }}> </span>
                                    <a className="text-white text-decoration-none my-auto">
                                        &nbsp;&nbsp;WhatsApp&nbsp;us
                                    </a>
                                </Button>
                            </Link>


                            {/* <Link href="http://wa.me/919657225542" passHref>
                                <Button sm={6} size="lg" className="">
                                    <Image
                                        src="/wp.png"
                                        width={50}
                                        height={50}
                                        alt="alex health"
                                        className="my-auto"
                                    />
                                    <span className=""><a>WhatsApp&nbsp;us</a></span>
                                </Button>
                            </Link> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default nav