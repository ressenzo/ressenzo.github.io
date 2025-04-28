import { useState } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import './App.css';

export default function App() {

	const [param] = useState(new URLSearchParams(window.location.search));
	const language = param.toString().substring(2);

	return (
		<div className="container">
			<header className="app-header mx-auto">
				<div className="pt-3 pb-5">
					<Header language={language} />
				</div>
			</header>

			<main className="app-content mx-auto">
				<div className="p-1 pb-md-4 mx-auto">
					<Main language={language} />
				</div>
			</main>
		</div>
	);
}
