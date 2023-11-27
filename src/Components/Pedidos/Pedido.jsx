import "./styles/pedidoStyle.css";

export default function Pedidos({ pedido }) {
	return (
		<div className="itemPedido">
			<img src={pedido.img} alt={pedido.desc}/>
			<span>{pedido.nome}</span>
		</div>
	)
}