import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  return (
    <div className='header'>
      
      <div className='header__left'>
        <MenuIcon/>
        <img 
          className='header__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' 
          alt=''
        />
      </div>

      <div className='header__input'>
        <input placeholder='Search' type='text' />
        <SearchIcon className='header__inputButton' />
      </div>
      
      <div className='header__icons'>
        <VideoCallIcon className='header__icons' />
        <AppsIcon className='header__icons' />
        <NotificationsIcon className='header__icons' />
        <Avatar
          src='https://lh3.googleusercontent.com/ogw/ADGmqu9GElmcJVjw3GzbcE1wI1U9xhBf4fVroMKcCYsX=s192-c-mo' 
          alt='einsvision'
        />
      </div>

    </div>
  )
}

export default Header