import React from 'react'

import logo from '../images/titulo.png'
import Buttons4 from './Buttons4'
import '../styles/Head.css'
class Head extends React.Component{
    render(){
        return (
            <div >
                <img className = "Head__center" src={logo} alt="Logo image"/>   
                <Buttons4></Buttons4>            
            </div>
            
        )
    }
}

export default Head 