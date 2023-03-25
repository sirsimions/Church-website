import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './ministry.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup(){

    const [name, setName]=useState('')
    const [password, setPassword]=useState('')
    const[confirmpassword, setConfirmPasword]=useState('')
    const Navigate = useNavigate()

    const styles = {
        paperContainer: {
            height: 657,
            backgroundImage: `url(${"https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=600"})`
        }
    };


    function handleSubmit(){
        fetch('/signup',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({name, password, confirmpassword})
        }
        )
        .then(res=>res.json())
        .then(data=>{console.log(data)})

    }
    return (
        <>
        <div class="container">
                <div class="row justify-content-center" id='frame' >
                    <div class="col-md-5">
                        <div class="card">
                            <h2 class="card-title text-center">Pastor Signup <a href="http://opensnippets.com"></a></h2>
                            <div class="card-body py-md-4"id='form'>
                                <form _lpchecked="1" className='form' onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="name" placeholder="First Name" />
                                    </div>
                                    <div class="form-group">
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <input value={confirmpassword} onChange={(e)=>setConfirmPasword(e.target.value)} type="password" class="form-control" placeholder="Confirm your password" />
                                    </div>
                                    
                                    <div class="d-flex flex-row align-items-center justify-content-between">
                                        <small>Already registered?</small>
                                        <a href='/login'>Login</a>
                                    </div>
                                    <button id='upbut'>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button id='but' onClick={()=>Navigate('/departments')}>Go Back</button>

            <div className='bgimage' style={styles.paperContainer}></div>
        </>
    )
}
export default Signup;