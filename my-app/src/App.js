import React from 'react';
import logo from './logo.svg';
import Page from './components/A4Page.js'
import './App.css';
import './A4page.css';

const dataSet1 = [
	{
		name: "Johson",
		amount: 30000,
		sex: 'M',
		is_married: true
	},
	{
		name: "Monika",
		amount: 355000,
		sex: 'F',
		is_married: false
	},
	{
		name: "John",
		amount: 250000,
		sex: 'M',
		is_married: false
	},
	{
		name: "Josef",
		amount: 450500,
		sex: 'M',
		is_married: true
	}
];

const dataSet2 = [
	{
		name: "Johnson",
		total: 25,
		remainig: 16
	},
	{
		name: "Josef",
		total: 25,
		remainig: 7
	}
];

function App() {
	return (
		<Page/>
	);
}

export default App;
