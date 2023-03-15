import  React,{useState} from 'react'
import ReactDOM from 'react-dom'
const UserProfile = function(props){
    const [userName, setUserName] = useState("채영")
    const [userAge, setUserAge] = useState(19)
    const [userEmailAddress, setemailAddress] = useState("rnldyal1027@naver.com")

    return(
        <div>
            <p>{userName}</p>
            <p>{userAge}</p>
            <p>{userEmailAddress}</p>
        </div>
    )

}

ReactDOM.render(<UserProfile />, document.getElementById("root"))


//사용자 정보를 저장하는 UserProfile 컴포넌트를 만들고 3개의 상태(userName, userAge,
//emailAddress)를 추가하고 적절한 기본값을 useState로 전달하여 출력할 수 있도록 코드 작성