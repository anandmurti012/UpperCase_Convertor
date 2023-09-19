// import React, { useState } from 'react'

// export default function TextForm(props) {
//     const handleUpClick = () => {
//         let newText = text.toUpperCase();
//         setText(newText)
//     }
//     const handleOnChange = (event) => {
//         setText(event.target.value)
//     }

//     const [text, setText] = useState();
//   return (
// <div>
// <h2>{props.heading}</h2>
//    <div className="mb-3">
//      <textarea className="form-control" placeholder='Enter Your Text here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//      </div>
//      <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    
// </div>
//   )
// }

//===========================self=========================

// import React, { useState } from 'react'

// export default function TextForm(props) {
//     const handleUpClick = () => {
//         let newText = text.toUpperCase();
//        setText(newText)
//     }
//     const handleOnChange = (event) =>{
// setText(event.target.value)
//     } 
//     const [text, setText] = useState();

//     return (
//     <div>
//     <h2>{props.heading}</h2>
//      <div className="mb-3 my-3">
//   {/* <label for="myBox" className="form-label">{props.heading}</label> */}
//   <textarea className="form-control" id="myBox" placeholder= "Enter Your Text here" onChange={handleOnChange} value={text} rows="8" /> 
// </div>
// <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
//     </div>
//   )
// }


//Introducing Hooks================================

// import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';

export default function TextForm(props) {
  const clickUpHandle = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    // console.log(newText);
    setText(newText);
 
   
  }
  const changeOnHandle = (event) => {
    // console.log("On Change even is fired now");
    setText(event.target.value);
  }

  const [text, setText] = useState('');     //This is called Array destructuring 
  //text="Updated value of 'Text' variable"    --==> Wrong way we can't update like this in react. here 'text' is a state variable
  //setText("Updated value of 'Text' variable") --==> Right way to change the value of 'text' variable here setText() is a "Updation function"...
   
  //Note:-Since the default value of 'text' variable is "defaultt value off textttt"  but If we have to change the default value then we can't 
  //change the value of 'text' variable like that  ==> (text = "new default value of textttt") in react this process is not allowed that we can't 
  //directly change the value of 'text' variable, we have to take help of setText as well, here setText is a fucntion  by using updation function 
//we can update the value of 'text' varable. like that setText("Updated value of 'Text' variable"). Now the value of 'Text' variable is 
  //("Updated value of 'Text' variable")  instead of ("defaultt value off textttt")...
  //So now if we do --> console.log(text); we will get ==>("Updated value of 'Text' variable") now...
// console.log(text);   'text' is a state variable
  // setText("Updated value of Text variable");

  return (
    <div>
      <h2>{props.heading}</h2>
    <div className="mb-3">
       <textarea className="form-control" value={text} onChange={changeOnHandle}placeholder='Enter Your Text here to convert into Uppercase' id="myBox" rows="8"></textarea>
       </div>
      <button className='btn btn-primary'  onClick={clickUpHandle}>Convert to Uppercase</button>
    </div>
  )
}

