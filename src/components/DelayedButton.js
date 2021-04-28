// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component{
    render(){
        return(
            <button onClick={this.clickHandler}>
                delayedButton
            </button>
        )
    }

    clickHandler = event =>{
        console.log(event)
        event.persist()
        setTimeout(()=>this.props.onDelayedClick(event), this.props.delay)
    }
}
