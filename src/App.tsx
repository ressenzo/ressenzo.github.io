import { useState } from 'react';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import './App.css';

export default function App() {

	const [param, _] = useState(new URLSearchParams(window.location.search));

	return (
		<div className="container">
			<header className="app-header mx-auto">
				<div className="pt-3 pb-5">
					<Skills language={param.toString().substring(2)} />
				</div>
			</header>

			<main className="app-content mx-auto">
				<div className="p-3 pb-md-4 mx-auto border">
					<Main language={param.toString().substring(2)} />
				</div>
			</main>

			{/* <footer className="mt-5 app-footer mx-auto text-center">
				<h6>Made with love by me</h6>
			</footer> */}
		</div>
	);
}
