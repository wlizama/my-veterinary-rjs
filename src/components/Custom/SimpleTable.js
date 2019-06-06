import React, { Component } from 'react';

class SimpleTable extends Component {
    state = {
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        {this.props.columns.map((column, indx) => 
                            <th key={indx} >{column.title}</th>
                        )}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dataSource.map((dataRow, indxR) => 
                        <tr key={indxR}>
                            {this.props.columns.map((column, indxC) =>
                            <td key={indxC}>{dataRow[column.field]}</td>
                            )}
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SimpleTable;