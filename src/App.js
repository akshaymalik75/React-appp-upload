import { useState } from 'react';
import './App.css';

import Form from './Form';
import UserInfo from './UserInfo';
function App() {

const [showData , setShowData] = useState(true)
const [theme,setTheme] = useState(false)
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  textArea: '',
  fruit: 'Apple',
  isFriendly: true,
  empStatus: ""
})

const dark={
  backgroundColor:'black',
  color:'white'
} 

const light={
  backgroundColor:'white',
  color:'#000'
} 
let mode ={}
theme ? mode = dark : mode=light

function handleTheme()
{
  setTheme(prev=>!prev)
}


function handleChange(e) {
  const { name, value, type, checked } = e.target;
  setFormData((prev) => {
    return {
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }
  })
}

function handleReset(e){
  e.preventDefault()
  setFormData(prev=>({
    ...prev,
    firstName: '',
    lastName: '',
    email: '',
    textArea: '',
    fruit: 'Apple',
    isFriendly: true,
    empStatus: ""
  }))
}

function handleSubmit(e)
{
  e.preventDefault()
  console.log(formData)
  setShowData(prev=>!prev)
}





  return (
    <div style={mode} className="main">

      <button className='toggleMode' onClick={handleTheme}>{theme ? "Light" : "Dark"} Mode</button>
      <br />
  


   {showData && <Form handleSubmit={handleSubmit} 
   handleChange={handleChange}
   formData={formData}
   handleReset={handleReset}/>}

   {!showData && <UserInfo formData={formData} handleSubmit={handleSubmit} />}
   </div>

  
  );
}

export default App;
