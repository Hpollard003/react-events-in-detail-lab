// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    coorsButtton = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    }
    render() {
        return <button onClick={this.coorsButtton}>Coordinates</button>
    }

}

export default CoordinatesButton