import React from "react";
import '../CSS/signup.css';
function Signup() {
  // Array of the 50 most popular countries sorted by name
  

  // Sort the countries alphabetically
  countries.sort();
  return (
    <div>
      {/* <center> */}
	<form className="signupform" name="f1">
		<h3 className="sign_up_hea">Create Your Account </h3>
		<input type="text" className="signup_input fn" name="FirstName" placeholder="First Name"  required/>
		<input type="text" className="signup_input ln" name="LastName" placeholder="Last Name"required/>
		<br/>
		<input type="email" className=" signup_input email" name="UserEmail" placeholder="abc@gmail.com" required/>
		<input className=" signup_input size" type="text" name="box4" placeholder="Mobile Number" required />
		<br/>
    <div className="gender-group">
            <label  className="gender-lebel">
              <input type="radio" value="Male" name="gender" className="gender-input" onclick="set_rating_value(value)" />
              <span className="gender-span">Male </span>
            </label>
            <label className="gender-lebel">
              <input type="radio" value="Female" name="gender" className="gender-input" onclick="set_rating_value(value)" />
              <span className="gender-span">Female </span>
            </label>
            <label className="gender-lebel">
              <input type="radio" value="Other" name="gender" className="gender-input" onclick="set_rating_value(value)" />
              <span className="gender-span">Other </span>
            </label>
            
            
          </div>
		<br/>
		<input className="signup_input size " type="password" name="box 5" placeholder="password" required/>
		<br/>
		<input className=" signup_input  size" type="password" name="box 5" placeholder=" confirm password" required/>
		<br/>
    <div className="submit-div">
		<button className="signup_button" type="submit" name="submit">Register</button>
		<button className="signup_button" type="reset" name="reset">Clear</button>
    </div>
	</form>
	{/* </center> */}
    </div>
  );
}

export default Signup;
