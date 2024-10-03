import React from 'react'
import logo from '../../assets/Navbar/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import image1 from '../../assets/CarouselImage/students.jpg'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp} from "react-icons/io5";

const Navbar = (props) => {
      const {toggleSideBarMenu} = props
      const {SideBarMenu} = props

    return (
        <div className='fixed  top-0 w-full z-50'>
            <div className='flex items-center px-8  border-b-2 bg-blue-900  '>
                <div className='md:block lg:hidden xl:hidden 2xl:hidden'>
                    <IoMdMenu className='cursor-pointer text-white' onClick={toggleSideBarMenu} size={40}/>
                </div>
                <div className='flex items-center m-auto  '>
                    <img className='w-10' src={logo} alt="" />
                        <h1 className='text-center font-bold lg:text-2xl text-white sm:text-sm text-xl md:text-2xl '>BLOFFVILLE SCHOOL</h1>

                </div>
              
            </div>
            <nav
                className={`${SideBarMenu ? "" : "hidden"}  lg:shadow-2xl  lg:py-3 md:px-0  lg:px-4 w-100 lg:flex items-center bg-blue-900`}>
                   <div className='lg:block sm:hidden hidden md:hidden'>
                      <img src={logo} className='w-20' alt="" />

                   </div>
                 
                <ul className='  lg:flex lg:m-auto lg:space-x-8  cursor-pointer  text-white '>
                     <IoCloseSharp
                onClick={() => {
                props.SideBarMenu
                    ? props.setSideBarMenu(false)
                    : props.setSideBarMenu(true)
            }}
                className='cursor-pointer md:block xl:hidden lg:hidden '/>
                    <li className='lg:border-b-2 font-bold pb-1'>Home</li>
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
