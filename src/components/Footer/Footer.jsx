import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row>
					<Col lg='3' md='4' sm='6'>
						<div className=' footer__logo text-start'>
							<img src={logo} alt='logo' />
							<h5>Atomic</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nesciunt pariatur accusamus
							</p>
						</div>
					</Col>

					<Col lg='3' md='4' sm='6'>
						<h5 className='footer__title'>Thời gian làm việc</h5>
						<ListGroup className='deliver__time-list'>
							<ListGroupItem className=' delivery__time-item border-0 ps-0'>
								<span>Thứ 2 - Thứ 7</span>
								<p>6h - 23h</p>
							</ListGroupItem>

							<ListGroupItem className=' delivery__time-item border-0 ps-0'>
								<span>Chủ nhật</span>
								<p>Nghỉ bán</p>
							</ListGroupItem>
						</ListGroup>
					</Col>

					<Col lg='3' md='4' sm='6'>
						<h5 className='footer__title'>Liên hệ</h5>
						<ListGroup className='deliver__time-list'>
							<ListGroupItem className=' delivery__time-item border-0 ps-0'>
								<p>Địa chỉ: Số 1 Lĩnh Nam, Hoàng Mai, Hà Nội</p>
							</ListGroupItem>
							<ListGroupItem className=' delivery__time-item border-0 ps-0'>
								<span>SDT: 0123456789</span>
							</ListGroupItem>

							<ListGroupItem className=' delivery__time-item border-0 ps-0'>
								<span>Email: example@gmail.com</span>
							</ListGroupItem>
						</ListGroup>
					</Col>

					<Col lg='3' md='4' sm='6'>
						<h5 className='footer__title'>Thông báo</h5>
						<p>Đăng ký mail để nhận thông báo</p>
						<div className='newsletter'>
							<input type='email' placeholder='Email' />
							<span>
								<i class='ri-send-plane-line'></i>
							</span>
						</div>
					</Col>
				</Row>

				<Row className='mt-5'>
					<Col lg='6' md='6'>
						<p className='copyright__text'>
							&copy; Copyright - 2023. Website made by Atomic. All
							Rights Reserved.
						</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
