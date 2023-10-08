import { useState } from "react";
import { useBox } from "@react-three/cannon";
import { useStore } from "../hooks/useStore";
import * as textures from "../images/textures";

export const Cube = ({ position, texture }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [ref] = useBox(() => ({
		type: "Static",
		position,
	}));
	const [addCube, removeCube] = useStore((state) => [
		state.addCube,
		state.removeCube,
	]);

	const activeTexture = textures[texture + "Texture"];

	const handleOnPointerMove = (e) => {
		e.stopPropagation();
		setIsHovered(true);
	};

	const handleOnPointerOut = (e) => {
		e.stopPropagation();
		setIsHovered(false);
	};

	const handleClick = (e) => {
		e.stopPropagation();
		const clickedFace = Math.floor(e.faceIndex / 2);
		const { x, y, z } = ref.current.position;
		if (e.altKey) {
			removeCube(x, y, z);
			return;
		} else if (clickedFace === 0) {
			addCube(x + 1, y, z);
			return;
		} else if (clickedFace === 1) {
			addCube(x - 1, y, z);
			return;
		} else if (clickedFace === 2) {
			addCube(x, y + 1, z);
			return;
		} else if (clickedFace === 3) {
			addCube(x, y - 1, z);
			return;
		} else if (clickedFace === 4) {
			addCube(x, y, z + 1);
			return;
		} else if (clickedFace === 5) {
			addCube(x, y, z - 1);
			return;
		}
	};

	return (
		<mesh
			onPointerMove={handleOnPointerMove}
			onPointerOut={handleOnPointerOut}
			onClick={handleClick}
			ref={ref}
		>
			<boxGeometry attach="geometry" />
			<meshStandardMaterial
				color={isHovered ? "grey" : "white"}
				transparent={true}
				opacity={texture === "glass" ? 0.6 : 1}
				map={activeTexture}
				attach="material"
			/>
		</mesh>
	);
};
