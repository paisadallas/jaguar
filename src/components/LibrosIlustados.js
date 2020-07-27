import React from 'react'
import { Container, Row, Col,Image } from 'react-bootstrap'
import MoreImages from './MoreImages'
import ImageConainer from './imageContainer.js'
import Image1 from '../images/cuento1.png'
import '../styles/Head.css'
import imageContainer from './imageContainer.js'

class LibrosIlustrados extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            enable:false,
            enablePagination:false,
            Image1:Image1,
            name: null,
            name2:null
        }   
    }



    render(){
      
        const enableBox = this.props.enable

        if(enableBox== true){        

        return(
            <Container fluid >                

                <Row >
                    <Col md = {2}></Col>
                    <Col xs={12} md={4} > 
                      
                         <Image  className = {this.props.name} 

                         src = {this.props.img1} />              
                   
                    </Col>
                   
                    <Col xs={12} md={4}> 
                     <Image className = {this.props.name2} src = {this.props.img2} />   
                    </Col>
                    <Col md = {2}></Col>
                </Row>       

                
                <Row>

                <MoreImages
                    enable = {this.props.enablePagination}
                    libro1 = {this.state.img1}
                    name = "Head__center-image"
              />

                </Row>
              
            </Container>
        )


     }

     return null
    }
}

export default LibrosIlustrados