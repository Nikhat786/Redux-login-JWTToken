import React, { useState } from 'react'
import {updateUser} from '../Reducer/userSlice'
import { useDispatch  , useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import  faArrowRotateLeft   from '@fortawesome/free-solid-svg-icons'
function Update() {
  const {id} =useParams()
    
    const users =useSelector((state)=>state.users)
    console.log(users)
    const existingEmp= users.filter(f => f.id == id)
    console.log(existingEmp)
    const {username, email, contact} = existingEmp[0]
    const [up_username, setUsername]= useState(username) 
    const [up_email, setEmail]= useState(email)
    const [up_contact, setContact]= useState(contact)

    const navigate =useNavigate()
    const dispatch = useDispatch('')

    const handleUpdate=(e)=>{
      e.preventDefault();
      debugger
      dispatch(updateUser({id:id, username: up_username,email:up_email, contact:up_contact}))
      navigate('/manage')
      
  }
  return (
    <section className=" align-items-center vh-100" style={{backgroundImage: 'url("https://img.freepik.com/free-photo/modern-geometrical-wallpaper-with-round-lines_23-2148811528.jpg")', height: '100vh' , backgroundRepeat:'no-repeat', backgroundSize:'cover', overflowX:'hidden'}} >
    <div className="container justify-content-center align-items-center pt-5 h-100 w-50">
        <div className="card pb-5" style={{borderRadius: '1rem'}}>
             <div className="card-body p-4 p-md-5 text-black" >
                  <form onSubmit={handleUpdate}>
                    <div className="d-flex align-items-center mb-3 pb-1 ">
                      <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                      {/* <span className="h1 fw-bold mb-0">Update Employee</span> */}
                    </div>
                    <h2 className="fw-bold mb-3 pb-3" style={{letterSpacing: 1}}>Update Employee</h2>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Name">Name</label>
                      <input type="text" id="username" value={up_username} onChange={(e)=>setUsername(e.target.value)} className="form-control form-control-lg" />
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Email">Email address</label>
                      <input type="email" id="email" value={up_email} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg" />
                     
                    </div>
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="Contact">Contact Number</label>
                      <input type="number" id="contact" value={up_contact} onChange={(e)=>setContact(e.target.value)} className="form-control form-control-lg" />
                      
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

export default Update