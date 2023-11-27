import React from "react";
import {slide as Menu} from "react-burger-menu";
import "./Sidebar.css";

const props = () => {
	return (
		<header className="navMobile">
			<div className="logo">
				<span>Doorhub</span>
			</div>
			<Menu className="menu">
				<a className="menu-item" href="/">Sobre Nos</a>
			    <a className="menu-item" href="/pedidos">Pedidos</a>
			    <a className="menu-item" href="/rodutos">Produtos</a>
			    <a className="menu-item" href="/blog">Blog</a>
			</Menu>
		</header>
	)
}

export default props;