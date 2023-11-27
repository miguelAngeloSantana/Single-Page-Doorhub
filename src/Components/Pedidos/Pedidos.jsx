import "./styles/pedidosStyle.css";

import Pedido from "./Pedido.jsx";

const PedidosDisponiveis = [
	{
		img: "https://img.freepik.com/fotos-gratis/conjunto-de-sushi-misto-comida-japonesa_1339-3611.jpg", 
		nome: "SUSHI",
		desc: "Ilustração de um sushi", 
		id: "ped1"
	},

	{
		img: "https://img.freepik.com/fotos-gratis/fatia-de-pizza-fresca-com-calabresa-em-branco_144627-24389.jpg", 
		nome: "PIZZA",
		desc: "Ilustração de uma pizza", 
		id: "ped2"
	},

	{
		img: "https://img.freepik.com/vetores-gratis/sanduiche-isolado-no-branco-ao-meio_1308-32237.jpg", 
		nome: "NATURAIS",
		desc: "Sanduiches naturais", 
		id: "ped3"
	},

	{
		img: "https://img.freepik.com/vetores-gratis/icone-colorido-de-vetor-de-rosquinha-rosa-isolado-no-fundo-branco_134830-1096.jpg", 
		nome: "SOBREMESAS", 
		desc: "Ilustração de um de nosso pedidos, semdp uma rosquina",
		id: "ped4"
	},

	{
		img: "https://img.freepik.com/fotos-gratis/comida-de-restaurante_144627-15123.jpg", 
		nome: "SALADA",
		desc: "Ilustração de uma prato com salada", 
		id: "ped5"
	},

	{
		img: "https://img.freepik.com/fotos-gratis/estilo-de-vida-cocina-comida-foodie-gastronomia_1350-45.jpg", 
		nome: "MASSAS",
		desc: "Produtos contendo massa", 
		id: "ped6"
	}
];


export default function Pedidos() {
	return (
		<div className="info-pedidos">
			<div className="desc">
				<h2>Oferecemos mais de 20.000 pedidos para você escolher</h2>
				<p>Seja bem vindo a maior rede pedidos e entrega de comida</p>
			</div>

			<div className="pedidos">
				{PedidosDisponiveis.map((item, id) => 
					<Pedido key={id} pedido={item} className="PedidoStyle"/>
				)}
			</div>
		</div>
	)
}