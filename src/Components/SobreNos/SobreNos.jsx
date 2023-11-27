import "./SobreNos.css";

export default function SobreNos() {
	return (
		<div className="conteiner-about">
			<div className="desc-section">
				<h1>Nos garantimos a entrega em até 30 minutos</h1>
				<p>
					Imaginos que você nao precisa de uma dieta porque oferecemos comidas deiciosas e saudaveis para você
				</p>

				<div className="btn">
					<span className="cep">Informe seu CEP</span>
					<div className="pesquisar">
						<span className="src">Pesquisar</span>
						<div className="simbolo">></div>
					</div>
				</div>
			</div>

			<div className="img-section">
				<img src={"https://img.freepik.com/vetores-gratis/servico-de-entrega-ilustrado_23-2148505081.jpg"} alt="ilustração de um entregador" className="image"/>
			</div>

		</div>
	)
}