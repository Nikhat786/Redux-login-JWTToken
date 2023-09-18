import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../Reducer/userSlice'

function Manage() {
  const users= useSelector((state) =>state.users)
  // const navigate =useNavigate()
  const dispatch =useDispatch()
  const handleDeleteUser= (id)=>{
   dispatch(deleteUser({id:id}))
}


  console.log(users)
  return (
    <section className=" align-items-center vh-100" style={{backgroundImage: 'url("https://img.freepik.com/free-photo/modern-geometrical-wallpaper-with-round-lines_23-2148811528.jpg")', height: '100vh' , backgroundRepeat:'no-repeat', backgroundSize:'cover', overflowX:'hidden'}} >
    <div className='container'>
    
    {/* <Link to='/create' className='btn btn-success my-3'>Create +</Link> */}
    <div className="card pb-5 my-3" style={{borderRadius: '1rem'}}>
    <div className="card-header">
    <h3>User List  <Link to='/create' className='btn btn-success' style={{alignItems:'right'}}>Create +</Link></h3>
    {/* <Link to='/create' className='btn btn-success my-3'>Create +</Link> */}
  </div>
    <div className="card-body p-4 p-md-5 text-black" >
     <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Contact no</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
           {users.map((user, index)=>(
              <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>

             <td >
             <Link to={`/edit/${user.id}`} className='btn btn-md btn-primary py-2 me-4'>Edit</Link>

             <button onClick={()=>handleDeleteUser(user.id)} className='btn btn-md btn-danger py-2 ms-4'>Delete</button>
             </td>
              </tr>
           ))}
          
        </tbody>
        </table>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Manage