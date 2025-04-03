import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Skills from './components/Skills';

export default function App() {

	const [param, setParam] = useState(new URLSearchParams(window.location.search));

	return (
		<div className="App">
				{param}
				<Skills language='pt' />
				<Main />
		</div>
	);
}
