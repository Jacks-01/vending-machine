import { Alert, Button, Container, Image, Stack } from 'react-bootstrap';
import jeff from './assets/jeff.png';
import skittles from './assets/skittles.png';
import mm from './assets/mm.png';
import snickers from './assets/snickers.png';
import vendingMachine from './assets/vending.svg';

import './App.css';
import { useState } from 'react';

const candyArray = [
	{
		name: 'Snickers',
		price: 1,
		src: snickers,
	},
	{
		name: 'Skittles',
		price: 2,
		src: skittles,
	},
	{
		name: 'Mini M&M',
		price: 1.5,
		src: mm,
	},
];

function App() {
	const [dispensedCandy, setDispensedCandy] = useState();
	const [inputCandy, setInputCandy] = useState();

	const [inputMoney, setInputMoney] = useState();
	const [returnChange, setReturnChange] = useState();
	const [message, setMessage] = useState();

	const vendingSubmitHandler = () => {
		setMessage(undefined);
		vendingMachineHandler(inputCandy, inputMoney);
	};

	const vendingMachineHandler = (candyName, price) => {
		console.log(`The requested candy is : ${candyName}`);

		const requestedCandy = candyArray.filter(
			(candy) => candy.name === candyName
		);

		let change = 0;

		if (price > 100) {
			setDispensedCandy(jeff);
			setMessage('Jeffrey Bezos');
			return;
		}

		if (price > requestedCandy[0].price) {
			change = price - requestedCandy[0].price;
			console.log(
				`Dispensed: ${requestedCandy[0].name}, Change: ${change}`
			);
			setDispensedCandy(requestedCandy[0].src);
			setReturnChange(change);
			return;
		}

		if (price === requestedCandy[0].price) {
			console.log(`Dispensed: ${requestedCandy[0].name}`);
			setDispensedCandy(requestedCandy[0].src);
			return;
		}

		console.log('Insuffecient funds');
		setMessage('Insuffecient funds');
		return;
	};

	return (
		<>
			
			<div style={{}}>
			{message && (
				<Alert style={{position: 'absolute', zIndex: 6, width: '80%'}}
					variant={
						message === 'Jeffrey Bezos' ? 'success' : 'danger'
					}>
					<Alert.Heading>{message}</Alert.Heading>
					{message === 'Jeffrey Bezos' ? (
						<Alert.Link
							href='https://www.youtube.com/watch?v=ssbPGD2OqRE'
							target='_blank'>
							{' '}
							🎶 Jeffrey Bezos 🎶{' '}
						</Alert.Link>
					) : (
						<></>
					)}
				</Alert>
			)}
				<div
					style={{
						width: 100,
						zIndex: 3,
						position: 'absolute',
						right: '23%',
						bottom: '15%',
					}}>
					<Stack
						direction='vertical'
						gap={3}>
						<Button onClick={() => setInputCandy('Skittles')}>
							Skittles
						</Button>
						<Button onClick={() => setInputCandy('Mini M&M')}>
							M&M's
						</Button>
						<Button onClick={() => setInputCandy('Snickers')}>
							Snickers
						</Button>
						<input
							type='number'
							step={0.5}
							onChange={(e) =>
								setInputMoney(parseFloat(e.target.value))
							}
						/>
						<Button
							onClick={vendingSubmitHandler}
							style={{ backgroundColor: 'green' }}>
							Dispense
						</Button>
					</Stack>
				</div>

				<Image
					src={vendingMachine}
					width={300}
					style={{
						zIndex: 0,
						position: 'absolute',
						bottom: '0%',
						right: '25%',
					}}
				/>

				{dispensedCandy !== '' && (
					<Image
						src={dispensedCandy}
						style={{
							position: 'absolute',
							zIndex: 5,
							bottom: '2%',
							right: '28%',
							width: 200,
							height: 150,
						}}
					/>
				)}
			</div>
		</>
	);
}

export default App;
