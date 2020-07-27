import React from 'react'
import { Carousel } from 'react-bootstrap'
import TituloImg from '../images/portada.png'
import ImgAnimaciones from '../images/imgAnimaciones.png'
import ImgLibros from '../images/imgLibros.png'

class Carousel2 extends React.Component{
    render(){
        return(
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={TituloImg}
                // alt="First slide"
                />
               <h3>{this.props.name}</h3>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgAnimaciones}
                // alt="Second slide"
                />
      
             
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ImgLibros}
                // alt="Third slide"
                />
      
            </Carousel.Item>
          </Carousel>)
    }


}

export default Carousel2