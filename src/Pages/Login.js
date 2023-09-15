
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../Store/userSlice"
import { useNavigate } from "react-router-dom"



export const Login = () => {
    const [username, setEmail]= useState('') 
    const [password, setPassword]= useState('')
const {loading, error}=useSelector((state)=>state.user)

    const dispatch =useDispatch()
    const navigate =useNavigate
    const handleLogin=(e)=>{
        e.preventDefault();
        let userData={
            username, password
    }
  dispatch(loginUser(userData)).then((result)=>{
    console.log(result)
    debugger
    if(result.payload){
        setEmail('');
        setPassword('');
        navigate('/');
    }
  }) 
}
  return (
    <section className="vh-100" style={{backgroundColor: '#9A616D'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={handleLogin}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}} />
                    <span className="h1 fw-bold mb-0">TECHNOSIVE</span>
                  </div>
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 1}}>Sign into your account</h5>
                  <div className="form-outline mb-4">
                    <input type="email" id="username" value={username} onChange={(e)=>setEmail(e.target.value)} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="Email">Email address</label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="Password">Password</label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">{loading?'Loading...':'Login'}</button>
                  </div>
                  { error&&(
                    <div className='alert alert-danger' role='alert'>{error}</div>
                  )}
                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
export default Login