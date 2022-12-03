import { React, useEffect, useState } from "react";
import './index.css';
import PDFview from "../PDFview";
import ReviewCard from "../reviewCard";
import { useLocation } from "react-router-dom";

const Reviews = ({ postdata, usersData }) => {
    // const param = useParams()
    // const postId = param.postId
    const [postUrl, setPostUrl] = useState("")
    const [suggestion, SetSuggestion] = useState()
    const location = useLocation()
    const postId = location.state.postId

    useEffect(() => {
        (
            async () => {
                const response = await fetch(`https://stingray-app-qz3ro.ondigitalocean.app/api/posts/${postId}/`, {
                    headers: { 'Content-Type': 'application/json' },
                });
                const data = await response.json()
                setPostUrl(data.pdf_id)
                SetSuggestion(data.suggestions)
            }
        )();
    }, [])


    return (
        <div className="main">
            <ReviewCard postId={postId} suggestion={suggestion} postdata={postdata} usersData={usersData} />
            <PDFview postUrl={postUrl} />
        </div>
    )
};

export default Reviews;