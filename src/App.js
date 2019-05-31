import React from 'react';
import './styles/metro-4.2.43/css/metro-all.min.css';
import Header from "./components/Header"
import Cita from "./components/Cita"

function App() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="cell-md-6 offset-3">
					<Header titulo="My Veterinary 🐱‍🐉"></Header>
					<Cita />
				</div>
			</div>
		</div>
	)
}

export default App;
