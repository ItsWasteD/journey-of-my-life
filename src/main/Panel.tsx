import "./panel.css";

export default function Panel({ color, title }) {
	return (
		<div className="content-panel" style={{ backgroundColor: color }}>
			<h2>{title}</h2>
			<p>This is some random content.</p>
		</div>
	);
}
