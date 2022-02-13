import { Link } from "react-router-dom";
export default function Navbar(props) {
  return(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      <span className="navbar-brand" >TextUtils</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
       <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/about'}>About</Link>
          </li> 
      
         
        </ul>
     {/* <div className="d-flex">
       <div className=" bg-success mx-1 rounded " style={{height : '20px',width:'20px'}} onClick={()=>{props.toggleMode('success')}} ></div>
       <div className=" bg-danger mx-1 rounded " style={{height : '20px',width:'20px'}} onClick={()=>{props.toggleMode('danger')}} ></div>
       <div className=" bg-primary mx-1 rounded " style={{height : '20px',width:'20px'}} onClick={()=>{props.toggleMode('primary')}} ></div>
       <div className=" bg-warning mx-1 rounded " style={{height : '20px',width:'20px'}} onClick={()=>{props.toggleMode('warning')}} ></div>
     </div> */}
      </div>
      <div className="form-check form-switch mx-3 " >
  <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'dark'? 'white' : 'dark' } ` } htmlFor="flexSwitchCheckDefault"> Dark mode</label>
</div>
    </div>
  </nav>
  );
}
