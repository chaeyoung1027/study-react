import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {v4} from 'uuid'

function Input(props) {
    const [text, setText] = useState("")
    const handleOnChange = (e)=> { setText(e.target.value) }
    return (
    <div>
        <input type = "text" PlaceHolder = {props.inputPlaceHolder} onChange={handleOnChange} value={text}/> 
        <button onClick = {() => {
            props.onButtonClick(text)
            setText("")
        }} style={{backgroundColor : props.buttonColor}}>{props.buttonLabel}</button>
    </div>
    )
}

function CartItem(props){
    return(
        <div>
        {props.item.name} 수량 : {props.item.count}
        </div>
    )
}

function CartApp(props){
    const [Itemlist, setItemList] = useState([
        {id : v4(), name : "라면", count : 2},
        {id : v4(), name : "생수 (500ml)", count : 5}
    ])
    const addListItem = (name) => setItemList(list => list.concat({id : v4(), name, count :1})) //name : name을 하지 않아도 되는 이유 : 속성 이름이 name이기 때문에.

    console.log(v4)

    return (
        <div>
        <Input onButtonClick = {addListItem} inputPlaceHolder = "추가할 항목을 입력하세요." buttonLabel = "검색" buttonColor = "skyblue"/>
        {Itemlist.map(item => <CartItem item = {item}/>)}  {/*  */}
        </div>
        
    )
}
 
ReactDOM.render(<CartApp/>, document.getElementById("root"))