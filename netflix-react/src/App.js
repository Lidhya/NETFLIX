import React,{useState} from 'react'
import './App.css'
import Register from './Pages/Register/Register'
import Home from './Pages/Home/Home'

function App() {

  const [login, setLogin]=useState(false)
  let components;
  if(login){
    components= <Home setLogin={setLogin}/>
  }else{
    components=<Register setLogin={setLogin}/>
  }

  return(
    <div className='App'>
      {components}
    </div>
  )
 
}

export default App
