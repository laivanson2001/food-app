import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
	{
		display: "Trang chủ",
		path: "/home",
	},
	{
		display: "Thực đơn",
		path: "/foods",
	},
	{
		display: "Giỏ hàng",
		path: "/cart",
	},
	{
		display: "Liên hệ",
		path: "/contact",
	},
];

const Header = () => {
	const menuRef = useRef(null);
	const headerRef = useRef(null);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const dispatch = useDispatch();

	const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

	const toggleCart = () => {
		dispatch(cartUiActions.toggle());
	};

	const stickyHeader = () => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 80) {
				headerRef.current.classList.add("header__shrink");
			} else {
				headerRef.current.classList.remove("header__shrink");
			}
		});
	};

	useEffect(() => {
		stickyHeader();

		return () => window.removeEventListener("scroll", stickyHeader);
	}, []);

	return (
		<header className='header' ref={headerRef}>
			<Container>
				<div className='nav__wrapper d-flex align-items-center justify-content-between'>
					<Link to='/' className='logo'>
						<img src={logo} alt='logo' />
						<h5>Atomic</h5>
					</Link>

					{/* ======= menu ======= */}
					<div
						className='navigation'
						ref={menuRef}
						onClick={toggleMenu}
					>
						<div className='menu d-flex align-items-center gap-5'>
							{nav__links.map((item, index) => (
								<NavLink
									to={item.path}
									key={index}
									className={(navClass) =>
										navClass.isActive ? "active__menu" : ""
									}
								>
									{item.display}
								</NavLink>
							))}
						</div>
					</div>

					{/* ======== nav right icons ========= */}
					<div className='nav__right d-flex align-items-center gap-4'>
						<span className='cart__icon' onClick={toggleCart}>
							<i class='ri-shopping-basket-line'></i>
							<span className='cart__badge'>{totalQuantity}</span>
						</span>

						<span className='user'>
							<Link to='/login'>
								<i class='ri-user-line'></i>
							</Link>
						</span>

						<span className='mobile__menu' onClick={toggleMenu}>
							<i class='ri-menu-line'></i>
						</span>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
