
import React from 'react'
import './HeaderJs.css'
import jiralogo from "../assets/pngwing.com.png"
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeaderJs = () => {
  return (
   //Header Start
   <header className='header'>
        <div className='container'>
            <div className='roww'>
                <div className='header-item item-left'>
                    <div className='logo logo-items'>
                         {/* <i class="bi bi-grid-3x3-gap" style={{ fontSize: '2rem',padding:"1px",margin:"1px" }}></i> */}
                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-grid-3x3-gap" viewBox="0 0 16 16">
                            <path d="M4 2v2H2V2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 2v2H7V2zm5 0v2h-2V2zM4 7v2H2V7zm5 0v2H7V7zm5 0h-2v2h2zM4 12v2H2v-2zm5 0v2H7v-2zm5 0v2h-2v-2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"/>
                         </svg>
                        
                         <Link to="/"><img src= {jiralogo} alt="jiralogo" width="40" className='p-1 m-1'/></Link>
                         <h4>Jira Software</h4>
                    </div>
                </div>
                {/* Menu Start Here */}
                <div className='header-item item-center'>
                    <nav className='menu'>
                        <ul className='menu-main'>
                            <li>Your Work</li>
                           <li className='menu-items-has-children'> <Link to='/projects' style={{ textDecoration: 'none' ,color:"inherit"}}>Projects</Link>
                            <i class="bi bi-chevron-down"></i>
                            
                                <div className='sub-menu single-column-menu'>
                                    <ul>
                                        <li>Project1</li>
                                        <li>Project2</li>
                                        <li>Project3</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='menu-items-has-children'>Filter
                            <i class="bi bi-chevron-down"></i>
                            
                            <div className='sub-menu single-column-menu'>
                                <ul>
                                    <li>Filter 1</li>
                                    <li>Filter 2</li>
                                    <li>Filter 3</li>
                                </ul>
                            </div>
                            </li>
                            <li className='menu-items-has-children'>DashBoards
                            <i class="bi bi-chevron-down"></i>
                            
                                <div className='sub-menu single-column-menu'>
                                    <ul>
                                        <li>DashBoard1</li>
                                        <li>DashBoard2</li>
                                     
                                    </ul>
                                </div>
                            </li>
                            <li className='menu-items-has-children'>Teams
                            <i class="bi bi-chevron-down"></i>
                            
                                <div className='sub-menu single-column-menu'>
                                    <ul>
                                         <li>App</li>
                                    </ul>
                                </div>
                            </li>
                            <li className='menu-items-has-children'>Apps
                            <i class="bi bi-chevron-down"></i>
                            
                                <div className='sub-menu single-column-menu'>
                                    <ul>
                                       
                                        <li>Slack</li>
                                        <li>Teams</li>
                                        <li>iMessage</li>
                                       
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </nav>

                </div>
                  {/* Menu End Here */}
                <div className='header-item item-right'>
                    <div className='right-items'>
                     <Form.Control size="sm" type="search" style={{width:"200px"}} placeholder="🔍  Search" />
                     <i class="bi bi-bell-fill" ></i>
                     <i class="bi bi-question-circle-fill" ></i>
                     <i class="bi bi-gear-wide" ></i>
                     <i class="bi bi-person-circle"></i>
                  </div>
                </div>

            </div>
        </div>
   </header>
   //Header End
  )
}

export default HeaderJs