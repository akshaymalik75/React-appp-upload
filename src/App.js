import './App.css';
import { useState } from 'react'
function App() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    textArea : ''
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }



  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input type="text"
          name="firstName"
          id="firstname"
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastname">Last Name</label>
        <input type="text"
          name="lastName"
          id="lastname"
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input type="email"
          name="email"
          id="email"
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
          required

        />
      <label htmlFor="hobby">Hobbies :</label>
      <br />
      <textarea name="textArea" 
      id="hobby" cols="30" rows="5"
        value={formData.textArea}
        onChange={handleChange}
        placeholder="Write something about   your hobbies....."
      />
       
        <input type="submit" className='submit' value="Submit" />
        {/* <input type="reset"  className='submit' value="Reset" /> */}


      </form>
      <br />
      <h1>{`firstName: ${formData.firstName}`}</h1>
      <h1>{`Last Name: ${formData.lastName}`}</h1>
      <h1>{`Email: ${formData.email}`}</h1>

    </div>
  );
}

export default App;
