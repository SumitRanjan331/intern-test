import React from 'react';
import './App.css';
import FormComponent from './FormComponent';
import Ezlogo from './images/Ezlogo.png'
const App = () => {
  return (
    <div className="App">
      <div className='ez-part'>
        <div>
           <img src={Ezlogo} alt=''/>
        </div>
        <h2>A Suite Of Business Support Services</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing slit, sed do eiusmod tempor incididunt... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</h3>
        <FormComponent />
      </div>
      <div className='card-container'>
             <div className='cards'>
      <h1 className=' card-title'>Presentation Design</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipiscing slit, sed do eiusmod tempor incididunt</h4>
              </div >
             <div className='cards'>
      <h1 className=' card-title'>Audio-Visual Production</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipiscing slit, sed do eiusmod tempor incididunt</h4>
             </div>
             <div className='cards'>
      <h1 className=' card-title'>Transaltion Services</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipiscing slit, sed do eiusmod tempor incididunt</h4>
             </div>
             <div className='cards'>
      <h1 className=' card-title'>Graphic Design</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipiscing slit, sed do eiusmod tempor incididunt</h4>
             </div>
             <div className='cards'>
      <h1 className=' card-title'>Reasearch & Analytics</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipiscing slit, sed do eiusmod tempor incididunt</h4>
             </div>
             <div className='cards'>
      <h1 className=' card-title'>Data Processing</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipiscing slit, sed do eiusmod tempor incididunt</h4>
             </div>
      </div>
    </div>
  );
};

export default App;
