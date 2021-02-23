import React from 'react'
import './staminaButton.css'
import Hand from './hand'

class StaminaButton extends React.Component{
    constructor(props){
        super(props);
        this.className = "staminaButton";
        this.callback = props.onSolved;
        this.state = {
            clicked: false
        };
    }


    componentDidMount(){
        this.clickListener = (event) => {
            event = event || window.eventd;
            if(this.props.character != String.fromCharCode(event.keyCode))
                return;
            this.callback();
            this.setState({
                clicked: true,
            })
        }

        document.onkeypress = this.clickListener;
    }

    componentWillUnmount(){
        document.removeEventListener('keypress', this.clickListener, false);
    }

    render(){
        const color = this.props.color;
        return (
            <div
                style={
                    {
                        backgroundColor: color
                    }
                }
                className={this.className + (this.state.clicked ? " pressAnimation" : "")}
                onAnimationEnd={()=> this.setState({clicked: false})}>
                {this.props.character}
            </div>            
        );
    }

}


export {StaminaButton}