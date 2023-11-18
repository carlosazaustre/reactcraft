import { Canvas } from "@react-three/fiber";
import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";
import { Menu } from "./components/Menu";

function App() {
	return (
		<>
			<VRButton />
			<Canvas>
				<XR>
					<Sky sunPosition={[100, 100, 20]} />
					<ambientLight intensity={1.1} />
					<FPV />
					<Controllers />
					<Hands />
					<Physics>
						<Player />
						<Cubes />
						<Ground />
					</Physics>
				</XR>
			</Canvas>
			<div className="absolute centered cursor">+</div>
			<TextureSelector />
			<Menu />
		</>
	);
}

export default App;
