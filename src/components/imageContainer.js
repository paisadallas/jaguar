import React from 'react'
import '../styles/Head.css'
import Image1 from '../images/cuento1.png'
import { Container,Image } from 'react-bootstrap'

class imageContainer extends React.Component{
    constructor(props){
        super(props)
            this.state={
                enable:false,
                imag1: Image1
            }
        
    }

    render(){
        const enableBox = this.props.enable

        if(enableBox== true){

            return (
                <Container fluid>
                    <Image  className = "Head__center-image"  src = {this.props.img1} />
                </Container>
            )

        }

        return null

    }

}

export default imageContainer