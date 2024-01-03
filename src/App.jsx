import { Button, Container, Image, Stack } from 'react-bootstrap';
import jeff from './assets/jeff.png';
import skittles from './assets/skittles.png';
import mm from './assets/mm.png';
import snickers from './assets/snickers.png';
import vendingMachine from './assets/vending.svg';

import './App.css';
// import backgroundImage from '/src/assets/sa-background.jpg';

function App() {
	return (
		<>
			<div style={{ width: 100, zIndex: 3, marginLeft: '-50px', position: 'absolute', right: 60, top: 250}}>
				<Stack direction='vertical' gap={3}>
					<Button>Skittles</Button>
					<Button>M&M's</Button>
					<Button>Snickers</Button>
				</Stack>
			</div>
			<Image
				src={vendingMachine}
				width={300}
				style={{
          zIndex: 0,
          position: 'absolute',
          bottom: 0,
          right: 100

				}}
			/>
		
		</>
	);
}

export default App;
