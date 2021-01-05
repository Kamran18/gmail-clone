import React from 'react'
import './Header.css';
import { Avatar, IconButton }from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuRoundedIcon/>
                </IconButton>
                <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/Google_Gmail_New_Logo_India_To_1200x768.jpeg?WgdQ3Tx7r4ZssTpgfxm1Iwb5KMAG8S4A&size=770:433"
                    alt="Gmail"/>
            </div>

            <div className="header__middle">
                <SearchRoundedIcon/>
                <input type="text" placeholder='Search mail' name="" id=""/>
                <ArrowDropDownRoundedIcon className='header__inputCaret'/>
            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsRoundedIcon/>
                </IconButton>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
