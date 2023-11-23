import React from "react";
import "./style.css"
function DetailClass(){
    return(
        <div>
            
            <section class="course-details section-padding mt-5">
                <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                    
                    <div class="course-header box" id="box-card">
                        <h2 class="text-capitalize" id="judul-course">HTML for Beginner</h2>
                        <div class="rating">
                        <span class="average-rating">(4.5)</span>
                        <span class="average-stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star" ></i>
                            <i class="fas fa-star" ></i>
                            <i class="fas fa-star" ></i>
                            <i class="fas fa-star-half-alt" ></i>
                        </span>
                        <span class="reviews">(230 reviews)</span>
                        </div>
                        <ul>
                        <li>enrolled student- <span>1200</span></li>
                        <li>
                            created by - <span> <span id="author"></span></span>
                        </li>
                        <li>last update - <span>15/9/2023</span></li>
                        <li>language - <span> english</span></li>
                        </ul>
                    </div>

                    <nav class="course-tabs">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active border-0" id="course-curriculum-tab" data-bs-toggle="tab"
                            data-bs-target="#course-curriculum" type="button" role="tab" aria-controls="course-curriculum"
                            aria-selected="true">
                            Curriculum
                        </button>
                        <button class="nav-link" id="course-description-tab" data-bs-toggle="tab"
                            data-bs-target="#course-description" type="button" role="tab" aria-controls="course-description"
                            aria-selected="false">
                            Description
                        </button>
                        <button class="nav-link" id="course-instructor-tab" data-bs-toggle="tab"
                            data-bs-target="#course-instructor" type="button" role="tab" aria-controls="course-instructor"
                            aria-selected="false">
                            Instructor
                        </button>
                        <button class="nav-link" id="course-reviews-tab" data-bs-toggle="tab" data-bs-target="#course-reviews"
                            type="button" role="tab" aria-controls="course-reviews" aria-selected="false">
                            Reviews
                        </button>
                        </div>
                    </nav>

                    <div class="tab-content" id="myTabContent">
                    
                        <div class="tab-pane fade show active" id="course-curriculum" role="tabpanel"
                        aria-labelledby="course-curriculum-tab">
                        <div class="course-curriculum" id="box-card">
                            <h3 class="text-capitalize mb-4">Course curriculum</h3>
                        
                            <div class="accordion" id="accordion">
                            

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-1">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1">
                                    Section #1 Basic | 25 menit
                                </button>
                                </h2>
                                <div id="collapse-1" class="accordion-collapse collapse" aria-labelledby="heading-1"
                                data-bs-parent="#accordion">
                                <div class="accordion-body">
                                    <ul>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag HTML
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag heading
                                        <span>06:00</span>
                                    </li>

                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag form
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag ul li
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>

                            
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                    Section #2 Intermediate | 25 menit
                                </button>
                                </h2>
                                <div id="collapse-2" class="accordion-collapse collapse" aria-labelledby="heading-2"
                                data-bs-parent="#accordion">
                                <div class="accordion-body">
                                    <ul>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-3">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                                    Section #3 Advanced | 25 menit
                                </button>
                                </h2>
                                <div id="collapse-3" class="accordion-collapse collapse" aria-labelledby="heading-3"
                                data-bs-parent="#accordion">
                                <div class="accordion-body">
                                    <ul>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    <li>
                                        <i class="fas fa-play-circle"></i>
                                        Tag jangkar
                                        <span>06:00</span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>

                            
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="heading-4">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                                    Section #4 Project | 25 menit
                                </button>
                                </h2>
                                <div id="collapse-4" class="accordion-collapse collapse" aria-labelledby="heading-4"
                                data-bs-parent="#accordion">
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            <i class="fas fa-play-circle"></i>
                                            Tag jangkar
                                            <span>25:00</span>
                                        </li>
                                    </ul>

                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                        
                        <div class="tab-pane fade show active" id="course-description" role="tabpanel"
                        aria-labelledby="course-description-tab">
                        <div class="course-description-tab">
                            <div class="course-description-box" id="box-card">
                            <h3 class="text-capitalize">Description</h3>
                            <p id="deskripsi">
                                
                            </p>

                            <h4>Kenapa kamu mengambil kelas ini?</h4>
                            <p id="alasan">
                                
                            </p>
                            <h4>Kelas ini dibuat untuk siapa saja</h4>
                            <p id="target">
                                
                            </p>
                            </div>
                        </div>
                        </div>

                    
                        <div class="tab-pane fade show active" id="course-instructor" role="tabpanel"
                        aria-labelledby="course-instructor-tab">
                        <div class="course-instructor box" id="box-card">
                            <h3 class="mb-3 text-capitalize">Instructor</h3>
                            <div class="instructor-details">
                            <div class="details-wrap d-flex align-items-center flex-wrap">
                                <div class="left-box" id="box">
                                <div class="img-box" id="box">
                                    <img src="https://i.ibb.co/CVYGWrJ/reviewer-removebg-preview.png" alt="instructor img" />
                                </div>
                                </div>
                                <div class="right-box">
                                <ul>
                                    <h4>
                                    <span id="instruktur"></span> (<span id="course"></span>)
                                    </h4>
                                    <li>
                                    <i class="fas fa-star"></i>4.5 Rating
                                    </li>
                                    <li>
                                    <i class="fas fa-play-circle"></i>10 Course
                                    </li>
                                    <li>
                                    <i class="fas fa-certificate" ></i>3000 Reviews
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div class="text">
                                <p class="mb-0" id="info-ins">
                                
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    

                        <div class="tab-pane fade show active" id="course-reviews" role="tabpanel"
                        aria-labelledby="course-reviews-tab">
                        <div class="course-reviews box" id="box-card">
                        
                            <div class="rating-sumarry">
                            <h3 class="mb-4">Student Feedback</h3>
                            <div class="row">
                                <div class="col-md-4 d-flex align-items-center justify-content-center text-center">
                                <div class="rating-box">
                                    <div class="average-rating">4.6</div>
                                    <div class="average-stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div class="reviews">231 Reviews</div>
                                </div>
                                </div>
                                <div class="col-md-8">
                                <div class="rating-bars">
                                    
                                    <div class="rating-bars-item">
                                    <div class="star-text">5 Star</div>
                                    <div class="progress">
                                        <div class="progress-bar bar1" ></div>
                                    </div>
                                    </div>
                                    
                                    <div class="rating-bars-item">
                                    <div class="star-text">4 Star</div>
                                    <div class="progress">
                                        <div class="progress-bar bar2" ></div>
                                    </div>
                                    </div>
                                    
                                    <div class="rating-bars-item">
                                    <div class="star-text">3 Star</div>
                                    <div class="progress">
                                        <div class="progress-bar bar3"></div>
                                    </div>
                                    </div>
                                
                                    <div class="rating-bars-item">
                                    <div class="star-text">1 Star</div>
                                    <div class="progress">
                                        <div class="progress-bar bar4" ></div>
                                    </div>
                                    </div>
                                
                                </div>
                                </div>
                            </div>
                            </div>
                        
                            <div class="reviews-filter"></div>
                            
                            <div class="reviews-list">
                        

                            <div class="reviews-item">
                                <div class="img-box" id="reviewer">
                                <img src="https://i.ibb.co/CVYGWrJ/reviewer-removebg-preview.png" alt="review img" />
                                </div>
                                <div class="Dionisius">
                                <h4>Dionisius</h4>
                                <div class="stars-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="date">1 week ago</span>
                                </div>
                                <p>
                                    Sangat bagus. aku belajar disini dan penyampaian
                                    materi mudah untuk dipahami
                                </p>
                                </div>
                            </div>
                            
                            <div class="reviews-item">
                                <div class="img-box" id="reviewer">
                                <img src="https://i.ibb.co/CVYGWrJ/reviewer-removebg-preview.png" alt="review img" />
                                </div>
                                <div class="Dionisius">
                                <h4>Dionisius</h4>
                                <div class="stars-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="date">1 week ago</span>
                                </div>
                                <p>
                                    Sangat bagus. aku belajar disini dan penyampaian
                                    materi mudah untuk dipahami
                                </p>
                                </div>
                            </div>
                            

                            <div class="reviews-item">
                                <div class="img-box" id="reviewer">
                                <img src="https://i.ibb.co/CVYGWrJ/reviewer-removebg-preview.png" alt="review img" />
                                </div>
                                <div class="Dionisius">
                                <h4>Dionisius</h4>
                                <div class="stars-rating">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="date">1 week ago</span>
                                </div>
                                <p>
                                    Sangat bagus. aku belajar disini dan penyampaian
                                    materi mudah untuk dipahami
                                </p>
                                </div>
                            </div>
                        
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    <div class="col-lg-4">
                    

                    <div class="course-sidebar box" id="box-card">
                        <div class="img-box position-relative" id="">
                        <img alt="thumbnail img" id="img-tb" />
                        <h4 class="text-center">HTML Dasar</h4>
                        </div>
                        <div class="price d-flex align-items-center mb-3">
                        <span class="price-old text-decoration-line-through">Rp.500.000</span>
                        <span class="price-new" id="price"></span>
                        <span class="price-discount"> Discount</span>
                        </div>
                        <h3 class="mb-3">Course feature</h3>
                        <ul class="features-list">
                        <li>Total 15 lessons</li>
                        <li>Other feature</li>
                        <li>Other feature</li>
                        <li>Other feature</li>
                        </ul>
                        <div class="btn-wrap">
                        <button type="button" class="btn btn-theme btn-block" onclick="{paymentHandler()}">
                            Beli Sekarang
                        </button>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default DetailClass;