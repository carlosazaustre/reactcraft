import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";

function App() {
	return (
		<>
			<Canvas>
				<Sky sunPosition={[100, 100, 20]} />
				<ambientLight intensity={0.5} />
				<Physics>
					<Player />
					<Ground />
				</Physics>
			</Canvas>
		</>
	);
}

export default App;
