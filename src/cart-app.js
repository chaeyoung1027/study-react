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
        &nbsp;&nbsp;&nbsp;
        <button onClick={()=>{
            props.handleCountChange(props.item.id, 1)
        }}>+</button>
        &nbsp;
        <button onClick={()=>{
            if(props.item.count === 1) props.handleItemDelete(props.item.id)
            else props.handleCountChange(props.item.id, -1)
        }}>-</button>
        &nbsp;
        <button onClick={() =>{
            props.handleItemDelete(props.item.id)
        }}>x</button>
        </div>
    )
}

function CartApp(props){
    const [Itemlist, setItemList] = useState([  //useState만 props를 바꿀 수 있음.
        {id : v4(), name : "辛라면", count : 2},
        {id : v4(), name : "생수 (500ml)", count : 5}
    ])
    const addListItem = (name) => setItemList(list => list.concat({id : v4(), name, count :1})) //name : name을 하지 않아도 되는 이유 : 속성 이름이 name이기 때문에.
    const addItemCount = (id, amount) => setItemList(list =>{
        return list.map(item=>{
            if(item.id === id){
                item = {...item, count : item.count+amount}
            }
            return item
        })
    })
    const deleteListItem = (id) => setItemList(list =>{
        return list.filter(item =>{
            return item.id !== id
        })
    })

    console.log(v4)

    return (
        <div>
        <Input onButtonClick = {addListItem} inputPlaceHolder = "추가할 항목을 입력하세요." buttonLabel = "추가" buttonColor = "skyblue"/>
        {Itemlist.map(item => <CartItem 
        handleCountChange = {addItemCount} 
        handleItemDelete = {deleteListItem}
        item = {item}/>)}
        </div>
        
    )
}
 
ReactDOM.render(<CartApp/>, document.getElementById("root"))