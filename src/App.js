import React, { Component } from 'react';
import './styles/metro-4.2.43/css/metro-all.min.css';
import Header from "./components/Header"
import Cita from "./components/Cita"


class App extends Component {

	state = {
		citas : []
	}

	crearNuevaCita = datos => {
		const citas = [...this.state.citas, datos]

		this.setState({
			citas
		})
	}

	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="grid">
						<div className="row">
							<div className="cell-lg-8 offset-lg-2 cell-md-10 offset-md-1">
								<Header titulo="My Veterinary 🐱‍🐉"></Header>
								<Cita crearNuevaCita={this.crearNuevaCita} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
