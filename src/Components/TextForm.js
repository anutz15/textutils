// rfc shortcut

import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');
  // setText("This is setText");
  // text is state variable

  const handleUpCase = ()=>{
    // console.log(text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to upper case", "success");
  }
  
  const handleLowCase = ()=>{
    // console.log(text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to lower case", "success");
  }
  const handleClear = ()=>{
    setText("");
    props.showAlert("Cleared text", "success");
  }
  
  const handleOnChange = (event)=>{
    console.log("On change");
    // able to write because of this
    setText(event.target.value);

  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox")
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  }

  const handleSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text spacing hanndled", "success");

  }


  
  return (
    <div>
      <h1 className="my-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpCase}>Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowCase}>Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleSpace}>Remove Extra space</button>

      <div className="container">
        <h2 className="my-3">Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h3 className="my-3">Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}



