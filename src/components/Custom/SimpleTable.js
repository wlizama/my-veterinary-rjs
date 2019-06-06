import React, { Component } from 'react';
import PropTypes from 'prop-types'

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


SimpleTable.propTypes = {
    columns : PropTypes.array.isRequired,
    dataSource : PropTypes.array.isRequired
}


export default SimpleTable;