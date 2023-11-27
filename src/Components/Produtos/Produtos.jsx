import "./styles/Produtos.css";
import CardProdutos from "./CardProdutos.jsx";

import img2 from './Imagens/almoco.png';

const listProdutos = [
  {
  	foto: 'https://img.freepik.com/fotos-gratis/cafe-da-manha-com-dieta-cetogenica-salada-de-salmao-com-verduras-pepinos-ovos-e-abacate-almoco-keto-paleo_2829-20254.jpg', 
  	title: "salada de salmao com verduras", 
  	preco: 20.40, 
  	desc: "café da manha com salada de salmao com verduras", 
  	id: "img1"
  },
  
  {
  	foto: img2, 
  	title: "almoço com arroz, bifé e salada", 
  	preco: 16.00, 
  	desc: "imagen de um prato com arroz, bifé e salada", 
  	id: "img2"
  },

  {
  	foto: 'https://img.freepik.com/fotos-gratis/peito-de-frango-grelhado-e-salada-de-legumes-frescos-folhas-de-tomate-pepino-e-alface-salada-de-galinha-comida-saudavel_2829-4246.jpg', 
  	title: "bifé de frango com alface e tomate", 
  	preco: 15.40, 
  	desc: "imagen de um prato com bifé e frango com alface e tomate", 
  	id: "img3"
  },

  {
  	foto: 'https://img.freepik.com/fotos-gratis/farfalle-macarrao-de-trigo-duro-com-almondegas-assadas-de-file-de-frango-em-molho-de-tomate-e-salada-na-tigela_2829-11169.jpg', 
  	title: "macarrão de trigo com almôndegas e salada", 
  	preco: 17.50, 
  	desc: "imagen de um prato com macarrão de trigo com almôndegas assadas e salada", 
  	id: "img4"
  },

  {
  	foto: 'https://img.freepik.com/fotos-gratis/vista-superior-deliciosa-salada-de-ovo_23-2149179604.jpg', 
  	title: "Salada de ovo", 
  	preco: 10.00, 
  	desc:"imagen de um prato com Salada e ovo", 
  	id: "img5"
  },

  {
  	foto: 'https://img.freepik.com/fotos-gratis/bife-grelhado-com-vegetais-frescos-pimentao-tomate-cebola-roxa-pimenta-rosa-e-especiarias-comida-saborosa-feita-em-casa-conceito-de-refeicao-saborosa-e-saudavel-superficie-de-pedra-preta-bife-de-porco-com-salada_1150-44973.jpg', 
  	title: "frango frito com verduras", 
  	preco: 35.00, 
  	desc: "prato com frango frito com verduras", 
  	id: "img6"
  },
];

export default function Produtos() {
	return (
		<div className="produtos">
	        <div className="info">
	          <h2>Nossos principais pratos com entrega</h2>
	          <p>
	            Abaixo ha alguns saudaveis e deliciosos pratos para você escolher. Podendo escolher um prato
	            separado ou como parte de um mesmo pedido
	          </p>
	        </div>
	        <div className="conteiner-produtos">
	          {listProdutos.map((obj, index) => 
	            // <div className="col" key={index}>
	              <CardProdutos key={index} produto={obj} className="StyleCardProdutos"/>
	            // </div>
	          )}
	        </div>
	    </div>
	)
}