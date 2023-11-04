import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from './Components/TextForm'
// import About from "./Components/About";
import Alert from "./Components/Alert";
// import { Route,Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [value,setValue] = useState('Enable dark mode');
  const [alert, setAlert] = useState(null); 

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      setValue('Enable light mode')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light')
      setValue('Enable dark mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <div>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} value={value}/>  
        <Alert alert={alert}/>

        <div className="container my-3">
        {/* <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TEXTUTILS - Enter your text here"/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes> */}
        <TextForm showAlert={showAlert} heading="TEXTUTILS - Enter your text here"/>
        </div>
    </div>
  );
}

export default App;
