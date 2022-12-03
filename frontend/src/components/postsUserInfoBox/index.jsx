import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./index.css";
import { ReactComponent as StatsIcon} from '../../assets/stats_icon.svg'
import { ReactComponent as TokenIcon} from '../../assets/token_icon.svg'
import { ReactComponent as PlusIcon} from '../../assets/plus_icon.svg'
import {LazyLoadImage} from "react-lazy-load-image-component";
import LoadingSpinner from "../loading";

const UserInformationBox = ({currUserData}) => {
    const navigate = useNavigate();
    return (
        <div className="leftBox">
            {typeof currUserData !== "undefined" ? <div>
                <div className="userProfileBox">
                    <div className={"lefBox-loading-spinner"} id={"lefBox-loading-spinner"}><LoadingSpinner/></div>
                    <div className="profile" onClick={() => navigate("/account-preferences")}>    
                        <LazyLoadImage src={currUserData.pfp_url} afterLoad={()=>{document.getElementById("lefBox-loading-spinner").style.display = "none";}}
                            id={"user-profile-loading-spinner"}
                            alt=""
                            effect={"blur"}
                            visibleByDefault={true}
                            className={"profile-img"}/>

                        <div className="hrefBox">
                            <div style={{fontSize: "20px",fontWeight:"600", marginBottom:"5px"}}>{currUserData.name} {currUserData.surname}</div>
                            <div style={{fontSize: "14px",fontWeight:"500", marginBottom:"5px"}}><StatsIcon/> Top 21</div>
                            <div style={{fontSize: "20px",fontWeight:"600", marginBottom:"5px"}}>Backend Dev</div>
                            <div className="balance">Balance: <b style={{color:"black"}}>{currUserData.balance}</b><TokenIcon/> </div>  
                        </div>
                    </div>
                    <div className="CVcompletness">
                        <div style={{fontSize: "20px",fontWeight:"600", marginTop:"25px"}}>CV competence</div>
                        <div style={{fontSize: "20px",fontWeight:"500", marginBottom:"5px"}}>Add more details to your CV</div>
                        <div className="yellow"></div>
                        <div className="white"></div>
                        <div className="percentage">46%</div>
                    </div>
                    <div className="details" onClick={() => navigate("/account-preferences")}><PlusIcon/><a style={{marginLeft:"12px"}}>Work Experience</a></div>
                    <div className="details" onClick={() => navigate("/account-preferences")}><PlusIcon/><a style={{marginLeft:"12px"}}>Education</a></div>
                    <div className="details" onClick={() => navigate("/account-preferences")}><PlusIcon/><a style={{marginLeft:"12px"}}>Field of work</a></div>
                    <div className="details" onClick={() => navigate("/account-preferences")}><PlusIcon/><a style={{marginLeft:"12px"}}>Contacts</a></div>                
                </div>
            </div> : <></>}
        </div>
    )
};

export default UserInformationBox;
