import React from 'react'
import {Link ,useNavigate} from 'react-router-dom'

function Header() {
  const islogeedIn= localStorage.getItem('Userdata')
  const navigate =useNavigate()
  const handlelogin=()=>{
    localStorage.setItem('Userdata',[])
    // navigate('/*')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid justify-content-between">
      {/* Left elements */}
      <div className="d-flex">
        {/* Brand */}
     <Link className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
          <img src="https://bigbuckclub.com/wp-content/uploads/2018/05/dummy-logo-3.png" height={50} alt="MDB Logo" loading="lazy" style={{marginTop: 2}} />
       </Link>
        {/* Search form */}
        <form className="input-group w-auto my-auto d-none d-sm-flex">
          <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search" style={{minWidth: 125}} />
          <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search" /></span>
        </form>
      </div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page"to='/'>Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" href="#">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Pricing</Link>
            </li> */}
            <li className="nav-item">
              {islogeedIn ?<Link className="nav-link" to='/manage'>Users</Link>:''}
            </li>
          </ul>
      {/* Center elements */}
      {/* Right elements */}
      <ul className="navbar-nav flex-row">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {!islogeedIn?<Link className="nav-link" to='/login'>Login</Link>: <Link className="nav-link" onClick={handlelogin} to='/'>Logout</Link>} 
        
        </li>
          </ul>
      </ul>
      {/* Right elements */}
    </div>
  </nav>
  )
}

export default Header