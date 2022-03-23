import React from 'react'

  

 const Page=()=> {
  const handleClick=()=>{
    const judul= document.getElementById('input-title').value;
    
    alert(`judulnya adalah ${judul}`)
  }
  return (
    <div className='Playlist'>
        
      <form className='form-input'>
         <h1 className='title'>Create Playlist</h1>
         <label className='title-txt'>Title</label>
         <input type='text' id='input-title'></input>
         <br/>
         <label className='description-label'>Description</label>
         <textarea id='description-input'></textarea>
         <br/>
         <button onClick={handleClick}id="btn-submit">Submit</button>

      </form>
    </div>
  )
}
export default Page;