import React from 'react'

import Head from '../components/Head'
import ButtonsMenu from '../components/ButtonsMenu'
import JaguarSite from '../components/JaguarSite'
import '../styles/Head.css'


class Inicio extends React.Component{
    render(){
        return(
            <div className ="Head__background">
                <JaguarSite/>
            </div>
        )
    }
}

export default Inicio