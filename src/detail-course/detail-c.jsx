import React from "react";
import "./style.css"
function DetailClass(){
    return(
        <div>
            
          <section className="course-details section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="course-header kotak">
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

                <nav className="course-tabs">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active border-0" id="course-curriculum-tab" data-bs-toggle="tab"
                        data-bs-target="#course-curriculum" type="button" role="tab" aria-controls="course-curriculum"
                        aria-selected="true">
                        Curriculum
                    </button>
                    <button className="nav-link" id="course-description-tab" data-bs-toggle="tab"
                        data-bs-target="#course-description" type="button" role="tab" aria-controls="course-description"
                        aria-selected="false">
                        Description
                    </button>
                    <button className="nav-link" id="course-instructor-tab" data-bs-toggle="tab"
                        data-bs-target="#course-instructor" type="button" role="tab" aria-controls="course-instructor"
                        aria-selected="false">
                        Instructor
                    </button>
                    <button className="nav-link" id="course-reviews-tab" data-bs-toggle="tab" data-bs-target="#course-reviews"
                        type="button" role="tab" aria-controls="course-reviews" aria-selected="false">
                        Reviews
                    </button>
                    </div>
                </nav>

                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="course-curriculum" role="tabpanel"aria-labelledby="course-curriculum-tab">
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
                        Section #4 Advanced | 25 menit
                      </button>
                    </h2>
                    <div id="collapse-4" class="accordion-collapse collapse" aria-labelledby="heading-4"
                      data-bs-parent="#accordion">
                      <div class="accordion-body">
                        <ul>
                          <li>
                            <i class="fas fa-play-circle"></i>
                            Tag jangkar
                            <span>06:00</span>
                          </li>
                        
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/*desc */}

                  <div class="tab-pane fade show active" id="course-description" role="tabpanel"
                    aria-labelledby="course-description-tab">
                    <div class="course-description-tab">
                            <div class="course-description-box" id="box-card">
                                <h3 class="text-capitalize">Description</h3>
                                <p id="deskripsi">
                                    {/*alasan di desc diAmbil data dari db */}
                                </p>
                                <h4>Kenapa kamu mengambil kelas ini?</h4>
                                <p id="alasan">
                                    {/*alasan di desc diAmbil data dari db */}
                                </p>
                                <h4>Kelas ini dibuat untuk siapa saja</h4>
                                <p id="target">
                                    {/*target di desc diAmbil data dari db */}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*desc course instructor start*/}
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
                                        <i class="fas fa-star" ></i>4.5 Rating
                                        </li>
                                        <li>
                                        <i class="fas fa-play-circle" ></i>10 Course
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









                            </div>
                        </div>
                    </div>
                </div>





                </div>
                <div className="col-lg-4">
                  <div className="course-sidebar kotak">
                    Sidebar
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default DetailClass