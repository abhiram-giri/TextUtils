import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("Upper case was clicked:"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("All text Cleared", "success");
    }
    const handleEmailClick = () => {
        let newText = `${text}@gmail.com`;
        setText(newText);
        props.showAlert("Converted to Email", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042723'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042723'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleEmailClick}>Convert to Email</button>


    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042723'}}>
        <h1>Your text summery</h1>
        <p>{text.split(' ').length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(' ').length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
