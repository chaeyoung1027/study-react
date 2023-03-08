import ReactDOM from "react-dom/client";

const name = 'John';
const element = <h1>Hello, {name}</h1>

const lst = [100, 200, 300]
const person = {
name: 'John',
age: 20
}
function double(value) {
return value * 2
}

const el = <div>    {/* boolean 값, undefined, null은 반환하지 않는다. */}
    {true}
    {false}
    {undefined}
    {null}
</div>

// 내부에서 배열, 객체 참조도 가능하며 수식 사용 및 함수, 메소드 사용도 자유로움 (자바스크립트 표현식을 모두 사용 가능, 단, if 구문이나 for 구문은 사용 불가)

const JSXwithExpressions = (
<h1>
    {/* 안에서 주석 달기 */}
    {lst[0]}
    &nbsp;{person.name}
    &nbsp;{person.age}
    &nbsp;{2 + 2}
    &nbsp;{person.name.toUpperCase()}
    &nbsp;{person.name.length}
    &nbsp;{double(person.age)}
</h1>)

//조건부 랜더링
const unreadMessages = ["hello", "world"];
const el2 = <div>
    <h1>Hello!</h1>
    {
        unreadMessages.length > 0 &&
        <h2>You have {unreadMessages.length} unread messages.</h2>  //&&연산자는 마지막에 평가한 값을 return함. && 또는 삼항연산자를 사용해 활용 가능!
    }
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));  //index.html에 있는 root를 빌려옴!
root.render(el2);  //괄호 안에 있는 것을 화면에 그려줌