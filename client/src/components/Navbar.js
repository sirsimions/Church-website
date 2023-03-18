import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './navbar.css'
import { NavLink, Link, useNavigate } from 'react-router-dom'

function Navbar() {

    return (
        <>
            <div className='logo'>𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖙𝖔 𝕮𝖍𝖆𝖕𝖊𝖑 𝖋𝖊𝖑𝖑𝖔𝖜𝖘𝖍𝖎𝖕 𝕸𝖎𝖓𝖎𝖘𝖙𝖗𝖎𝖊𝖘</div>
            <div className='moto'>John 8:32 tena mtaifahamu kweli, nayo hiyo kweli itawaweka huru</div>
            <div className='navs' id='nav'>
                <div className='navItem'><Nav.Link as={Link} to='/' className='links'> Home</Nav.Link></div>
                <div className='navItem'><Nav.Link as={Link} to='/departments' className='links'>Ministries</Nav.Link></div>
                <div className='navItem'><Nav.Link as={Link} to='/sermons' className='links'> Sermons</Nav.Link></div>
                <div className='navItem'><Nav.Link as={Link} to='/contacts' className='links'> Contacts</Nav.Link></div>
            </div>
        </>
    )
}
export default Navbar;