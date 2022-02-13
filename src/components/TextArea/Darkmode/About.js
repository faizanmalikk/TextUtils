import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React,{useState} from 'react'


export default function About(props) {

let mystyle = {
  color : props.mode === 'dark' ? 'white' : 'black',
  backgroundColor : props.mode === 'dark' ? '#292b2c' : 'white',
  border : '1px  solid'

}


//     const [Button, setButton] = useState("Enable dark mode")
// const [mystyle,setstyle] = useState({
//     color : "black",
//     backgroundColor:"white"
// })
// const toggleChange = ()=>{
//     if(mystyle.color === "black"){
//        setstyle({
//            color : "white",
//            backgroundColor:"black"
//        })
//        setButton("Enable white mode")
//     }
//     else{
//         setstyle({
//             color : "black",
//     backgroundColor:"white" 
//         })
//         setButton("Enable dark mode");
//     }
// }
  return (
    <div className="accordion container  my-5" id="accordionExample" >
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse  collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        We have done our best to provides you a simplest tool with which you can analyze your text very easily.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" style={{border:'0px'}} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
    TextUtils is free of cost app you can customize your text without any cost.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     TextUtils is compatible with any kind of Browser therefore it is easy to use.
      </div>
    </div>
  </div>
  {/* <button className='btn btn-primary my-2' onClick={toggleChange}> {Button}</button> */}
</div>
  )
}
