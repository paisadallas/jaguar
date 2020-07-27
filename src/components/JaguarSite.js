import React, { useReducer } from 'react'

import miButton, {Container, Row, Col } from 'react-bootstrap'

//--- Import from Bootstrap -----
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
//Components
import MiCarousel from './MiCarousel.js'
import Carousel2 from './Carousel2'
import QuienesSomos from './QuienesSomos'
import LibrosIlustrados from './LibrosIlustados'
import MoreImages from './MoreImages'
//---- Import images -----
import TituloImg from '../images/Logo.png'
import Image from 'react-bootstrap/Image'
import img1 from '../images/cuento1.png'
//History
import imgCuento1 from '../images/cuento1.png'
import imgCuento2 from '../images/cuento2.png'
import imgCuento3 from '../images/cuento3.png'
import imgCuento4 from '../images/cuento4.png'
import imgCuento5 from '../images/cuento5.png'
import imgCuento6 from '../images/cuento5.png'
//Libros
import libro1 from '../images/libro1.png'
import libro2 from '../images/libro2.png'
import libro3 from '../images/libro3.png'
import libro4 from '../images/libro4.png'
import libro5 from '../images/libro5.png'
import libro6 from '../images/libro6.png'
import libro7 from '../images/Libros/CartillasNasa/portada.png'
import libro8 from '../images/Libros/NasaYuwePrimerosPasos/portada.png'
import libro9 from '../images/Libros/WejxiaUus/portada.png'

//Afiches
import afiche1 from '../images/Afiches/1.png'
import afiche2 from '../images/Afiches/2.png'
import afiche3 from '../images/Afiches/3.png'
import afiche4 from '../images/Afiches/4.png'
import afiche5 from '../images/Afiches/5.png'
import afiche6 from '../images/Afiches/6.png'

class JaguarSite extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            enableLibros : false,
            tittle : null,
            texto: null,
            pagination:false,
            nameClass: "Head__center-image",
            img1:null,
            img2:null,
            img3:null,
            img4:null,
            img5:null,
            img6:null,
            img7:null,
            img8:null,
            img9:null
            
        }
    }

    
    handleClick = e =>{
        console.log('Button was click')
    }

    queHacemos = e =>{
        var texto
        var parrafo
        texto = <h3>Que hacemos?</h3>
        parrafo =<p>
        Imagínense ustedes: Si, estamos en nuestra comunidad y
        queremos hablar de las amenazas de la minería y nos gustaría 
        dejar una enseñanza a los niños y niñas, ¿Qué tal pensarnos 
        un libro con dibujitos, que les guste y que al mismo tiempo 
        los eduque? Si soñamos con fortalecer nuestra cultura,
        ¿No será bueno inventarnos unos estampados para que los 
        jóvenes los lleven en sus camisetas?, o,
        ¿si fuera un mural comunitario?, ¿qué tal una cartilla?

        Está claro que, estos libros, estampados
        o murales, no van a solucionar el problema. Pero,
        ¿No será que nos ponen a hablar de él, que nos ayudan a entenderlo?
        A lo mejor nos movilizan, nos hacen reflexionar, nos inspiran para
        seguir construyendo ese sueño que caminan las comunidades. 

        Junto a diferentes comunidades hemos podido aportar nuestro granito de arena,
        ayudando en la creación y elaboración de estos materiales educativos.
        Los resultados, han sido muy gratos. Aquí se los compartimos. 

        </p>
                
        this.setState({tittle:texto})
        this.setState({texto: parrafo})
       
    }

    quienesSomos = e =>{
        var texto
        var parrafo
        texto = <h3>Quienes somos?</h3>
        parrafo =<p>
            En el taller gráfico Jaguar, somos soñadores. 
            Soñamos con un mundo mejor. Un mundo donde los pueblos, 
            las comunidades, puedan vivir dignamente. Donde todas las 
            culturas convivan en armonía, entre sí y con la tierra.
            Donde todos y todas, podamos vivir sin desigualdades o
            injusticias, vivir con alegría.

            Pero no nos quedamos quietos en la comodidad del sueño. 
            Sabemos que hay mucho camino por recorrer, mucho por hacer,
            para que ese mundo sea una realidad. Por eso, queremos poner
            nuestras manos, al servicio de los pueblos, las comunidades
            y las organizaciones que desde hace mucho tiempo, vienen 
            caminando, luchando y construyendo ese sueño.

            Y por eso, desde hace más de 5 años, hemos puesto al
            servicio lo que también somos: comunicadores, artistas,
            diseñadores gráficos o dibujantes; el nombre es lo de menos.
        </p>
                
        this.setState({tittle:texto})
        this.setState({texto: parrafo})
    }

    realizacion = e =>{
        var texto
        var parrafo
        texto = <h3>¿Cómo lo hacemos?</h3>
        parrafo =<p>
            La idea de crear materiales educativos, es que, 
            enamoren a la gente; que les guste mirarlos, leerlos, 
            escucharlos, que se conviertan en algo que los ponga 
            reflexionar, a preguntarse cosas, que les saque sonrisas y enojos. 

            Y, ¿cómo hacemos esto? Pues fácil: colectivamente.
            Las comunidades, pueblos y organizaciones, vienen recorriendo 
            un camino lleno de experiencias y aprendizajes. 
            Son precisamente éstos los que deberían estar siempre 
            presentes en los materiales educativos; la palabra, la sabiduría y
            la cultura de la gente. 

            Por eso, creeemos que es necesario elaborarlos desde,
            con y para la comunidad. Colectivamente. Sin la participación de la 
            comunidad, los materiales educativos quedan cojos, sin alegría, 
            sin el pensamiento profundo. A través de diferentes actividades,
            conversas, talleres o tulpas, hemos encontrado la forma para que
            ésta creación de todos y todas, sea posible.

        </p>
                
        this.setState({tittle:texto})
        this.setState({texto: parrafo})
    }

    contacto = e =>{
        var texto
        var parrafo
        texto = <h3>Contactos</h3>
        parrafo =<p>
            Hernando Reyes
            <br/>
            Telefono: 310 400 86 00
            <br/>
            Email: nandux10@gmail.com
        </p>
                
        this.setState({tittle:texto})
        this.setState({texto: parrafo})
    }

    handleSubmit = e =>{
        e.preventDefault()
        console.log('Form was submitted')
    }
    //Funtion sent the image of container "Cuentos" 
    imgCuentos = e =>{
        this.setState({enableLibros : true})
        this.setState({img1:imgCuento1})
        this.setState({img2:imgCuento2})
        this.setState({img3:imgCuento3})
        this.setState({img4:imgCuento4})
        this.setState({img5:imgCuento5})
        this.setState({img6:imgCuento6})
        this.setState({img7:null})
        this.setState({img8:null})
        this.setState({img9:null})
        this.setState({pagination:true})
        this.setState({nameClass:null})

        
    }
    //Funtion sent the image of container "Libros educativos" 
    imgLibros = e =>{
        this.setState({enableLibros : true})
        this.setState({img1:libro1})
        this.setState({img2:libro2})
        this.setState({img3:libro3})
        this.setState({img4:libro4})
        this.setState({img5:libro5})
        this.setState({img6:libro6})
        this.setState({img7:libro7})
        this.setState({img8:libro8})
        this.setState({img9:libro9})
        this.setState({pagination:false})
        this.setState({nameClass:"Head__center-image"})
    }
    //Funtion sent the image of container "Afiches"
    imgAfiches = e =>{
        this.setState({enableLibros : true})
        this.setState({img1:afiche1})
        this.setState({img2:afiche2})
        this.setState({img3:afiche3})
        this.setState({img4:afiche4})
        this.setState({img5:afiche5})
        this.setState({img6:afiche6})
        this.setState({img7:null})
        this.setState({img8:null})
        this.setState({img9:null})
        this.setState({nameClass:"null"})
        
        

    }
    //Funtion sent the image of container "Murales" 
    imgMurales = e =>{

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
                {/* Bar 1 */}
                <Nav justify variant="tabs" defaultActiveKey="/">

                    <Nav.Item >
                        <Nav.Link  onClick= {this.quienesSomos}
                         eventKey="link-1"
                         >Quienes somos
                         </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link onClick={this.queHacemos}
                         eventKey="link-2">Que hacemos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick = {this.realizacion}
                        eventKey="link-3">Realizacion</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick = {this.contacto}
                         eventKey="link-4">Contacto</Nav.Link>
                    </Nav.Item>
                    
                 </Nav>
                <div>
               
                 <QuienesSomos title = {this.state.tittle} 
                 texto={this.state.texto}/>

                </div>
                <MiCarousel/>
                 <br/>

                 {/* Bar 2 */}
                 <Nav justify variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link
                        onClick = {this.imgCuentos}
                        eventKey="link-1" >Cuentos ilustrados</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                        onClick={this.imgLibros}
                        eventKey="link-2">Libros educativos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                        onClick={this.imgAfiches} 
                        eventKey="link-3">Afiches</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link 
                        onClick={this.imgMurales} 
                        eventKey="link-4">Murales</Nav.Link>
                    </Nav.Item>
                    
                 </Nav>
                {/* // Bar 3 */}
                 <Nav justify variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link xs = {8} >Juegos didacticos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Animaciones</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Estampados</Nav.Link>
                    </Nav.Item>                    
                    
                 </Nav>                               
                
                 
                <LibrosIlustrados 
                
                name="Head__center-image"
                name2="Head__center-image"                
                enable = {this.state.enableLibros}
                img1={this.state.img1}
                img2={this.state.img2}
                
                />

                <LibrosIlustrados 
                
                name="Head__center-image"
                name2="Head__center-image"                
                enable = {this.state.enableLibros}
                img1={this.state.img3}
                img2={this.state.img4}
                
                />

                <LibrosIlustrados
                name="Head__center-image"
                name2="Head__center-image"                
                enable = {this.state.enableLibros}
                img1={this.state.img5}
                img2={this.state.img6}
                />

                <LibrosIlustrados
                name={this.state.nameClass}
                name2={this.state.nameClass}               
                enable = {this.state.enableLibros}
                img1={this.state.img7}
                img2={this.state.img8}
                />


                           
                
            </Container>

        )
    }
}

export default JaguarSite