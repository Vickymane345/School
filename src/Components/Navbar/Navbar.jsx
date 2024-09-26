import React from 'react'
import logo from '../../assets/Navbar/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import image1 from '../../assets/CarouselImage/students.jpg'
const Navbar = () => {

    return (
        <div className='fixed top-0 w-full z-10'>
            <div className='flex items-center text-center justify-center bg-blue-900  '>
                <div>
                    <img className='w-10' src={logo} alt="" />
                </div>
                <div>
                    <h1 className='text-center font-bold text-2xl text-white '>BLOFFVILLE SCHOOL</h1>

                </div>
            </div>
            <nav
                className='shadow-2xl  py-3 px-4 w-100 flex items-center justify-between  bg-blue-700'>
                <div>
                    <img src={logo} className='w-20' alt=""/>
                </div>
                <ul className='flex space-x-8  cursor-pointer text-white '>
                    <li className='border-b-2 font-bold pb-1'>Home</li>
                    <li>About</li>
                    <li>
                        <NavDropdown title="Admission" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ADMISSION PROCEDURE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                APPLICATION FORM
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">APPLICATION DETAILS</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li>
                        <NavDropdown title="Facilities" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ADMISSION PROCEDURE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                APPLICATION FORM
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">APPLICATION DETAILS</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li>
                        <NavDropdown title="School" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">ADMISSION PROCEDURE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                APPLICATION FORM
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">APPLICATION DETAILS</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li>
                        Academics
                    </li>
                    <li>Boarding</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
