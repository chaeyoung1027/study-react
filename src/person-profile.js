import ReactDOM from 'react-dom'
import React from 'react'

// 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function(props) { //구조분해 할당을 나누지 않고 parameter로 지정
    const {name, age, gender, profile} = props.person;
    const highlight = props.highlight;
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

// 클래스의 속성에 defaultProps 속성(객체 타입)을 정의하고 기본 전달 props 값을 설정 가능
PersonProfile.defaultProps = {
    name: "Unknown",
    gender: "Unknown",
    age: 0,
    profile: 'https://via.placeholder.com/150'
}

const myperson = {
    name : '채영',
    age : '19',
    gender : 'female',
    profile : 'https://image.idus.com/image/files/21a8e18243894251b847211ec7bf1071_512.jpg'
}
//name = "채영" age = "19" gender = "female" profile="https://image.idus.com/image/files/21a8e18243894251b847211ec7bf1071_512.jpg" highlight

ReactDOM.render(<PersonProfile person = {myperson} highlight/>, document.getElementById("root"))