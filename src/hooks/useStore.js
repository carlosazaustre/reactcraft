import { create } from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
	texture: "dirt",
	cubes: [
		{
			key: nanoid(),
			pos: [2, 0, 0],
			texture: "dirt",
		},
		{
			key: nanoid(),
			pos: [1, 0, 0],
			texture: "glass",
		},
		{
			key: nanoid(),
			pos: [3, 0, 0],
			texture: "wood",
		},
		{
			key: nanoid(),
			pos: [4, 0, 0],
			texture: "log",
		},
	],
	addCube: (x, y, z) => {
		set((prev) => ({
			cubes: [
				...prev.cubes,
				{
					key: nanoid(),
					pos: [x, y, z],
					texture: prev.texture,
				},
			],
		}));
	},
	removeCube: () => {},
	setTexture: () => {},
	saveWorld: () => {},
	resetWorld: () => {},
}));
