import ReactDOM from "react-dom/client";

const name = 'John';
const element = <h1>Hello, {name}</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));  //index.html에 있는 root를 빌려옴!
root.render(element);  //Hello를 그려줌!