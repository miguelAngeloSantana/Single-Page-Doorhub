import "./styles/post.css";

export default function Post({ post }) {
	return (
		<article>
			<div className="img-part">
				<img src={post.img} alt={post.desc}/>
			</div>

			<div className="info-post">
				<h4>{post.title}</h4>
				<p>{post.desc}</p>
			</div>

			<div className="link">
				<span>Leia mais</span>
				<span>-></span>
			</div>
		</article>
	)
}