import React, { useState } from 'react'
import {addUser} from '../Reducer/userSlice'
import { useDispatch  , useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Create() {
    const [username, setUsername]= useState('') 
    const [email, setEmail]= useState('')
    const [contact, setContact]= useState('')
    const users =useSelector((state)=>state.users)
    const navigate =useNavigate()
    const dispatch = useDispatch('')

const handleCreate=(e)=>{
    e.preventDefault();
    dispatch(addUser({id:users[users.length -1].id +1, username: username,email:email, contact:contact}))
    navigate('/manage')
    
}
  return (
    <section className=" align-items-center vh-100" style={{backgroundImage: 'url("https://img.freepik.com/free-photo/modern-geometrical-wallpaper-with-round-lines_23-2148811528.jpg")', height: '100vh' , backgroundRepeat:'no-repeat', backgroundSize:'cover', overflowX:'hidden'}} >
    <div className="container justify-content-center align-items-center pt-5 h-100 w-50">
        <div className="card pb-5" style={{borderRadius: '1rem'}}>
             <div className="card-body p-4 p-md-5 text-black" >
                  <form onSubmit={handleCreate}>
                    <div className="d-flex align-items-center mb-3 pb-1 ">
                      <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                      <span className="h3 fw-bold mb-0">Add Employee</span>
                    </div>
                    <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Add Employee</h5>
                    <div className="form-outline mb-4">
                      <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="Name">Name</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="Email">Email address</label>
                    </div>
                    <div className="form-outline mb-4">
                      <input type="number" id="contact" value={contact} onChange={(e)=>setContact(e.target.value)} className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="Contact">Contact Number</label>
                    </div>
                    <div className="pt-1 mb-4">
                      <button className="btn btn-dark btn-lg btn-block w-100" type="submit">ADD </button>
                    </div>
                   </form>
                </div>
            </div>
          </div>
  </section>
  )
}

export default Create