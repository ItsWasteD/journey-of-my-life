import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Panel from "./Panel";
import "./map.css";
import { images } from "../assets/assets";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Main() {
	/*useGSAP(() => {
		gsap.set("#cross", { yPercent: "+=20" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#cross",
				markers: true,
				start: "center 20%",
				end: "top",
				scrub: 1,
				pin: true,
				//anticipatePin: 1,
			},
		});

		tl.to("#cross", {
			x: "-30vw",
			duration: 2,
			ease: "power1.in",
		})
			.to("#cross", { x: "30vw", duration: 3, ease: "back.inOut" })
			.to("#cross", { x: 0, duration: 2, ease: "power1.out" });
	});*/

	type ImageName = keyof typeof images;

	const panels = Object.entries(images).map(
		([name, { src, title }], index) => (
			<Panel
				key={name}
				imageName={src as ImageName}
				title={title}
				index={index}
			/>
		)
	);

	return (
		<>
			<div id="map">
				{/*<img
					id="cross"
					src="src/assets/cross.png"
					width={50}
					height={50}
					style={{
						transform: `rotate(${Math.random() * 90}deg)`,
					}}
				/>*/}
				{panels}
				<div
					style={{
						height: "20vh",
						backgroundColor: "rgba(0,0,0,0.5)",
					}}
				></div>
			</div>
		</>
	);
}
