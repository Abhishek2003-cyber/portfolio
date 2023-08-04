import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from 'react-router-dom';
export default function ShowPortfolio() {
  return (
   <div className='container-fluid mt-2 bg-dark'>
        <div className='row'>
                <div id="carouselExampleControls" className="carousel slide mt-2" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="image/frontend.jpg" className="d-block w-100" alt="..." height={450} />
                        </div>
                        <div className="carousel-item">
                            <img src="image/datascience.jpg" className="d-block w-100" alt="..." height={450} />
                        </div>
                        <div className="carousel-item">
                            <img src="image/dsa.jpeg" className="d-block w-100" alt="..." height={450} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
        <div className='row my-4 text-center'>
            <div className='col-md-4'>
                <div className="card h-100" >
                <img src="image/task1.png" class="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">TASK1</h5>
                        <p className="card-text">First Component</p>
                        <Link class="btn btn-primary" to="/firstcomponent">Click Here</Link>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="card h-100">
                <img src="image/task2.png" class="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">TASK 2</h5>
                        <p className="card-text">Demo</p>
                        <Link  class="btn btn-primary" to="/demo">Click Here</Link>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="card h-100">
                <img src="image/task3.png" class="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">TASK 3</h5>
                        <p className="card-text">Expression Evaluation</p>
                        <Link  class="btn btn-primary" to="/expression">Click Here</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='row my-4 text-center'>
            <div className='col-md-4'>
                    <div className="card h-100" >
                    <img src="image/task4.png" class="card-img-top" alt="..." height="200px"/>
                        <div className="card-body">
                            <h5 className="card-title">TASK 4</h5>
                            <p className="card-text">Add Product</p>
                            <Link  class="btn btn-primary" to="/product">Click Here</Link>
                        </div>
                    </div>
            </div>
        
            <div className='col-md-4'>
                <div className="card h-100" >
                <img src="image/task5.png" class="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">TASK 5</h5>
                        <p className="card-text">Gallery 1</p>
                        <Link  class="btn btn-primary" to="/gallery1">Click Here</Link>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="card h-100" >
                <img src="image/task6.png" class="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">TASK 6</h5>
                        <p className="card-text">Inline Css</p>
                        <Link  class="btn btn-primary" to="/inlinecss">Click Here</Link>
                    </div>
                </div>
            </div>

        </div>
        <div className='row my-4 text-center'>
            <div className='col-md-4'>
                <div className="card h-100" >
                <img src="image/task7.png" class="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">TASK 7</h5>
                        <p className="card-text">Like Dislike</p>
                        <Link  class="btn btn-primary" to="/likedislike">Click Here</Link>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className="card h-100" >
                <img src="image/task8.png" class="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">TASK 8</h5>
                        <p className="card-text">To do List</p>
                        <Link  class="btn btn-primary" to="/todolist">Click Here</Link>
                    </div>
                </div>
            </div>
           
        </div>
    
   </div>

    
  )
}

