import "./panel.css";

export default function Panel({
	color,
	title,
}: {
	color: string;
	title: string;
}) {
	return (
		<div className="content-panel" style={{ backgroundColor: color }}>
			<h2>{title}</h2>
			<p>This is some random content.</p>
		</div>
	);
}
