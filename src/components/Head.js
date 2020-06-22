import React from 'react'

import logo from '../images/titulo.png'
import portada from '../images/portada.png'
import Buttons4 from './Buttons4'
import Nav from './Nav'
import '../styles/Head.css'
class Head extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className ="Heade">
                    <div>
                        <img className = "Head__center-image" src= {logo}/>
                    </div>
                     
                     <div className = "Head__button-center">
                          <button className ="button_1">Quienes somos</button>
                          <button className ="button_2">Que hacemos</button>
                          <button className ="button_3">Realizacion</button>
                          <button className ="button_4">Contacto</button>
                     </div>

                     <div>
                         <img className="Head__center-image" src = {portada}/>
                     </div>
                
                     <div className = "Head__button-center">
                         <button className ="button_5">Cuentos ilustrados</button>
                         <button className ="button_6">Libros educativos</button>
                         <button className ="button_7">Afiches</button>
                         <button className ="button_8">Murales</button> 
                     </div>

                     <div className = "Head__button-center">
                         <button className ="button_9">Juegos dicdaticos</button>
                         <button className ="button_10">Animaciones</button>
                         <button className ="button_11">Estampados</button>
                     </div>
                     
                </div>
              

            </React.Fragment>
            
        )
    }
}

export default Head 