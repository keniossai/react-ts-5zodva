import React from 'react'
import Footer from './Footer'


function Main(){

  return (
    <>
      <div className="container">
      <h1>My Awesome react website</h1>
      <h3>Reason i love react</h3>
      <ol className='what'>
        <li>It is composable</li>
        <li>Was originally created by John Walke</li>
        <li>Has over 300k likes on github</li>
        <li>It is maintained by facebook</li>
      </ol>
    </div>
    <Footer />
    </>
  )
}

export default Main