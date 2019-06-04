import React, { Component } from 'react';

class InfoBox extends Component {
    state = {
        tipoInfoBox: {
            "warning" : { bgColor: "yellow", fgColor: "black" },
            "info" : { bgColor: "cyan", fgColor: "white" },
            "error" : { bgColor: "lightRed", fgColor: "white" },
        }
    }

    render() {

        const {bgColor, fgColor} = this.state.tipoInfoBox[this.props.type]

        return (
            <div className={`info-box w-100 bg-${bgColor} fg-${fgColor}`}>
                <div className="info-box-content">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default InfoBox;