import "./panel.css";
import { images } from "../assets/assets";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Panel({
	imageName,
	title,
	index,
}: {
	imageName: keyof typeof images;
	title?: string;
	index: number;
}) {
	useGSAP(() => {
		gsap.from(".image-panel:nth-child(0)", {
			scrollTrigger: {
				markers: true,
				trigger: ".image-panel:nth-child(0)",
				scrub: 1,
				anticipatePin: 1,
				start: "-=200 40%",
				end: "-=200 20%",
			},
			y: "100px",
			x: "30vw",
			scale: "0",
		});
	});

	const alignment = index % 2 == 1 ? "flex-end" : "flex-start";

	return (
		<div className="image-panel" style={{ alignSelf: alignment }}>
			<h2>{title}</h2>
			<img src={imageName} style={{ width: "100%" }} />
		</div>
	);
}
