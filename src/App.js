import React, { useState , useRef} from 'react';
import './App.css';
function App() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const passref = useRef(0);
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email, password)
    if(!email || !password){
      alert("email or password is empty")
    }
  }
  const passHandler = (e) => {
    if(e.length < 5){
      passref.current.style.backgroundColor = "red";
    }else if(e.length < 10){
      passref.current.style.backgroundColor = "orange";
    }else{
      passref.current.style.backgroundColor = "green";
    }
  }
  return (
    <>
      <div className='skew'></div>
      <div class="box">
        <div className='leftdiv'>
        <div className="innerskew"> </div> 
          <div className='leftDetails'>
          </div >
        </div>
        <div className="rightdiv">
          <form onSubmit={submitHandler} className='login-form'>
            <label >Your email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'></input>
            <label>Password</label>
            <input  ref={passref}  type="text" onChange={(e) =>
              passHandler(e.target.value)
            } placeholder='Enter your password'></input>
            <div className='third-sec'>
              <div className='remeberme'>
                <input type="checkbox"></input>
                <span>Remeber me</span>
              </div>
              <a href="">Forget password</a>
            </div>
            <button type="submit">SIGN IN</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

