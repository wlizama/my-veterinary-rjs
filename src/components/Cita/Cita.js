import React, { Component } from 'react';

class Cita extends Component {
    state = {
        titulo: "Cita"
    }

    render() {
        return (
            <div>
                <h2>{this.state.titulo}</h2>
                <form>
                    <div className="row my-2">
                        <div className="cell-md-12">
                            <div className="form-group">
                                <label>Nombre de Mascota</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="cell-md-12">
                            <div className="form-group">
                                <label>Nombre del dueño</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="cell-md-6">
                            <div className="form-group">
                                <label>Fecha / Hora</label>
                                <input type="datetime-local" />
                            </div>
                        </div>
                        <div className="cell-md-6">
                            <div className="form-group">
                                <label>Edad</label>
                                <input type="number" />
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="cell-md-12">
                            <div className="form-group">
                                <label>Observaciones / sintomas</label>
                                <textarea data-role="textarea" className="mb-1"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="cell">
                            <button type="submit" className="button primary">Registrar cita</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Cita;