import React from 'react'

function Hand(props){
    const fingers = [];
    const colors = ['#ED1C24', '#FF7F27', '#FFF200', '#22B14C', '#00A2E8', '#00A2E8', '#A349A4', '#C8BFE7', '#7092BE', '#B5E61D'];
    console.log(props.currentFinger)
    const selectedFinger = (props.offset ? (props.currentFinger - props.offset) : props.currentFinger);
    for (let index = 0; index < 5; index++) {
        fingers.push(<Finger key={index} enabled={selectedFinger === index} enabledColor={colors[props.currentFinger]}/>);
    }

    return (
        <div style={props.style}>
            <div style={{display: 'inline-flex'}}>
                {fingers}
            </div>
        </div>
        
    )

}


function Finger(props){
    return (<div style={
        {
            backgroundColor: props.enabled ? props.enabledColor : 'gray',
            width: '50pt',
            height: '50pt',
            margin: '5pt'
        }
    }/>)
    
}


export { Hand }