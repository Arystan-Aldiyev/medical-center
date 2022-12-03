import { useLocation, useNavigate } from 'react-router-dom';
import React from "react";
import "./index.css"
import { ReactComponent as NotifOn } from '../../assets/notifOn.svg';
import { ReactComponent as NotifOff } from '../../assets/notifOff.svg';
import { ReactComponent as CVreview } from '../../assets/CV-review.svg'
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'
import { ReactComponent as ParamsIcon } from '../../assets/ParamsIcon.svg'
import SubHeader from '../subheader'

const Header = ({ currUserData, itemToSearch, setItemToSearch, notif }) => {

    const navigate = useNavigate();
    const logOut = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/api/logout", {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        navigate("/")
        window.location.reload()
    }

    const location = useLocation()
    const search = location.pathname === '/'

    return (
        <>
            <div className="pagesHeader">
                <div className='headerContents'>
                    <CVreview onClick={() => navigate('/')} className="cv-review" />
                    {search ? (
                        <div className='searchDiv'>
                            <SearchIcon className='searchIcon' />
                            <input className='searchBox' type='text' placeholder='Search...' value={itemToSearch} onChange={(e) => { setItemToSearch(e.target.value) }} />
                            <ParamsIcon className='paramsIcon' />
                        </div>
                    ) : (
                        <div className='searchDiv hidden'>
                            <SearchIcon className='searchIcon' />
                            <input className='searchBox' type='text' placeholder='Search...' value={itemToSearch} />
                            <ParamsIcon className='paramsIcon' />
                        </div>
                    )}

                    {currUserData ? (
                        <>
                            {notif ? (
                                <NotifOn onClick={() => navigate(`/reviews`, { state: { postId: currUserData.postId } })} className='rigth-header-panel' />
                            ) : (
                                <NotifOff onClick={() => navigate(`/reviews`, { state: { postId: currUserData.postId } })} className='rigth-header-panel' />
                            )}
                            {/* Временно поставил логаут в саппорт для тестинга */}
                            <h2 className='rigth-header-panel underline' onClick={() => logOut()}>Support</h2>
                            <a href='/account-preferences' className='profile-header'>
                                <h2 className='rigth-header-panel underline'>{currUserData.name} {currUserData.surname}</h2>
                                <img src={currUserData.pfp_url} className="mini-photo" />
                            </a>
                        </>
                    ) : (
                        <>
                            <NotifOff onClick={() => navigate(`/login`)} className='rigth-header-panel hidden' />
                            <a href='/login'><h2 className='rigth-header-panel underline'>Login</h2></a>
                            <a href='/register' className='profile-header'>
                                <h2 className='rigth-header-panel underline'>Register</h2>
                            </a>
                        </>
                    )}
                </div>
            </div>
            {search && <SubHeader />}
        </>
    )
};

export default Header;