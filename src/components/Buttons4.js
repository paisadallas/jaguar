import React from 'react'
import miButton, { ButtonGroup } from 'react-bootstrap'
import myButton from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import '../styles/Button.css'
import '../styles/Head.css'
class Buttons4 extends React.Component{
    render(){
        return( 
            < >                   
                 <Nav  fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Quienes somos</Nav.Link>
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
            </>
  
        )
    }
}

export default Buttons4