import "./styles/artigo.css";
import Post from "./Post.jsx";

const infoPosts = [
	{
		img: "https://img.freepik.com/vetores-gratis/ilustracao-de-ceviche-desenhada-a-mao_23-2148780290.jpg", 
		title: "Nova receita de frutos do mar perfeita para perde peso", 
		desc: "a comunicação de massa levou a estratégias de marketing modernas para continuar focando no reconhecimento da marca", 
		id: "1"
	},
	
	{
		img: "https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-hamburguer_114360-3215.jpg", 
		title: "equilíbrio de proteínas, gorduras e carboidratos. Como faço para obtê-lo", 
		desc: "a comunicação de massa levou a estratégias de marketing modernas para continuar focando no reconhecimento da marca", 
		id: "2"
	},

	{
		img: "https://img.freepik.com/vetores-gratis/tigelas-de-frutas-e-saladas_23-2148492756.jpg", 
		title: "A importancia de preparar uma comida saudavel",
		desc: "a comunicação de massa levou a estratégias de marketing modernas para continuar focando no reconhecimento da marca", 
		id: "3"
	}
];

export default function Artigos() {
	return (
		<div className="artigos">
			<div className="info">
				<h3>Artigos e dicas úteis</h3>
				<p>
					Leia algumas informações sobre comidas saudaveis, eventos interresantes e receitas. Novos 
					planos de refeições e dietas espacializada
				</p>
			</div>

			<div className="artigos-posts">
				{infoPosts.map((obj, id) => 
					<Post key={id} post={obj} className="postStyle"/>				
				)}
			</div>
		</div>
	)
}