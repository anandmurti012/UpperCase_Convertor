import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
     <>
<Navbar title="TextUtils" aboutText="About TextUtils"/>    
{/* // Note:- In this Navbar we are passing values of title and aboutText here */}

{/* <Navbar/>   */}
{/* Here we are not passing any values so that by default value will be sent here. */}

<div className='container my-3'>
<TextForm heading="Enter the text to analyze below"/>
</div>
     </>
  );
}

export default App;
