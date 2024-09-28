import React from 'react'
import { Link } from 'react-router-dom'

function Footerone() {
  return (
    <div>
        <div className="container-fluid footer_sec">
        <div className="row footer_sec2">
            <div className="col-md-3">
            <div className='footer_head_1'>
                company
            </div>
            <div className='links'>
            <ul>
              <li> <Link  className='linkcolor' to="Aboutus"> ABOUT US</Link> </li>
              <li> <Link className='linkcolor'>  PRESS RELEASE</Link> </li>
              <li> <Link className='linkcolor'>  EMPLOYEE WELLNESS</Link> </li>
              <li> <Link className='linkcolor'>  PRIVACY POLICY</Link> </li>
              <li> <Link className='linkcolor' to="#">  TERMS & CONDITIONS </Link> </li>
              <li> <Link className='linkcolor'> PREFERRED VENDORS   </Link> </li>
              <li> <Link className='linkcolor'> CONTINUED OPERATIONS, ACCESSIBILITY AND MAINTENANCE</Link> </li>
            </ul>
            </div>
            
            </div>
            <div className="col-md-3">
            <div className='footer_head_1'>
                gyms
            </div>
            <div className='links'>
            <ul>
            <li> <Link className='linkcolor'> find a gym</Link> </li>
            <li> <Link className='linkcolor'> own a gym</Link> </li>
            <li> <Link className='linkcolor'> franchise login</Link> </li>
            </ul>  
            </div>

            </div>
            <div className="col-md-3">
            <div className='footer_head_1'>
                members
            </div>
            <div className='links'>
            <ul>
            <li> <Link className='linkcolor'> faqs</Link> </li>
            <li> <Link className='linkcolor' to="#">contact us</Link> </li>
            <li> <Link className='linkcolor'> events & gallary</Link> </li>
            </ul>
            
            </div>
            </div>
            <div className="col-md-3">
            <div className='social_links'>
            <ul>
              <li>
              <Link className='linkcolor'><i className="fa-brands fa-youtube"></i></Link>
              <Link className='linkcolor'><i className="fa-brands fa-facebook"></i></Link>
              <Link className='linkcolor'><i className="fa-brands fa-linkedin"></i></Link>
              <Link className='linkcolor'><i className="fa-brands fa-square-x-twitter"></i></Link>
              <Link className='linkcolor'><i className="fa-brands fa-instagram"></i></Link>
              </li>              
            </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footerone
