import React from 'react';
import './styles/metro-4.2.43/css/metro-all.min.css';
// import './styles/metro-4.2.43/css/metro-icons.min.css';
import Header from "./components/Header"
import Cita from "./components/Cita"

function App() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="cell-lg-8 offset-lg-2 cell-md-10 offset-md-1">
					<Header titulo="My Veterinary 🐱‍🐉"></Header>
					<Cita />
				</div>
			</div>
		</div>
	)
}

export default App;
