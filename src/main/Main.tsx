import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Panel from "./Panel";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Main() {
	const container = useRef(null);

	useGSAP(
		() => {
			gsap.to("div:nth-child(odd)", { x: -500 });
			gsap.to("div:nth-child(even)", { x: 500 });
		},
		{ scope: container }
	);

	return (
		<>
			<div style={{ overflow: "hidden" }} ref={container}>
				<div>Stop 1 Left</div>
				<div>Stop 2 Right</div>
				<div>Stop 3 Left</div>
				<div>Stop 4 Right</div>
			</div>
			<Panel color={"green"} title={"First"} />
			<Panel color={"red"} title={"Second"} />
		</>
	);
}
