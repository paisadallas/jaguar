import React from 'react'
//import Pagination from 'react-bootstrap/Pagination'
import JaguarSite from './JaguarSite.js'
import '../styles/Pagination.css'
//--- Libros ---
import libro1 from '../images/Libros/WejxiaUus/portada.png'
import libro2 from '../images/Libros/CartillasNasa/portada.png'
import libro3 from '../images/Libros/NasaYuwePrimerosPasos/portada.png'


import LibrosIlustrados from './LibrosIlustados.js'
import { Container, Pagination } from 'react-bootstrap'
import '../styles/Head.css'

class MoreImages extends React.Component{

    constructor(props){
        super(props)
        this.state={
            libro1State:libro1,
            libro2State:libro2,
            libro3State:libro3,
            enableLibros:false,
            enable:false
        }
    }


    changeImages = e=>{
        console.log('HOLA MOREIMAGES')
      

        this.setState({ 
            enableLibros:true,
            img2:libro2,
            img3:libro3,
            img1:libro1})
            
            
              
    }
    

    render(){

        const enableBox = this.props.enable
        if(enableBox== true)
        {
            return(
    
                <Container fluid >
    
    
                <LibrosIlustrados
                name="Head__center-image"
                name2="Head__center-image"
                 enable = {this.state.enableLibros}
                img1={this.state.libro1State}
                img2={this.state.libro2State}
           
                
                
                />
                <Pagination size="lg" className = "Pagination">
                    <Pagination.Item onClick={this.changeImages} >{'more'}</Pagination.Item>
                    
                </Pagination>
                </Container>
            )
        }
        return null
    }
}

export default MoreImages