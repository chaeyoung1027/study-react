import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

function KanyeItem(props) {
    return(
        <div>
            quote: {props.quote}
        </div>
    )
}

function KanyeApp(){
    const [quote, setQuote] = useState(null);
    const [toggle, setToggle] = useState(false);
    
    useEffect(()=>{
        fetch(`https://api.kanye.rest/`)
        .then(res => res.json())
        .then(json =>{
            setQuote(json.quote)
        })
        }, [toggle])

    return(
        <div>
            {quote===null ? null: <KanyeItem quote = {quote}/>}
            <br></br>
            <button onClick={() =>{setToggle(toggle => !toggle)}}>
                칸예 명언 불러오기</button>
            
        </div>
    )
}
ReactDOM.render(<KanyeApp />, document.getElementById("root"))
