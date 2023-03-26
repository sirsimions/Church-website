import React from 'react'
import { useState, useRef } from 'react';
import './ministry.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Upload(){

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [file, setFile] = useState(null)

  
  const styles = {
    paperContainer: {
        height: 657,
        backgroundImage: `url(${"https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=600"})`
    }
};

  function handleSubmit(){
       fetch('/sermon',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({title, date, file})
       }).then(res=>{
        if(res.ok){
          res.json().then(data=>{
            console.log(data)
          })
      }
    })     
  }

    return(

      <>
        <div class="container">
                <div class="row justify-content-center" id='frame' >
                    <div class="col-md-5">
                        <div class="card">
                            <h2 class="card-title text-center">Upload Video <a href="http://opensnippets.com"></a></h2>
                            <div class="card-body py-md-4"id='form'>
                                <form _lpchecked="1" className='form' onSubmit={handleSubmit}>
                                    <div class="form-group">
                                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" class="form-control" id="name" placeholder="Title" />
                                    </div>
                                    <div class="form-group">
                                        <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" class="form-control" placeholder="Date" />
                                    </div>
                                    <div class="form-group">
                                        <input value={file} onClick={(e)=>setFile(e.target.files[0])} type="file" class="form-control" placeholder="video file" />
                                    </div>
                                    <button id='upbut'>Upload</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className='bgimage' style={styles.paperContainer}></div>
        </>
    )
}
export default Upload;