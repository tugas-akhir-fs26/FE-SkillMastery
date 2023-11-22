import React, { useState } from "react";
import "./style.css"
function Login(){

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleLogin = () =>{
    if(email && password !== ''){
      alert('Login Successful')
    }
  }

  return(
    <>
      <div className=" row g-0 justify-content-center align-items-center login-container" id="full-body">
      
        <div className="col-10 row g-0 align-items-center bg-white">

          <div className="col-6 bg-primary d-none d-md-block" id="gambar-login">

            <img src="https://skillindiacsc.in/wp-content/uploads/2022/06/Illustration-4.png" alt="" />
          </div>

        

        <form action="" className="col-12 col-md-6 py-4 px-3" id="form-login">
          
          <center><h4 className="login-title">Login</h4></center>

          <div className="form-floating mb-3">
            <input type="email" className='form-control has-validation' id="email" placeholder="name@example.com" onChange={(e)=>{setEmail(e.target.value)}} required/>
            <label htmlFor="email">Email</label>
            <div class="invalid-feedback">
              Email tidak boleh kosong
            </div>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className='form-control' id="password" placeholder="password" onChange={(e) =>{setPassword(e.target.value)}} required/>
            <label htmlFor="password">Password</label>
          </div>
          <div className="text-center" onClick={()=>{handleLogin()}}>
            <button className="btn btn-outline-primary">
              Login
            </button>
          </div>
                  <div className="text-center mt-3">
          Belum punya akun? <a href="">Daftar</a>
        </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default Login;