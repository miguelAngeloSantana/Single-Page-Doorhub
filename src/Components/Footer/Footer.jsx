import "./FooterStyle.css";

import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
	return (
		<div className="conteiner-footer">
			<div className="top">
				<div className="section-left">
					<span>doorhub</span>
					<p>
						Comia especial de tecnologia de entrega que segue para você comprar
						comidas frescas e sauaveis
					</p>
				</div>

				<div className="section-main">
					<div className="links-rapidos">
						<h5>Links rapidos</h5>
						<ul>	
							<li>Sobre nos</li>
							<li>Tornse-se um patrocionador</li>
							<li>Nossa equipe</li>
							<li>Blog</li>
							<li>Contato</li>
						</ul>
					</div>

					<div className="links-uteis">
						<h5>Links Úteis</h5>
						<ul>
							<li>Politica de privacidade</li>
							<li>Termos e Condições</li>
							<li>Isenção de Responsabilidade</li>
							<li>Suporte</li>
							<li>FAQ</li>
						</ul>
					</div>

					<div className="sobre">
						<h5>Mais Sobre nos</h5>
						<ul>
							<li>Gift Cards</li>
							<li>Historia doordesh</li>
							<li>Linkedin</li>
							<li>Glasdoor</li>
							<li>Acessbilidades</li>
						</ul>
					</div>

					<div className="contato column">
						<h5>Contatos</h5>
						<ul>
							<li>WhatsApp</li>
							<li>Suport 24</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bottom">
				<span>Copyright @</span>

				<div className="social">
					<IoLogoFacebook />
					<FaSquareXTwitter />
					<FaLinkedin />
				</div>
			</div>
		</div>
	)
}