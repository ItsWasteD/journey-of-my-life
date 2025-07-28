import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Panel from "./Panel";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Main() {
	const container = useRef(null);

	useGSAP(() => {}, { scope: container });

	return (
		<>
			<div ref={container}>
				<Panel color={"green"} title={"First"} />
				<Panel color={"red"} title={"Second"} />
			</div>
		</>
	);
}
