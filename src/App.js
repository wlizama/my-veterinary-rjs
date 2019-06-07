import React, { Component } from 'react';
import './styles/metro-4.2.43/css/metro-all.min.css';
import Header from "./components/Header"
import Cita from "./components/Cita"
import SimpleTable from './components/Custom/SimpleTable';


class App extends Component {
	
	state = {
		citas : []
	}
	
	tableConfig = {
		columns: [
			{ field: "nombreMascota", title: "Nombre Mascota" },
			{ field: "edadMascota", title: "Edad Mascota" },
			{ field: "fechaHora", title: "Fecha Ingreso" },
			{ field: "nombreDuenho", title: "Nombre Dueño" },
			{ field: "observaciones", title: "Observaciones" },
		],
		messages: {
			emptyData: "No hay mascotas registradas"
		}
	}

	crearNuevaCita = datos => {
		const citas = [...this.state.citas, datos]

		this.setState({
			citas
		})
	}

	componentDidMount = () => {
		const citasLS = localStorage.getItem('citas')
		if(citasLS) {
			this.setState({
				citas: JSON.parse(citasLS)
			})
		}
	}

	componentDidUpdate = () => {
		localStorage.setItem('citas', JSON.stringify(this.state.citas))
	}
	
	render() {
		return (
			<div className="container-fluid">
				<div className="grid">
					<div className="row">
						<div className="cell-lg-8 offset-lg-2 cell-md-10 offset-md-1">
							<Header titulo="My Veterinary 🐱‍🐉"></Header>
							<Cita crearNuevaCita={this.crearNuevaCita} />
							<SimpleTable config={this.tableConfig} dataSource={this.state.citas} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
