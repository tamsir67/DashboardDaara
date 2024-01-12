import React from 'react'
import 
{BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsJournalPlus, BsDribbble}
 from 'react-icons/bs'
 import logo from './logo.jpeg'

export default function Sidebar({openSidebarToggle, OpenSidebar}) {
  

        return (
            <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
                <div className='sidebar-title'>
                    <div className='sidebar-brand'>
                        <BsDribbble  className='icon_header'/> <h1>Daara IT</h1>
                    </div>

                    <div className="Tilt-inner login100-pic" data-tilt>
                    <img src={logo}
                        alt="image" />
                    </div>

                    <span className='icon close_icon' onClick={OpenSidebar}>x</span>
                </div>
        
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsGrid1X2Fill className='icon'/> Dashboard
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsFillArchiveFill className='icon'/> Administration
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsFillGrid3X3GapFill className='icon'/> Professeurs
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsPeopleFill className='icon'/> Etudiants
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsListCheck className='icon'/> Classes
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsMenuButtonWideFill className='icon'/> Modules
                        </a>
                    </li>
                    <li className='sidebar-list-item'>
                        <a href="">
                            <BsFillGearFill className='icon'/> Parametres
                        </a>
                    </li>
                </ul>
            </aside>
          )
        }
        
        
