import ReactDOM from 'react-dom'
import React from 'react'

function Greeting(props){
    return <h1>Hello, {props.name}</h1>
}

ReactDOM.render(<Greeting name = "채영"/>, document.getElementById("root"))