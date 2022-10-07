import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <>
    <h1> CARD </h1>
        <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <h3 className='ms-3 mt-3 text-secondary text-decoration-underline'>Deals</h3>
            <ul className='list-unstyled ms-3'>
              <Link to='#' className='text-decoration-none text-success fw-bold fs-5'><li>Deals of the Day</li></Link>
              <Link to='#' className='text-decoration-none text-success fw-bold fs-5'><li>Flash Sales</li></Link>
              <Link to='#' className='text-decoration-none text-success fw-bold fs-5'><li>Most Popular</li></Link>
            </ul>

            <h3 className='ms-3 mt-3 text-secondary text-decoration-underline'>Departments</h3>
            <div className="form-check ms-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label fw-bold fs-5" htmlFor="flexCheckDefault">Beauty</label>
            </div>
            <div className="form-check ms-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
              <label className="form-check-label fw-bold fs-5" htmlFor="flexCheckDefault">Health</label>
            </div>
            <div className="form-check ms-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
              <label className="form-check-label fw-bold fs-5" htmlFor="flexCheckDefault">Home</label>
            </div>
            <div className="form-check ms-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
              <label className="form-check-label fw-bold fs-5" htmlFor="flexCheckDefault">Mobile</label>
            </div>
            <div className="form-check ms-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
              <label className="form-check-label fw-bold fs-5" htmlFor="flexCheckDefault">Laptops</label>
            </div>



          </div>
          <div className='col-md-9'>
            <h3 className='ms-3 mt-3 text-secondary text-decoration-underline'>EMPLOYEES</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <img src="./image/img.png" class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Employee-one</h5>
                      <p className="card-text text-truncate">This is first Employee.</p>
                      <button className='btn btn-warning form-control'>Add to Cart</button>
                    </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./image/img.png" class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Employee-Two</h5>
                      <p className="card-text text-truncate">This is second Employee.</p>
                      <button className='btn btn-warning form-control'>Add to Cart</button>
                    </div>
                </div>
              </div><div className="col">
                <div className="card">
                  <img src="./image/img.png" class="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">Employee-Three</h5>
                      <p className="card-text text-truncate">This is third Employee</p>
                      <button className='btn btn-warning form-control'>Add to Cart</button>
                    </div>
                </div>
              </div>
              
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card