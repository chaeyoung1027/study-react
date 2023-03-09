import ReactDOM from 'react-dom'
import React from 'react'

function Greeting(props){
    const name = props.name
    return <h1>Hello, {name}</h1>
}

ReactDOM.render(<Greeting name = "채영"/>, document.getElementById("root"))