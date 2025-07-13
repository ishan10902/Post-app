import React from 'react'
import Navbar from './Navbar'

const AddPost = () => {
  return (
    <div>
        <Navbar/>
        <h1 align="center">ADD POST</h1>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>USERID</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className='form-label'>ID</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                            <label htmlFor="" className='form-label'>TITLE</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                            <label htmlFor="" className='form-label'>BODY</label>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                            <button className="btn btn-success">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost