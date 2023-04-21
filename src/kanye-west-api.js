import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
function KanyeItem(props) {
  return (
    <div>
      quote: {props.quote}
    </div>
  );
}

function KanyeApp() {
  const [quotes, setQuotes] = useState([]); //quote를 담은 배열
  const [toggle, setToggle] = useState(false);
  const [index, setIndex] = useState(0);    //위치값

  useEffect(() => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(json => setQuotes(quotes =>{
        let newQuotes = quotes.concat(json.quote)
        setIndex(newQuotes.length-1)
        return newQuotes
    }))
  }, [toggle])

  let controller
  if(index === 0){
    controller = <div><button onClick={() => setIndex(i => i+1)}>▶</button>
    </div>
  }else if(index +1 === quotes.length){
    controller = <div><button onClick={() => setIndex(i => i-1)}>◀</button></div>  
  }else{
    controller = <div>
    <button onClick={() => setIndex(i => i-1)}>◀</button>
        <button onClick={() => setIndex(i => i+1)}>▶</button>
    </div>
  }
  if(quotes.length === 1) controller = null

  return <div>
    {
        quotes.length >0 &&<div> 
            <p>{index+1} / {quotes.length}</p>
            <p>quote : {quotes[quotes.length-1]}</p>
            {controller}
            </div>
    }
    <button onClick = {() =>{
        setToggle(t => !t)
    }}>명언 불러오기</button>
    

  </div>
}

ReactDOM.render(<KanyeApp />, document.getElementById("root"));