import { NavLink } from "react-router";
import "./navbar.css";

const pages = ["Home", "Nina", "Devi", "Other"];

export default function Navbar() {
	return (
		<nav>
			<ul>
				{pages.map((page) => (
					<li key={page}>
						<NavLink to={"/" + page.toLowerCase()}>{page}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
