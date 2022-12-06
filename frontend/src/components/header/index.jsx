import React from "react";
import "../index.css"

const Header = ({ userInfo }) => {
    console.log(userInfo)
    return (
        <div className="header">
            {userInfo && userInfo !== 'none' ? (
                <a href='/about' className='about'>Medica inc.</a>
            ) : (
                <a href='#about' className='about'>Medica inc.</a>
            )}
            <div className='right-header'>
                <a href='#contacts' >Contacts</a>
                <a href='#services'>Procedures</a>
                {userInfo && userInfo !== 'none' ? (
                    <a href='/'>{userInfo.name} {userInfo.surname}</a>
                ) : (
                    <a href='/login'>Login</a>
                )}
            </div>
        </div>
    )
};

export default Header;