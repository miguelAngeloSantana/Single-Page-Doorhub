import "./styles/CardProdutos.css";

export default function CardProdutos({ produto }) {
    return (
        <div className='itenProduto'>   
            <img src={produto.foto} alt={produto.desc} />

            <span className="titulo">{produto.title}</span>

            <div className="footer-section">
                <p className="preco">R${produto.preco.toFixed(2)}</p>
                <button className="btn">+</button>
            </div>
        </div>
    )
};