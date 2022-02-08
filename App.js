import React from 'react';
import './App.css';
import './style.css'
import Home from  './components/home'
import  About from './components/about'
import Contact from './components/contact'
import  Skills from'./components/skills'



function App(){
    return(
            <div className='App'>
                <Home/>
                <About/>
                <Skills/>
                <Contact/>
                
            </div>

        )
}
   


export default App;

