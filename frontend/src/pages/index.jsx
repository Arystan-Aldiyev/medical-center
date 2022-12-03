import React, { useEffect, useState } from "react";
import Header from "../components/header";
import UserInformationBox from "../components/postsUserInfoBox";
import PostsCenter from "../components/postsCenter";
import PostsRightBox from "../components/postsRightBox";
import "./index.css"
import LoadingSpinner from "../components/loading";
import { useNavigate } from "react-router-dom";

const PostsPage = ({ defaultList, postList, isLoading, usersData, currUserData, itemToSearch }) => {

    return (
        <div className="postsPage">
             {isLoading && usersData && typeof(currUserData) !== "undefined" ? 
                <><PostsCenter itemToSearch={itemToSearch} defaultList={defaultList} postList={postList} usersData={usersData} isLoading={isLoading} currUserData={currUserData} />
                <PostsRightBox currUserData={currUserData} /></>: <div className="loading"><LoadingSpinner /></div>
            }
        </div>
    )
};

export default PostsPage;
