import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap"

const ReadMore = ({ children }) => {
	const card = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="">
			{isReadMore ? ('') : card}
			<Col lg={12} className="d-flex justify-content-around">
			<Button onClick={toggleReadMore}  className="read-or-hide showmorebutton border-0 mt-5" size="lg">
				{isReadMore ? "Show More" : " Show Less"}{'  '} &nbsp;
				<span className="fa fa-angle-down" style={{ fontSize: 25 }}> </span>
			</Button>
			</Col>
		</p>
	);
};

const Content = () => {
	return (
		<div >
				<br />
				<Container>
					<ReadMore>

						<Row className="d-flex justify-content-around">
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
					</ReadMore>
				</Container>
		</div>
	);
};

export default Content;

