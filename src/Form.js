import { useState } from 'react'
const Form = ({handleSubmit,handleChange,formData,handleReset}) => {
   

   
    return ( 
        <div className="App">

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input type="text"
          name="firstName"
          id="firstname"
          required
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
          id="hobby" cols="20" rows="3"
          value={formData.textArea}
          onChange={handleChange}
          placeholder="Write something about   your hobbies....."
        />
        <label htmlFor="fav-fruit">Favourite Fruit:     </label>
        <select className='select' name="fruit"
          value={formData.fruit}
          id="fav-fruit"
          onChange={handleChange}>
          <option value="Mango">Mango</option>
          <option value="Apple">Apple</option>
          <option value="Orange">Orange</option>
        </select>
        <br />

        {/* <label htmlFor="male">Male</label>
      <input onChange={handleChange} type="radio" name="gender" checked id="male"/>
      <label htmlFor="female">Female</label>
      <input onChange={handleChange} type="radio" name="gender" id="female" />
        */}
        <br />
        <input type="checkbox" id='checkbox'
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly" />
        <label htmlFor="checkbox"> Are You friendly</label>
        <br />
        <br />
        <fieldset style={{ padding: '12px' }}>
          <legend>Employment status</legend>
          <input
            type="radio"
            name="empStatus"
            id="employed"
            value="employed"
            checked={formData.empStatus ==="employed"}
            onChange={handleChange} />
          <label htmlFor="employed">Employed</label>
          <br />

          <input
            type="radio" name="empStatus"
            id="not-emp"
            value="Not employed"
            checked={formData.empStatus === "Not employed"}
            onChange={handleChange} />
          <label htmlFor="not-emp">Not Employed</label>
          <br />

          <input type="radio" name="empStatus" id="partime"
            value="Part time"
            checked={formData.empStatus === "Part time"}
            onChange={handleChange}
          />
          <label htmlFor="partime">Part Time</label>
        </fieldset>

        <input type="submit" className='submit' value="Submit" />
        <button onClick={handleReset} className='submit'>Reset</button>


      </form>

      <br />
        

    </div>
     );
}
 
export default Form;