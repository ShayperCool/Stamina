import React from 'react'
import { StaminaButton } from './staminaButton';
import {Hand} from './hand'

class Game extends React.Component{

    constructor(props){
        super(props);
        this.characters = "abcdefghijklmnopqrstuvwxyz";
        const character = this.getRandomCharacter();
        this.colors = ['#ED1C24', '#FF7F27', '#FFF200', '#22B14C', '#00A2E8', '#00A2E8', '#A349A4', '#C8BFE7', '#7092BE', '#B5E61D'];
        this.state = {
            character: character,
            finger: this.getFinger(character)
        };
        
    }

    onSolved(){
        const character = this.getRandomCharacter();
        this.setState({
            character: character,
            finger: this.getFinger(character)
        })
    }

    getRandomCharacter(){
        return this.characters[Math.floor(Math.random() * this.characters.length)]
    }

    getFinger(character){
        const map = {
            '`qa' : 0,
            '@!12wsz' : 1,
            '#$34edx' : 2,
            '%^56rfcvgtb' : 3,
            ' ' : 4,
            '&7yuhjnm' : 6,
            '*(89ik,' : 7,
            ')0ol>' : 8,
            '-=_+p[]{};\'>.?/' : 9
        };
        for(const [key, value] of Object.entries(map)){
            if(key.includes(character)){
                return value;
            }
        }
        return 0;
    }

    getColor(finger){
        return this.colors[finger];
    }

    render(){
        return (
            <div>
                <Hand style={{
                    top: '50%',
                    left: '1%',
                    position: 'absolute'
                }} currentFinger={this.state.finger}/>
                <Hand style={{
                    top: '50%',
                    right: '1%',
                    position: 'absolute'
                }
                } offset={5} currentFinger={this.state.finger}/>
                <div style={
                {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }
                }>
                    <StaminaButton color={this.getColor(this.state.finger)} onSolved={() => this.onSolved()} character={this.state.character}/>
                </div>
            </div>

            
        
        )
    }

}

export {Game}