import Navbar from './components/Navbar/Navbar';
import TextArea from './components/TextArea/TextArea';
import './App.css';
import React,{useState} from 'react'
import Alert from './components/Alert/Alert';
import About from './components/TextArea/Darkmode/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
const [mode , setmode] = useState('light');
const [alert, setAlert] = useState(null)
// const removeclass = ()=>{
//   document.body.classList.remove('bg-primary');
//   document.body.classList.remove('bg-success');
//   document.body.classList.remove('bg-danger');
//   document.body.classList.remove('bg-warning');
// }
const toggleMode = (cls)=>{
//   removeclass();
//   document.body.classList.add('bg-'+cls)
  if(mode === 'light'){
 
    setmode('dark')
    document.body.style.backgroundColor = 'black'
    showAlert('success','Dark mode has been enabled')
    // document.title = 'TextUtils - Dark Mode'
  }
  else{
    setmode('light')
    document.body.style.backgroundColor = 'white'
    showAlert('success','White mode has been enabled')
    // document.title = 'TextUtils - White Mode'
    
  }
}
const showAlert = (type,msg)=>{
setAlert({
type: type,
msg : msg
})
setTimeout(() => {
  setAlert(null)
}, 1500);
}

  return (
    <>
    <div>
  
<Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
<Routes>
  <Route path='/' element={ < TextArea mode={mode} showAlert={showAlert}/> }  />
  <Route  path='/about' element={<About mode={mode}/>} />
</Routes>






 </div>
  </>
  );
}

export default App;
