import React, { useEffect, useState } from "react";
import Header from "../header";
import LeftBox from "../postsLeftBox";
import PostsCenter from "../postsCenter";
import PostsRightBox from "../postsRightBox";
import "./index.css"
import { useNavigate } from "react-router-dom";

const PostsPage = ({ defaultList, postList, isLoading, usersData, currUserData, itemToSearch }) => {
    // const navigate = useNavigate()
    // console.log(usersData);
    // if (typeof(usersData) === "undefined") {
    //     navigate("/register")
    //     return (
    //         null
    //     )
    // }
    return (
        <div className="postsPage">
            <LeftBox currUserData={currUserData} />
            <PostsCenter defaultList={defaultList} postList={postList} usersData={usersData} isLoading={isLoading} currUserData={currUserData} itemToSearch={itemToSearch}/>
            <PostsRightBox />
        </div>
    )
};

export default PostsPage;
