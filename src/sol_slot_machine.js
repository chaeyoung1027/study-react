import ReactDOM from 'react-dom'
import React from 'react'

const SlotMachine = function(props){
    const {s1, s2, s3} = props;
    const patterns = <p>{s1} {s2} {s3} </p>
    const allSamePattern = s1===s2&& s2===s3;
    const shouldHighlight = allSamePattern&&s1==='7';
    return <div>
        {patterns}
        {allSamePattern&&<p style={shouldHighlight?{color : "red"}:null}>Congrats!</p>}
    </div>
}


{/* <SlotMachine s1="X" s2="X" s3="X" />
<SlotMachine s1="7" s2="7" s3="7" />
// 과일 이모지 : 🍇🍈🍉🍊🍌🍍🍎🍏🍑🍒🍓🍅🍆🌽🍄🌰
<SlotMachine s1="🍓" s2="🍒" s3="🍍" />
<SlotMachine s1="🍒" s2="🍒" s3="🍒" />  */}


ReactDOM.render(
<div>
<SlotMachine s1="7" s2="7" s3="7" />
<SlotMachine s1="🍎" s2="🍎" s3="🍎" />
<SlotMachine s1="🍎" s2="🍏" s3="🍎" />
</div>
, document.getElementById("root"))