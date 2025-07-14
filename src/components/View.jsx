import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [posts,changePost]=useState(
        [
            
        ]
    )
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (response)=>{
          changePost(response.data)
        }
      ).catch()

    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <h1 align="center">POST VIEW</h1>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row g-3">
                            {posts.map(
                                (value,index)=>{
                                    return(
                                         <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card" >
                                                <div class="card-body">
                                                    <h5 class="card-title">USERID:{value.userId}</h5>
                                                    <p class="card-text">ID:{value.id}</p>
                                                    <p class="card-text">TITLE:{value.title}</p>
                                                    <p class="card-text">BODY:{value.body}</p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View