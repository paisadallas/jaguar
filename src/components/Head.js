import React from 'react'

import logo from '../images/titulo.png'
import portada from '../images/portada.png'
import Buttons4 from './Buttons4'
import ButtonsMenu from './ButtonsMenu'
import Nav from './Nav'
import '../styles/Head.css'
import Image from 'react-bootstrap/Image'
import {Container,Row,Col} from 'react-bootstrap'

class Head extends React.Component{
    render(){
        return (
            <React.Fragment>
               <Container  >
                    {/* <Row >
                        <Image className="Head__center-image" src= {logo} />
                    </Row>
                    <Row className= "Head__nav">
                        <Buttons4/>
                    </Row> */}

                    <Row >
                        <ButtonsMenu/>
                    </Row>

                    {/* <Row >
                        <Image className="Head__center-image" src= {portada} />
                    </Row> */}
                </Container>              

            </React.Fragment>
            
        )
    }
}

export default Head 