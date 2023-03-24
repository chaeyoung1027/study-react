import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const CartItem = function({cart: {completed, text}, idx, handleCartStatusToggle, handleCartRemove}){
    return (
        <div>
            <span style={completed?{textDecoration:'line-through'}:null}
            onClick = {()=> handleCartStatusToggle(idx)}>
                {text}
            </span>&nbsp;
            <button onClick={() => handleCartRemove(idx)}>+</button>
            <button onClick={() => handleCartRemove(idx)}>-</button>
            <button onClick={() => handleCartRemove(idx)}>x</button>
        </div>
    )
}

const CartList = function({carts, handleCartStatusToggle, handleCartRemove}){
    return (
        <ol>
            {
                carts.map((cart, idx) => {
                    return(
                        <li key={idx}>
                            <CartItem idx={idx} cart = {cart}
                            handleCartStatusToggle = {handleCartStatusToggle}
                            handleCartRemove = {handleCartRemove}/>
                        </li>
                    )
                })
            }
        </ol>
    )
}

const CartAdder = function({handleCartAdd}){
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)
    return(
        <div>
            <input type = 'text' onChange={handleChange} value={input}/>
            <button onClick={()=>{
                handleCartAdd({completed:false, text:input})
                setInput("")
            }}>추가</button>
        </div>
    )
}


const CartApp = function(props){
    const [carts, setCarts] = useState([
        {completed:false, text: '리액트 공부하기'}
    ])

    const handleCartAdd = newCarts => setCarts(carts => carts.concat(newCarts))
    const handleCartStatusToggle = cartIndex =>{
        setCarts(carts =>{
            return carts.map((cart, idx)=>{
                if(idx===cartIndex){
                    return {
                        ...cart,
                        completed: !cart.completed
                    }
                }
                return cart
            })
        })
    }
    const handleCartRemove = cartIndex => {
        setCarts(carts =>{
            return carts.filter((_, idx) => {
                return idx !== cartIndex
            })
        })
    }
    return(
        <div>
            <CartList carts = {carts}
            handleCartStatusToggle = {handleCartStatusToggle}
            handleCartRemove = {handleCartRemove}/>
            <CartAdder handleCartAdd={handleCartAdd}/>
        </div>
    )
}

ReactDOM.render(<CartApp />, document.getElementById("root"))