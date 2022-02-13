import PropTypes from 'prop-types';
import React,{useState} from 'react';

export default function TextArea(props) {
    
    const [Text, SetText] = useState("")
   const handleonchange = (event)=>{
          SetText(event.target.value)
   }
   const touppercase = ()=>{
       let x = Text.toUpperCase();
       SetText(x);
       props.showAlert('success','Converted to UpperCase')
 
   }
   const tolowercase = ()=>{
       let x = Text.toLowerCase();
       SetText(x);
       props.showAlert('success','Converted to LowerCase')

   }
   const clearall = ()=>{
     SetText("")
     props.showAlert('success','Text is cleared')

   }

   const firstletteruppercase = ()=>{
    props.showAlert('success','Converted to FirstletterUpperCase ')
     return SetText(Text.toLowerCase().split(' ')
     .map(v => v.charAt(0).toUpperCase() + v.substring(1))
     .join(' '))
     
     

 }
 const reverse = ()=>{
   SetText(Text.split("").reverse().join("").split(" ").reverse().join(" "))
   props.showAlert('success','Converted to ReverseOrder')
 }

const handlecopy = ()=>{
// let text = document.getElementById("mybox");
// text.select();
navigator.clipboard.writeText(Text);
// document.getSelection().removeAllRanges();
props.showAlert('success','Text is copied to clipboard ')
}
const extraspaces = ()=>{
  let newText = Text.split(/[ ]+/);
  SetText(newText.join(" "))
  props.showAlert('success','Extra spaces has been removed ')


}
  return(
     
    <div className={`container my-5 text-${props.mode === 'dark'? 'light': 'dark'}`}>
        <h2>Try TextUtils - Word Counter,LowerCase To UpperCase,Remove Extra Spaces.</h2>
    <textarea className={`form-control bg-${props.mode === 'dark' ? 'dark' : 'light'} text-${props.mode==='dark' ? 'light' : 'dark'}`} onChange={handleonchange} placeholder={"Enter your text"} value={Text} id="mybox" rows="6"></textarea>
    <button disabled = {Text.length === 0} className='btn btn-primary my-3' onClick={touppercase}>Convert to uppercase</button>
    <button disabled = {Text.length === 0}className='btn btn-primary my-3 mx-2' onClick={tolowercase}>Convert to lowercase</button>
    <button disabled = {Text.length === 0}className='btn btn-primary my-3 mx-2' onClick={firstletteruppercase}>first letter to uppercase</button>
    <button disabled = {Text.length === 0}className='btn btn-primary my-3 mx-2' onClick={reverse}>reverse</button>
    <button disabled = {Text.length === 0}className='btn btn-primary my-3 mx-2' onClick={handlecopy}>Copy text</button>
    <button disabled = {Text.length === 0} className='btn btn-primary my-3 mx-2' onClick={extraspaces}>Remove extra spaces</button>
    <button disabled = {Text.length === 0} className='btn btn-primary my-3 mx-2' onClick={clearall}>Clear All</button>
    <h1 className='fw-bolder fs-3' >Text Specifications:</h1>
    <p> Number of words <span className='fw-bolder fs-5'> {Text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}  </span> & number of characters <span className='fw-bolder fs-5'> {Text.length} </span> </p>
    <p> <span className='fw-bolder fs-5'>{0.004*Text.split(" ").filter((element)=>{return element.length !== 0}).length} </span>  minutes read.</p>
    <h1 className='fw-bolder fs-3' >Text Preview:</h1>
     <p>{Text.length > 0 ? Text : 'Nothing to preview.'}</p>
  </div>

  );
}
