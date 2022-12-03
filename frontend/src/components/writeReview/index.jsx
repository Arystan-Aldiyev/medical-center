import { React } from "react";
import './index.css';
import PDFview from "../PDFview";
import { useLocation } from "react-router-dom";

const WriteReview = ({ currUserData }) => {
    const postUrl = currUserData.pdf_url
    const postId = currUserData.postId
    const leaveReview = () => {
        const handleSubmit = event => {
            // const temp = event.target.elements[0].id.split(',')
            event.preventDefault();
            fetch(`https://stingray-app-qz3ro.ondigitalocean.app/api/posts/${postId}/reviews/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    post_id: postId,
                    text: document.getElementById("reviewText").value,
                    cv_score: event.target.elements[0].value,
                    reviewer_id: currUserData.id,
                })
            })
            alert("success!")
        };

        const handleKeyDown = (e) => {
            e.target.style.height = 'inherit';
            e.target.style.height = `${Math.min(e.target.scrollHeight, 500)}px`;
        }
        return (
            <div className="leftBar">
                <div className="userData">
                    <p>Tut budet userdata</p>
                </div>
                <div className="review">
                    <textarea autoFocus required placeholder="Write your review here" onKeyDown={handleKeyDown} style={{ height: "auto" }} rows={4} id="reviewText" />
                    <div className="cvAssess">
                        <form onSubmit={handleSubmit}>
                            <p>How would you rate this cv:</p>
                            <input
                                type="text"
                                placeholder="Score out of 10"
                                pattern="[0-9]|10"
                                required
                            />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="main">
            {leaveReview()}
            <PDFview postUrl={postUrl} />
        </div>
    )
};

export default WriteReview;

