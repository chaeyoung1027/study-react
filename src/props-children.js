import ReactDOM from 'react-dom'
import React from 'react'

const Child = props => <div>{props.children}</div>      //전달받는 인자가 1개면 props 소괄호 생략가능 인자가 없다면 ()만 써야한다.



ReactDOM.render(<Child>
    <h1>Title</h1>
    <div>React</div>
    <ol>
        <li>item 1</li>
        <li>item 2</li>
    </ol>
    <Child>Inner Child</Child>
</Child>, document.getElementById("root"))