import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SimpleTable extends Component {
    state = {
    }

    render() {

        const {columns, messages} = this.props.config
        const {dataSource} = this.props

        return (
            <div>
                {dataSource.length > 0 ?
                <table className="table">
                    <thead>
                        <tr>
                        {columns.map((column, indx) => 
                            <th key={indx} >{column.title}</th>
                        )}
                        </tr>
                    </thead>
                    <tbody>
                        {dataSource.map((dataRow, indxR) => 
                        <tr key={indxR}>
                            {columns.map((column, indxC) =>
                            <td key={indxC}>{dataRow[column.field]}</td>
                            )}
                        </tr>
                        )}
                    </tbody>
                </table>
                :
                <h2>{messages.emptyData}</h2>
                }
            </div>
        );
    }
}


SimpleTable.propTypes = {
    config : PropTypes.object.isRequired,
    dataSource : PropTypes.array.isRequired
}


export default SimpleTable;