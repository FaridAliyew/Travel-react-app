import React from 'react'

function Header() {
  return (
    <>
      <div className='container-fluid bg-img'>
        <div className='row'>
          <div className='col-12'>
            <nav className='p-3 d-flex justify-content-start justify-content-md-evenly'>
              <li className='w-50 ps-5 fs-4'>Travel.co</li>
              <li className='me-4 text-white d-none d-md-block'>HOME</li>
              <li className='text-white d-none d-md-block'>BLOG</li>
              <li className='mx-4 text-white d-none d-md-block'>CONTACTS</li>
              <li className='text-white d-none d-md-block'>PAGE 1</li>
              <li className='mx-4 text-white d-none d-md-block'>PAGE 3</li>
            </nav>
          </div>
        </div>

        <div className='row'>
          <div className='col-8 d-flex justify-content-evenly travel-tags'>
            <div className='text-white'>
              <h2 className='travel'>Travel</h2>
              <p className='w-50 fs-5 my-4'>Here are my favorite travel and adventure quotes, paired with images from my journeys around the world.</p>
              <button className='btn text-white ps-3 pe-3 pt-2 pb-2'>read more</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Header