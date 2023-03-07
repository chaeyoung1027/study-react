import logo from './logo.svg';
import './App.css';

function App() {
  return <div>Hello</div> //원래 안되는데 JSX를 쓰면 확장되어있어서 사용 가능함
}

export default App;

//babel transpiler의 역할 : jsx를 js로 바꿔줌
//DOM : 문서 객체 모델
//가상 DOM을 만드는 이유 : 속도, 만약 코드를 수정하면 진짜 DOM을 수정하는게 아니라 가상 DOM을 수정해 속도가 빨라짐.