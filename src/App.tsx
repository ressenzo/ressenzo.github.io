import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';

export default function App() {

	const [param, _] = useState(new URLSearchParams(window.location.search));

	return (
		<>
			<Skills language={param.toString().substring(2)} />
			<Main language={param.toString().substring(2)} />
		</>
	);
}
