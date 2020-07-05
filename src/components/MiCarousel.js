import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import TituloImg from '../images/portada.png'
import ImgAnimaciones from '../images/imgAnimaciones.png'
import ImgLibros from '../images/imgLibros.png'

function MiCarousel(){
    const [index, setIdex] = useState(0)
   

    const handleSelect = (selectIndex, e)=>{
        setIdex(selectIndex)
    }

    
    return (
        
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={TituloImg}
              // alt="First slide"
              />
            
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
        </Carousel>
              
      );
      
}


export default MiCarousel