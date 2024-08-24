import React,{useState} from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";
const Signup=()=>{

        // ist state intializing 
            const [values, setValues] = useState({ name:' ', email: ' ',   password: ' '})
        // 2nd state intialiszing
             const [errors, setErrors] = useState({})
        
        // Handle Input Change { this funciton update the values state as the user type itno the form field }
        const handleInput= (event)=>{
            setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
                }
        
        
                // afteer submission this funciton will run 
            const handleSubmit = (event)=>{
                event.preventDefault();
                setErrors(Validation(values));
            }
        
    return(
        <div className="d-flex justify-content-center align-items-center bg-light vh-100">
        <div className="bg-white p-3 rounded w-30 ">
        <h2>Sign-up</h2>
        <form action="" onSubmit = {handleSubmit}>
        <div className="mb-3">
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Email" name="name" onChange = {handleInput}className="form-control rounded-0"/>
                    {errors.name&& <span className="text-danger">{errors.name}</span>}
          
                </div>
         
      
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" name="email"onChange = {handleInput} className="form-control rounded-0"/>
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Passowrd" name="password" onChange = {handleInput}className="form-control rounded-0"/>
                    {errors.password && <span className="text-danger">{errors.password}</span>}
                </div>
                <button type="submit" className="btn btn-success w-100"><strong>Sign up</strong></button>
                <p>You are agree to our terms and policies</p>
                <Link to ="/" className="btn btn-default border bg-light w-100">create Account</Link>
            </form>
        </div>
    </div>
    )
}
export default Signup;