import React, { Component } from 'react';
import InfoBox from '../Custom/InfoBox';

import uuid from 'uuid';

class Cita extends Component {
    state = {
        titulo: 'Cita',
        cita: {
            nombreMascota: '',
            nombreDuenho: '',
            fechaHora: '',
            edadMascota: '',
            observaciones: ''
        },
        isError: false
    }

    handleChange = e => {
        // almacena en estado cada valor guardando copia de
        // los que no estan siendo modificados, identificandolos
        // por propiedad name, se dispara al cambiar en
        // el componente
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        
        const { nombreMascota, nombreDuenho, fechaHora, edadMascota, observaciones } = this.state.cita

        if(nombreMascota === '' ||
           nombreDuenho === '' ||
           fechaHora === '' ||
           edadMascota === '' ||
           observaciones === '' ) {
               this.setState({
                   isError: true
               })
        }

        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid()

        this.props.crearNuevaCita(nuevaCita)
    }

    render() {
        const {isError} = this.state

        return (
            <div>
                <h2>{this.state.titulo}</h2>
                <form onSubmit={this.handleSubmit}>
                { isError ? 
                    <InfoBox content="Debe completar todos los datos" type="error" />
                : null }
                    <div className="row my-2">
                        <div className="cell-md-12">
                            <div className="form-group">
                                <label>Nombre de Mascota</label>
                                <input 
                                    type="text"
                                    name="nombreMascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.nombreMascota}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="cell-md-12">
                            <div className="form-group">
                                <label>Nombre del dueño</label>
                                <input 
                                    type="text"
                                    name="nombreDuenho"
                                    onChange={this.handleChange}
                                    value={this.state.cita.nombreDuenho}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="cell-md-6">
                            <div className="form-group">
                                <label>Fecha / Hora</label>
                                <input 
                                    type="datetime-local"
                                    name="fechaHora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fechaHora}
                                />
                            </div>
                        </div>
                        <div className="cell-md-6">
                            <div className="form-group">
                                <label>Edad</label>
                                <input 
                                    type="number"
                                    name="edadMascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.edadMascota}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="cell-md-12">
                            <div className="form-group">
                                <label>Observaciones / sintomas</label>
                                <textarea
                                    data-role="textarea"
                                    className="mb-1"
                                    name="observaciones"
                                    onChange={this.handleChange}
                                    value={this.state.cita.observaciones}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="cell-12">
                            <button 
                                type="submit"
                                className="button primary"
                            >
                                <span className="mif-floppy-disk pr-2"></span>
                                Registrar cita
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Cita;