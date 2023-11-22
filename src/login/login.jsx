import React, { useState } from "react";
import "./style.css"
function Login(){

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleDaftar = () =>{
    alert("on Progress")
  }
  const handleLogin = async () => {
    if (!email || !password) {
      console.log("Ga boleh kosong")
      return;
    }

    // Ganti dengan URL API login Anda
    const apiUrl = 'https://65277168917d673fd76db3d3.mockapi.io/loginuser/v1/loginapi';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Memeriksa data yang diinput dengan data dari API
        if (data.success) {
          // Login berhasil
          
          alert('Login berhasil');
          
        } else {
          // Login gagal
          console.error('Login gagal');
        }
      } else {
        // Login gagal
        console.error('Login gagal');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  };
  //oke
  

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
            <div className="invalid-feedback">
              Email tidak boleh kosong
            </div>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className='form-control has-validation' id="password" placeholder="password" onChange={(e) =>{setPassword(e.target.value)}} required/>
            <label htmlFor="password">Password</label>
          </div>
          <div className="text-center" >
            <button type="submit" className="btn btn-outline-primary" onClick={()=>{handleLogin()}}>
              Login
            </button>
          </div>
          <div className="text-center mt-3">
          Belum punya akun? <a href="#" onClick={handleDaftar}>Daftar</a>
        </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default Login;