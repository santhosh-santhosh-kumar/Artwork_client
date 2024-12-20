import React from 'react'
import { PiTildeBold } from "react-icons/pi";
import { useFormik } from "formik";

function Admin() {
      const formik=useFormik({
            initialValues:{
                userName:"",
                password:""
            },
            validate:(values)=>{
              let error={}
              if(values.userName===""){
              error.userName="*Please enter the username*"
              }{
                error.userName = 'Invalid username';
              }
              if(values.password===""){
                error.password="*Please enter the password*"
              }
              return error
            },
            onSubmit:async (values)=>{
              let passwordOk=false;
                try{
                    const response=await axios.get("")                
                    const res=response.data.map((value)=>{
                        if(values.userName===value.userName&&values.password===value.password){
                            
                            passwordOk=true;
                        }})
                }catch(error){
                    alert("Smothing went wrong")
                }
                if(passwordOk==false){
                  alert('Wrong password')
                }
              }
        })
  return (
    <>
    <div className=''>
      <div className='border mx-auto w-1/2 '>
      <div className='border mx-auto w-1/2'>
      <p className=''>
            <PiTildeBold />
            <PiTildeBold />
            </p>
            <p>Sign in to your account</p>
            <form onSubmit={formik.handleSubmit}>
                  <label for="userName">User Name</label>
                <input type='text'  className='border border-gray-200 block w-full' name='userName' value={formik.values.userName} onChange={formik.handleChange} ></input>
                <span className={`${formik.errors.userName ? "block" : "hidden"} text-red-400`}>{formik.errors.userName}</span><br></br>
                <label for="userName">Password</label>
                <input type='text' className='border border-gray-200 block w-full' name='password' value={formik.values.password} onChange={formik.handleChange} ></input>
                <span className={`${formik.values.password ? "block" : "hidden"} text-red-400`}>{formik.errors.password}</span><br></br>
                <div className='loginButton'>
                <button type='submit' value={"submit"} className="inputLogin" >Login</button>
                
                </div>
            </form></div>
            
      </div>
    </div>
    </>
  )
}

export default Admin