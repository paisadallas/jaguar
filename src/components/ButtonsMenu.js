import React from 'react'
import miButton, { ButtonGroup, Container, Row, Col } from 'react-bootstrap'
import myButton from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import '../styles/Button.css'
import '../styles/Head.css'
import '../styles/Bootstrap.css'
class ButtonsMenu extends React.Component{
    render(){
        return( 
            <Container >
               <Row >
                    <Col xs={12} md = {8} className = "Bootstrap"> 1 of 2</Col> 
                    <Col xs={6} md = {4} className = "Bootstrap"> 2 of 2</Col> 
               </Row> 
               <Row className="justify-content-md-center">
                    <Col xs className = "Bootstrap">first Name</Col>
                    <Col xs={{order:12}} className = "Bootstrap">second name</Col>
                    <Col xs={{order:1}} className = "Bootstrap">thirty name</Col>
               </Row>

               <Row className="justify-content-md-center">
                    <Col xs={{order: 'last'}} className = "Bootstrap">first Name</Col>
                    <Col xs className = "Bootstrap">second name</Col>
                    <Col xs={{order:'first'}} className = "Bootstrap">thirty name</Col>
               </Row>

               <Row >
                    <Col  md = {4} className = "Bootstrap"> md=4</Col> 
                    <Col md={{span:4, offset:4}} className = "Bootstrap"> {`md={{ span: 4, offset: 4 }}`} </Col> 
               </Row>
            </Container>
  
        )
    }
}

export default ButtonsMenu