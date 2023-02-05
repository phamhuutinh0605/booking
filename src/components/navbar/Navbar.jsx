import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
                <span className="logo">Tingbooking.com</span>
            <div className="navItems">
                <button className='navBtn'>Đăng ký</button>
                <button className='navBtn'>Đăng nhập</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar