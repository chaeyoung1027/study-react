import ReactDOM from 'react-dom'
import React from 'react'

// props를 통해서 전달된 값에 접근 가능
const ComponentWithProps = function(props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

ReactDOM.render(<ComponentWithProps
    value1="Hello"  //문자
    value2 = {1}    //숫자
    value3 = {{a:1, b:"React"}} // 객체
    value4 = {()=>{}}   //함수
    />, document.getElementById("root"))