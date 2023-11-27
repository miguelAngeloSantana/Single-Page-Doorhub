import "../navbar.css";

export default function NavWeb() {
	return (
		<header className="header">
			<div className="logo">
				<span>Doorhub</span>
			</div>

			<ul>
				<li>Sobre Nos</li>
				<li>Pedidos</li>
				<li>Produtos</li>
				<li>Blog</li>
			</ul>

			<div className="btn">
				<button className="enviar">Contato</button>
			</div>
		</header>
	)
}