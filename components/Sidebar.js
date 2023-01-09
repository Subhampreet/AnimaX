import React from 'react';
import { AiFillGitlab, AiFillHeart, AiFillFire, AiOutlineDingding, AiTwotoneSetting, AiOutlineLogout } from "react-icons/ai";
import { FaSnapchatGhost, FaSkull, FaCat } from "react-icons/fa";


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='body'>
            <div className='logo'>ANIMA<span>X</span></div>
            <div className='menu'>
                <div className='menu-head'>MENU</div>
                <div className='menu-item active'>
                  <AiFillGitlab className='menu-icon' />
                  Top Anime
                </div>
                <div className='menu-item'>
                  <AiFillHeart className='menu-icon' />
                  Romance
                </div>
                <div className='menu-item'>
                  <AiFillFire className='menu-icon' />
                  Action
                </div>
                <div className='menu-item'>
                  <AiOutlineDingding className='menu-icon' />
                  Teen
                </div>
            </div>

            <div className='menu'>
                <div className='menu-head'>SOCIAL</div>
                <div className='menu-item'>
                  <FaSnapchatGhost className='menu-icon' />
                  Friends
                </div>
                <div className='menu-item'>
                  <FaSkull className='menu-icon' />
                  Parties
                </div>
                <div className='menu-item'>
                  <FaCat className='menu-icon' />
                  Media
                </div>
            </div>

            <div className='menu'>
                <div className='menu-head'>GENERAL</div>
                <div className='menu-item'>
                  <AiTwotoneSetting className='menu-icon' />
                  Settings
                </div>
                <div className='menu-item'>
                  <AiOutlineLogout className='menu-icon' />
                  Logout
                </div>                
            </div>
        </div>        
    </div>
  )
}

export default Sidebar