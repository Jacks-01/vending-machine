import { Alert, Button, Container, Form, Image, Stack } from 'react-bootstrap';
import jeff from './assets/jeff.png';
import skittles from './assets/skittles.png';
import mm from './assets/mm.png';
import snickers from './assets/snickers.png';
import vendingMachine from './assets/vending.svg';
import sourcelogo from './assets/sourcelogo.jpg';

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
			{message && 
				<Alert variant='danger'>
					<Alert.Heading>{message}</Alert.Heading>
				</Alert>
			}

			<div
				style={{
					width: 100,
					zIndex: 3,
					marginLeft: '-50px',
					position: 'absolute',
					right: 60,
					top: 250,
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
				rounded
				src={sourcelogo}
				style={{
					width: 60,
					position: 'absolute',
					right: 220,
					top: 130,
					zIndex: 3,
				}}
			/>
			<Image
				src={vendingMachine}
				width={300}
				style={{
					zIndex: 0,
					position: 'absolute',
					bottom: 0,
					right: 100,
				}}
			/>

			{dispensedCandy !== '' && (
				<Image
					src={dispensedCandy}
					style={{
						position: 'absolute',
						zIndex: 5,
						bottom: 15,
						right: 160,
						width: 200,
						height: 150,
					}}
				/>
			)}
		</>
	);
}

export default App;
