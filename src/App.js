import React, { Component } from 'react';
import './styles/metro-4.2.43/css/metro-all.min.css';
import Header from "./components/Header"
import Cita from "./components/Cita"
import SimpleTable from './components/Custom/SimpleTable';


class App extends Component {
	
	state = {
		citas : []
	}
	
	tableColumnsConfig = [
		{ field: "nombreMascota", title: "Nombre Mascota" },
		{ field: "edadMascota", title: "Edad Mascota" },
		{ field: "fechaHora", title: "Fecha Ingreso" },
		{ field: "nombreDuenho", title: "Nombre Dueño" },
		{ field: "observaciones", title: "Observaciones" },
		{ field: "observaciones", title: "Observaciones" },
	]

	crearNuevaCita = datos => {
		const citas = [...this.state.citas, datos]

		this.setState({
			citas
		})
	}
	
	render() {
		return (
			<div className="container-fluid">
				<div className="grid">
					<div className="row">
						<div className="cell-lg-8 offset-lg-2 cell-md-10 offset-md-1">
							<Header titulo="My Veterinary 🐱‍🐉"></Header>
							<Cita crearNuevaCita={this.crearNuevaCita} />
							<SimpleTable columns={this.tableColumnsConfig} dataSource={this.state.citas} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
