import React from "react";
import './style.css'

const DiskusiPage = () =>{

    const diskusi = () =>{
        alert('Comming soon')
    }
    return(
        <div>
            <div className="container">
                

                <i class="bi bi-list fa-xl " data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"></i>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div class="offcanvas-header">
                    <h1 class="offcanvas-title" id="offcanvasScrollingLabel"><b>Skill<span className="mastery">Mastery</span></b></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div>
                </div>
                <div class="offcanvas-body daftar">
                    <div>   
                        <i class="bi bi-house-door m-4 fa-xl"></i>
                        <a href="">Beranda</a>
                    </div>
                    <div className="mt-2">   
                        <i class="bi bi-gear m-4 fa-xl" ></i>
                        <a href="">Kursus</a>
                    </div>
                    <div className="mt-2">   
                        <i class="bi bi-chat-left-text m-4 fa-xl" ></i>
                        <a href="" >Diskusi</a>
                    </div>
                </div>
                </div>
                
                <div className="container">
                    <h1>Forum Diskusi 1#</h1>
                    <div className="diskusi mt-5 d-flex ">
                        <img src="https://i.pinimg.com/564x/4b/0f/d9/4b0fd9c4f7fa6557d4681f150ade1e47.jpg" alt="" />
                        <div className="name-user">
                            <p > 
                                <span class="text-muted">20 september 2023</span><br />
                                <span className="name">Dionisius Reinaldo </span> <br />
                            Halo, saya mendapat error pada pembelajaran bab 3. Bagaimana cara mengatasinya?
                                <br /><br />
                                <div className="d-flex justify-content-between">
                                    <button onClick={diskusi} className="btn btn-primary">Balas</button>
                                    <i onClick={diskusi} class="bi bi-chat-dots fa-xl"></i>
                                    
                                </div>

                            </p>
                            
                        </div>
                        <u></u>
                    </div>
                    <div className="diskusi mt-5 d-flex ">
                        <img src="https://i.pinimg.com/564x/b3/9d/5b/b39d5bb7ee81d3f0d52010e5eeb8bd8c.jpg" alt="" />
                        <div className="name-user">
                            <p > 
                                <span class="text-muted">15 Agustus 2022</span><br />
                                <span className="name">Dionisius Reinaldo </span> <br />
                            Ada yang tau, gimana cara menghubungkan file css ke html?
                                <br /><br />
                                <div className="d-flex justify-content-between">
                                    <button onClick={diskusi} className="btn btn-primary">Balas</button>
                                    <i onClick={diskusi} class="bi bi-chat-dots fa-xl"></i>
                                    
                                </div>

                            </p>
                            
                        </div>
                        <u></u>
                    </div>
                    <div className="diskusi mt-5 d-flex ">
                        <img src="https://i.pinimg.com/564x/bc/ad/67/bcad677c40a480590859684c27654a9f.jpg" alt="" />
                        <div className="name-user">

                            <p > 
                                <span class="text-muted">9 Agustus 2022</span><br />
                                <span className="name">Dionisius Reinaldo </span> <br />
                            Apa perbedaan antara elemen tag div dan tag span dalam HTML?
                                <br /><br />
                                <div className="d-flex justify-content-between">
                                    <button onClick={diskusi} className="btn btn-primary">Balas</button>
                                    <i onClick={diskusi} class="bi bi-chat-dots fa-xl"></i>
                                    
                                </div>

                            </p>
                            
                        </div>
                        <u></u>
                    </div>
                    <div className="diskusi mt-5 d-flex ">
                        <img src="https://i.pinimg.com/564x/88/94/52/8894528940b3d7eb88a241e3c34f4e25.jpg" alt="" />
                        <div className="name-user">
                        
                            <p > 
                                <span class="text-muted">9 juli 2022</span><br />
                            <span className="name">Elon Musk </span> <br />
                            Halo semua, boleh share tips belajarnya dong. Terima kasih atas respon temen-temen semua!
                                <br /><br />
                                <div className="d-flex justify-content-between">
                                    <button onClick={diskusi} className="btn btn-primary">Balas</button>
                                    <i onClick={diskusi} class="bi bi-chat-dots fa-xl"></i>
                                    
                                </div>

                            </p>
                            
                        </div>
                        <u></u>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DiskusiPage