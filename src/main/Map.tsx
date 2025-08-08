import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Panel from "./Panel";
import "./map.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Main() {
	const container = useRef(null);

	useGSAP(() => {
		gsap.set("#cross", { yPercent: "+=20" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#cross",
				markers: true,
				start: "center 20%",
				end: "1000vw top",
				scrub: 1,
				pin: true,
				anticipatePin: 1,
			},
		});

		tl.to("#cross", {
			x: "-30vw",
			duration: 2,
			ease: "power1.in",
		})
			.to("#cross", { x: "30vw", duration: 3, ease: "back.inOut" })
			.to("#cross", { x: 0, duration: 2, ease: "power1.out" });
	});

	return (
		<>
			<div id="map">
				<img
					id="cross"
					src="src/assets/cross.png"
					width={50}
					height={50}
					style={{
						transform: `rotate(${Math.random() * 90}deg)`,
					}}
				/>
				{/*}<Panel color={"green"} title={"First"} />
				<Panel color={"red"} title={"Second"} />{*/}
			</div>
		</>
	);
}
