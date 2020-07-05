import React, { useReducer } from 'react'

import miButton, {Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import TituloImg from '../images/Logo.png'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
import MiCarousel from './MiCarousel.js'


class JaguarSite extends React.Component{
    
    handleClick = e =>{
        console.log('Button was click')
    }

    handleSubmit = e =>{
        e.preventDefault()
        console.log('Form was submitted')
    }

    render(){

       var user = {
            name: "Anna",
            hobbies: ["Sports"]
        }

        return(

        
            <Container fluid>
                
                <Row>
                    <Col ></Col>
                    <Col xs="auto">
                        <Image  src = {TituloImg}/>                    
                    </Col>  
                    <Col></Col>                 
                </Row>

                <br/>

                <Row>
                    <Col ></Col>
                    <Col xs="auto">
                            <h1>Jaguar</h1>              
                    </Col>  
                    <Col></Col> 
                </Row>
                <Row>
                    <Col ></Col>
                    <Col xs="auto">
                            <h2>Taller grafico</h2>              
                    </Col>  
                    <Col></Col> 
                </Row>
                
                <br/>
                <Nav justify variant="tabs" defaultActiveKey="/">

                    <Nav.Item >
                        <Nav.Link  onClick={this.handleClick}
                         xs = {8} 
                         >Quienes somos
                         </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Que hacemos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Realizacion</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Contacto</Nav.Link>
                    </Nav.Item>
                    
                 </Nav>
                <div>
                 <MiCarousel name={"John"} age = {28} user={user}/>
                 {/* <MiCarousel/> */}

                </div>

                 <br/>

                 <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link xs = {8} href="/home">Cuentos ilustrados</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Libros educativos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Afiches</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3">Murales</Nav.Link>
                    </Nav.Item>
                    
                 </Nav>

                 <Nav justify variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link xs = {8} href="/home">Juegos didacticos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Animaciones</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Estampados</Nav.Link>
                    </Nav.Item>                    
                    
                 </Nav>

                
            </Container>

        )
    }
}

export default JaguarSite