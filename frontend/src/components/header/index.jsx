import React from "react";
import "../index.css"

const Header = ({ userInfo }) => {
    return (
        <div className="header">
            {userInfo === 'none' ? (
                <a href='#about' className='about'>Medica inc.</a>
            ) : (
                <a href='/about' className='about'>Medica inc.</a>
            )}
            <div className='right-header'>
                <a href='#contacts' >Contacts</a>
                <a href='#procedures'>Procedures</a>
                {userInfo === 'none' ? (
                    <a href='/login'>Login</a>
                ) : (
                    <a href='/'>Bekzhan pitonist</a>
                )}
            </div>

        </div>
    )
};

export default Header;