import React from 'react';
import './Sidebar.css';
import Button from '@material-ui/core/Button';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import SidebarOptions from './SidebarOptions';
import InboxRoundedIcon from '@material-ui/icons/InboxRounded';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime' 
import LabelImportantIcon from '@material-ui/icons/LabelImportant' 
import NoteIcon from '@material-ui/icons/Note' 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore' 
import NearMeRoundedIcon from '@material-ui/icons/NearMeRounded';
import PersonIcon from '@material-ui/icons/Person' 
import DuoIcon from '@material-ui/icons/Duo' 
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from '@material-ui/core/IconButton'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddRoundedIcon fontSize='large'/>}
                className='sidebar__compose'>
                Compose
            </Button>

            <SidebarOptions Icon={InboxRoundedIcon} title={'Inbox'} number={54} selected={true}/>
            <SidebarOptions Icon={StarIcon} title={'Starred'} number={17} selected={false}/>
            <SidebarOptions Icon={AccessTimeIcon} title={'Snoozed'} number={7} selected={false}/>
            <SidebarOptions Icon={LabelImportantIcon} title={'Important'} number={4} selected={false}/>
            <SidebarOptions Icon={NearMeRoundedIcon} title={'Sent'} number={34} selected={false}/>
            <SidebarOptions Icon={NoteIcon} title={'Draft'} number={5} selected={false}/>
            <SidebarOptions Icon={ExpandMoreIcon} title={'More'} number={''} selected={false}/>

            <div className='sidebar__footer'>
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Sidebar
