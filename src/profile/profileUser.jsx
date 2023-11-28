import React from "react";
import './style.css'

const ProfileUser = () =>{
    return(
        
        <div className="mt-3 ">

            <div className=" d-flex ">
                 
                <div className=" dashboard ">
                    {/* dashboard */}
                    <h1>Profil</h1>

                </div>
                <div className="container form-detail">
                    <h2>Detail Profil</h2>

                    {/* foto profil, btn, karakter avatar */}
                    <div className="d-flex align-items-center">
                        <div className="foto-profil">
                            <img src="https://i.pinimg.com/564x/e3/9f/83/e39f83c284515a8ab1d2cad9ce4733dd.jpg" alt="" />
                        </div>  
                        <div className="m-3">
                            <button type="submit" class="btn btn-primary">Upload Foto</button>
                        </div>
                        <div>
                            <button className="btn btn-outline-primary" >Gunakan Karakter Avatar</button>
                        </div>
                    </div>

                    {/* form */}
                    <p className="text-secondary">Mohon lengkapi semua input yang diminta</p>

                    
                    <div class="row mb-3 form-user ">
                        <div class="col">
                            <label for="" class="form-label">Nama Depan</label>
                            <input type="text" class="form-control" placeholder="Nama Depan.." aria-label="First name"/>
                        </div>
                        <div class="col">
                            <label for="" class="form-label">Nama Belakang</label>
                            <input type="text" class="form-control" placeholder="Nama Belakang.." aria-label="Last name"/>
                        </div>
                    </div>


                    {/* URL profil */}
                    <div className="form-user mb-3">
                        <div className="col">
                            <label htmlFor="" className="form-label">Profil URL</label>
                            <input type="text" class="form-control" placeholder="URL" aria-label="Profil URL"/>
                        </div>
                    </div>

                    <div className="form-user mb-3">
                        <div className="col">
                            <label htmlFor="" className="form-label">Alamat Email</label>
                            <input type="text" class="form-control" placeholder="Email.." aria-label="Email" disabled/>
                        </div>
                    </div>
                    

                    <div className="form-user mb-3">
                        <div className="">
                            <label htmlFor="" className="form-label">Biografi</label>
                            <textarea type="text-area" class="form-control form-control-lg" placeholder="Biografi.." aria-label="Biografi"/>
                        </div>
                    </div>

                    {/* Page form selesai */}
                    <div>
                        <button className="btn btn-danger">Simpan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileUser