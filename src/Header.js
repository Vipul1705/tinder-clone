import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
            </IconButton>
            <img className='header_icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVkc9rwEpfFBhIBJi75cfy0POfWPulRvLfwZbJMqYMT2UmDFDhB_B1kxIMKWGHFvhjyA&usqp=CAU" alt='tinder'/>
            <IconButton>
                <ChatIcon fontSize='large' className='chat_icon'/>
            </IconButton>
        </div>
    )
}

export default Header