import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
const Nav = (props)=>{
   return(
       <div className='navWrap'>
           <nav className='navBar row'>
               <div className='col-md-8'><h1 className='name'>Jacob Duden</h1></div>
               <div className='col-md-1 about'>
                   <Link to='/About'><button type="button" class="btn btn-secondary navBtn">About </button></Link>
               </div>
               <div className='col-md-1 resume'>
                   <Link to='/resume'><button type="button" class="btn btn-secondary navBtn">Resume</button></Link>
               </div>
               <div className='col-md-1 portfolio'>
                   <Link to='/portfolio'><button type="button" class="btn btn-secondary navBtn">Portfolio</button></Link>
               </div>
               <div className='col-md-1 contact'>
                   <Link to='/contact'><button type="button" class="btn btn-secondary navBtn">Contact</button></Link>
               </div>
           </nav>
       </div>
   )

}

export default Nav;