// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Counter = function(props) {
    // useState 함수(훅)을 사용하여 상태 및 상태 변경 함수 불러오기
    //const [count, setCount] = useState(0)
    const arr = useState(0)
    const count = arr[0]
    const setCount = arr[1]
    return (
        <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>증가</button>
        {/* Q) 감소 버튼 만들어보기 */}
        <button onClick={() => setCount(count -1)}>감소</button>
        </div>
    )
}
ReactDOM.render(<Counter />, document.getElementById("root"))