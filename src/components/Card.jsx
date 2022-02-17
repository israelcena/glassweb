export default function Card({ img, alt, title, version, percentage }) {
	return (
		<div className="card">
			<img src={img} alt={alt} />
			<div className="card-info">
				<h2>{title}</h2>
				<p>{version}</p>
				{/* <div className="progress"></div> */}
			</div>
			<h2 className="percentage">{percentage}</h2>
		</div>
	);
}
