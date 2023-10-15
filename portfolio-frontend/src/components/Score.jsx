"use client";
import React , {useState} from 'react';

const Score = () => {

  const [score, setScore] = useState(0);
  const obj = {
    hi: 'hello'
  }

  const submit = (e) => {
    e.preventDefault();
    const file = document.getElementById('file').files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL+'/add', {
      method: 'POST',
      body: formData
    }).then(res => res.json())
      .then(data => {
        setScore(data.score);
      })
  }
  return (
    <div className='score'>
      <h4 style={{textAlign:"center"}}>Upload your resume to check score</h4>
      <form onSubmit={submit} className='form'>
        <input type="file" id='file' name="upload" multiple={false} accept="application/pdf,application/vnd.ms-excel" />
        <input type="submit" id="btn" value="Check Score" />
      </form>
      <h5 style={{textAlign:"center"}} >{ score!=0 ? "Your resume score is "+score : null} {score==40 ? '(average)' : score>40 && score<=50 ? "(Good)" : score>50 ? "(excellent)" :null}</h5>
    </div>
  )
}

export default Score;
