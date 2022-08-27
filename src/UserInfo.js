const UserInfo = ({formData,handleSubmit }) => {
    let friendly=''
    formData.isFriendly ?  friendly = "Oh great you are friendly!!..." : friendly = "Being friendly is a great attribute..."
    return ( 
        <div className="user-info">
            
            <h1>Hi {formData.firstName} {formData.lastName}</h1>
            <h1>Email : {formData.email}</h1>
            <h1>Your Hobbies : {formData.textArea}</h1>
            <h1>Favourite Fruit :{formData.fruit}</h1>
            <h1>Are You friendly :{friendly}</h1>
            <h1>Employment status:{formData.empStatus}</h1>

            <button className="form-back" onClick={handleSubmit}>Go back to Form</button>
        
        </div>
     );
}
 
export default UserInfo;