//3212 임채영

//문제1
import ReactDOM from 'react-dom'
import React, { useContext, useState } from 'react'

function Greeting(props){
    return <h1>{props.prefix}, {props.target}</h1>
}

// ReactDOM.render(<Greeting prefix="Hello" target="Yu Byung Suk" />, document.getElementById("root"))

// 문제2
function ToggleButton(){
    const [tf, settf] = useState(true)
    const onOff = () => settf(prev => !prev)

    return(
        <div>
            <button onClick={onOff}>{tf?<div>on</div>:<div>off</div>}</button>
        </div>
    )
}

function ToggleButton2(){
    const [toggle, setToggle] = useState(true)
    return <button onClick={() => setToggle(s => !s)}>{toggle?"on":"off"}</button>
}

// ReactDOM.render(<ToggleButton />, document.getElementById("root"))

//문제 3
// '1' ~ 'f'까지 범위의 16진수 문자를 반환
function randomHex() {
    return (Math.floor(Math.random() * (15 - 1 + 1) + 1)).toString(16);
    }

function RandomColorPicker(){
    const [color, setColor] = useState("#000000")

    return <div>
        <div style={{width:200, height:200, backgroundColor:color}}></div>
        <button onClick={() => {
            let randomColor = "#"
            for(let i = 0; i<6; i++){
                randomColor+=randomHex();
            }
            setColor(randomColor)
        }}>pick</button>
    </div>
}

// ReactDOM.render(<RandomColorPicker />, document.getElementById("root"))

//문제 4
function PasswordInput(){
    const [text, setText] = useState("")
    const [show, setShow] = useState(true)

    let result = ""
    if(!show){
        for(let i = 0; i<text.length; i++){
            result+="*";
        }
    }else{
        result = text
    }

    return <div>
        <input type = "text"
        value = {result}
        onChange={e => setText(e.target.value)}/>
        <button onClick={() =>{
            setShow(true)
        }}>show</button>
        <button onClick={() =>{
            setShow(false)
        }}>hide</button>
    </div>
}

// ReactDOM.render(<PasswordInput />, document.getElementById("root"))

//문제 5
function RatingStar(){
    const [rating, setRating] = useState(1)

    const start = []
    for(let i = 1; i<6; i++){
        start.push(
            <span onClick={() => setRating(i)}>{i>rating?"☆":"★"}</span>
        )
    }

    return <div>{start}</div>
}

ReactDOM.render(<RatingStar />, document.getElementById("root"))
