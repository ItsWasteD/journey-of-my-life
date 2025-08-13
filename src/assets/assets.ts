import cross from "./cross.png";
import treasureMap from "./treasure_map_1.jpg";
import image1 from "./fuji.jpg";

export const images = {
	cross: { src: cross, title: "This is red cross" },
	treasureMap: { src: treasureMap, title: "Treasure win" },
	image1: { src: image1, title: "Fujihima" },
} as const;
