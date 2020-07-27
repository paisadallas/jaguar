import React from 'react'

class QuienesSomos extends React.Component{
   
    render(){
        var title = "Quienes somos?"
        var texto = "Hola mundo"
        return <div>
            <h3>{this.props.title}</h3>
            <p>{this.props.texto}
            </p>
        </div>
    }

}

export default QuienesSomos