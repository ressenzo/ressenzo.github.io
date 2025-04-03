import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Skills from './components/Skills';

export default function App() {

	const [param, _] = useState(new URLSearchParams(window.location.search));

	return (
		<div className="App">
				<Skills language={param.toString().substring(2)} />
				<Main language={param.toString().substring(2)} />
		</div>
	);
}
