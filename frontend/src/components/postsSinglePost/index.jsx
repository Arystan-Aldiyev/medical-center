import React,{useEffect, useState}  from "react";
import PostsCentralPost from "../postsCenteralPost";
import LoadingSpinner from "../loading";
import "./index.css";
import PostsLeftBox from "../postsUserInfoBox";
import {useParams} from "react-router-dom";
import PostsRightBox from "../postsRightBox";

const SinglePostLink = ({ postList, usersData, isLoading,currUserData}) => {
    const params = useParams()
    let postFromParams = ""
    postList?.filter((item) => {if (item.post_id === params.postId) {postFromParams = item}})

    console.log(postFromParams)
    return (
        <div className={"singlePostsContainer"} key={postList}>
            {postFromParams !== "" ? <><PostsLeftBox  currUserData={currUserData}/>
            {isLoading && usersData && postFromParams !== "" && typeof(currUserData) !== "undefined" ? <PostsCentralPost key={params.PostId} postInfo={postFromParams} CurrentUserId={currUserData.id} usersData={usersData}/> : <div className="singlePostLoading"></div>
            }<PostsRightBox/></> : <></> }
        </div>
    )
}

export default SinglePostLink;