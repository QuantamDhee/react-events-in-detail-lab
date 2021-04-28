// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component{
    render(){
        return (
            <button onClick={this.clickHandler}>
                coordinatesButton
            </button>
        )
    }

    clickHandler = event =>{
        let position = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(position)

    }
}