import { useState } from 'react';

const UserForm = () => {
  let [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNum:"",
    Password:"",
  });
 
  let handleFormChange = (e) =>{
    let fieldName = e.target.name;
    let newValue = e.target.value;
    
    setFormData((currData) =>{
        return {...currData, [fieldName]: newValue};
    });
  };

  let btnSubmit = (e) =>{
    //console.log("button is clicked");
    e.preventDefault();
    console.log(formData);
    setFormData({
        Name: "",
        Email: "",
        PhoneNum:"",
        Password:"",
    });
    
  }
  return (
    <>
      <form onSubmit={btnSubmit}>
      <h1>Registration Form</h1>
       <hr />
      <div className="form">
          <label htmlFor="userName"> Name : </label>
          <input type="text" placeholder="Enter your name"
          value={formData.Name} 
          onChange={handleFormChange} id="userName"
          name="Name"/>
          <br />
          <label htmlFor="userEmail">Email :</label>
          <input type="email"  placeholder="Enter your Email" 
          value={formData.Email} 
          onChange={handleFormChange}  id="userEmail"
          name="Email"/>
          <br />
          <label htmlFor="userNum">Mob num :</label>
          <input type="number" placeholder="Enter your phone number" id="userNum" 
          value={formData.PhoneNum}
          onChange={handleFormChange}
          name="PhoneNum" />
          <br />
          <label htmlFor="userPass">Password :</label>
          <input type="password" placeholder="Enter your password" id="userPass" 
          value={formData.Password}
          onChange={handleFormChange}
          name="Password" />
          <br />
          <br />
          <button className="button" onClick={btnSubmit}>Submit</button>

      </div>
      </form>
    
    </>
  )
}

export default UserForm;
