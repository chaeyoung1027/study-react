// Node에서 실행
// 리스트 데이터
let lst = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Paul" },
]

//js는 불변을 원칙으로 한다!
// lst.push({id : 4, name : "ken"}) 값은 변화하지만 주소가 변하지 않아 re-render을 안 해줌. 
//lst.concat({id : 4, name : "ken"})  //추가를 안 해줌.
let newLst = lst.concat({id : 4, name : "ken"})  //기존상태는 변하지 않지만 newLst에 값을 넣어줌. 
console.log(lst)
console.log(newLst)

newLst2 = []
lst.forEach(item => newLst2.push(item));
newLst.push({id : 4, name : "ken"})
console.log(newLst2)

let updatedId = 2
let updatedName = "Smith"
let updatedLst = lst.map(item =>{
    if(item.id === updatedId){
        //다음과 같이 객체를 직접 변경하지 않고 (원본 리스트는 불변!)
        //item.name = updatedName

        //전개 연산자를 이용하여 값 복사 후 덮어쓰기 전략으로 새 객체를 생성
        item = {...item, name : updatedName}
    }
})
// 요소 삭제는 filter 메소드를 이용하여 처리
let removedId = 1
let removedLst = lst.filter(item => {
    return item.id !== removedId
})
console.log("filter =====")
console.log(lst) // 원본에 영향 X
console.log(removedLst) // 새로운 객체
console.log(lst === removedLst) // false

const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) => <li>{number}</li>)
const listItems2 = numbers.map((number) => <NumberItem item = {number}/>)
