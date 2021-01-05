import React from 'react'
import { Checkbox, IconButton } from '@material-ui/core'
import './EmailList.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import './EmailList.css'
import Section from './Section'
import InboxIcon from '@material-ui/icons/Inbox'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import PeopleIcon from '@material-ui/icons/People'
import EmailRow from './EmailRow'


function EmailList() {
    return (
        <div className='emaillist '>

            <div className="emaillist__settings">
                <div className="emaillist__settingsleft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emaillist__settingsright">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emaillist__sections">
                <Section Icon={InboxIcon} title='Primary' color='red' selected={true} />
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8' selected={false} />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' selected={false} />
            </div>

            <div className="emailList__list">
                <EmailRow  
                    title='Twitch'
                    subject='Hey fellow streamer!!'
                    description='This is a test'
                    time='10pm' />
            </div>

        </div>
    )
}

export default EmailList
