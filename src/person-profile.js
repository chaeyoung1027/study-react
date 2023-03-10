import ReactDOM from 'react-dom'
import React from 'react'

// 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function({ name, age, gender, profile, highlight }) { //구조분해 할당을 나누지 않고 parameter로 지정
    return (
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}


ReactDOM.render(<PersonProfile name = "채영" age = "19" gender = "female" profile="https://image.idus.com/image/files/21a8e18243894251b847211ec7bf1071_512.jpg" highlight />, document.getElementById("root"))