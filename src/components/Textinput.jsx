import React from "react";
import Alert from "./Alert";
import Navbar from "./Navbar";



function Textinput({showFunc,change,alert,buttonFunction,lightMode,mode}) {

  return (
    <>
          <div className={`App`}>
     <Navbar lightMode={lightMode} mode = {mode}/>
     <Alert alert={alert}/>
       <div className={`form-floating`}>
        <textarea id="myInput"
        className="form-control d-flex justify-content-center"
        placeholder="Enter text here.."
        style={{width :"700px",height: "300px"}}
         onChange={showFunc} value={change}></textarea>
   
    </div>
    <div className ={`${mode === "dark" ? "light" : "dark"}`}>
        <button disabled ={change.length===0} className={`btn-${mode === "dark" ? "light" : "dark"}  btn-sm-2 mx-2 mt-1`}  onClick={buttonFunction.conUpper}>Convert to Uppercase</button>
        <button disabled ={change.length===0}  className={`btn-${mode === "dark" ? "light" : "dark"}  btn-sm-2 mx-2 mt-1`} onClick={buttonFunction.conLower}>Convert to Lowercase</button>
        <button disabled ={change.length===0}  className={`btn-${mode === "dark" ? "light" : "dark"}  btn-sm-2 mx-2 mt-1`} onClick={buttonFunction.clearText}>Clear Text</button>
        <button disabled ={change.length=== 0} className={`btn-${mode === "dark" ? "light" : "dark"}  btn-sm-2 mx-2 mt-1`}  onClick={buttonFunction.copyText}>Copy Text</button>
        <button disabled ={change.length===0} className={`btn-${mode === "dark" ? "light" : "dark"}  btn-sm-2 mx-2 mt-1`} onClick={buttonFunction.extraSpace}>Remove Extra spaces</button>
    </div>
    <div>
    <h1 >Your Text Summary</h1>
    <h4>{change.replaceAll(' ','').length} texts and {change.split(/\s+/).filter((element)=>{return element.length!==0}).length}  words </h4>
    <h2>Preview</h2>
    <div>{change.length > 0?change:"Nothing to preview!."}</div>
     </div>
    </div>

    </>
  );
}

export default Textinput;
