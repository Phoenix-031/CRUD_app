import React from 'react'
import {AppBar,Toolbar,styled}  from '@mui/material'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <Header position='static'>
        <Toolbar>
            <Tabs to = '/'>Code for interview</Tabs>
            <Tabs to = '/all'>All Users</Tabs>
            <Tabs to = '/add'>Add User</Tabs>
        </Toolbar>
    </Header>
  )
}


const Tabs = styled(NavLink)`
font-size:20px;
margin-right:20px;
color:floralwhite;
text-decoration:none;
`

const Header = styled(AppBar)`
background:#0c1021;
`


export default Navbar
