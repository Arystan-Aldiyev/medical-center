import React, { useEffect, useState } from "react";
import PostsCentralPost from "../postsCenteralPost";
import LoadingSpinner from "../loading";
import "./index.css";

const PostsCenter = ({ defaultList, postList, usersData, isLoading, currUserData, itemToSearch }) => {
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [sortPosts, setSortPosts] = useState("");
    const SortByKey = (key) => {
        key = key.toLowerCase()
        if (key === "default") {
            return defaultList
        }
        let sorted = postList
        for (let i = 0; i < sorted.length; i++) {
            for (let j = 0; j < sorted.length - i - 1; j++) {
                if (parseInt(sorted[j][key]) < parseInt(sorted[j + 1][key])) {
                    let temp = sorted[j]
                    sorted[j] = sorted[j + 1]
                    sorted[j + 1] = temp
                }
            }
        }
        document.getElementById("select-sorting").style.display = "none"
        return sorted
    }

    let filteredList = sortPosts !== "" ? SortByKey(sortPosts) : postList
    filteredList = typeof (itemToSearch) !== "undefined" ? filteredList?.filter((item) => item.description.toLowerCase().includes(itemToSearch)) : filteredList
    return (
        <div className={"listOfPosts"} key={postList}>
            {isLoading && usersData && typeof (currUserData) !== "undefined" ? filteredList?.map((postInfo) =>
                <PostsCentralPost key={postInfo.post_id} postInfo={postInfo} CurrentUserId={currUserData.id} usersData={usersData} />) : <div className="loading"></div>
            }
        </div>
    )
}

export default PostsCenter;