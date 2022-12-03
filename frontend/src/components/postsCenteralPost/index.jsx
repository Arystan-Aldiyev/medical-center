import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as WriteIcon} from '../../assets/write_icon.svg'
import { ReactComponent as OptionsIcon} from '../../assets/options_icon.svg'
import { ReactComponent as FavIcon} from '../../assets/fav_icon.svg'
import LoadingSpinner from "../loading";
import "./index.css";

const PostsCentralPost = ({ postInfo, CurrentUserId, usersData }) => {
    const navigate = useNavigate();
    const [modalOpenId, setModalOpenId] = useState("");
    const [images, setImages] = useState("");
    const [like, setLike] = useState(false);

    const leaveReport = async (postId) => {
        let x = document.getElementById(postId + "reportDiv")
        x.style.display === "block" ? x.style.display = "none" : x.style.display = "block"
        await fetch("http://localhost:8080/api/leave-report", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({
                "user_id": CurrentUserId.toString(),
                "post_id": postId,
                "text": document.getElementById(postId + "report").value
            })
        }).then(r => r.json()).then().catch((err) => { console.log(err) });
    }

    const updateScore = async (postId, update) => {
        await fetch("http://localhost:8080/api/evaluatePost", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "postId": postId,
                "update": update,
                "userId": CurrentUserId.toString()
            })
        }).then(r => r.json()).then().catch((err) => { console.log(err) })
    };

    const calculate = (item) => {
        const userMapa = new Map(usersData?.map(obj => [obj.postId, [obj.name, obj.surname, obj.pfp_url]]));
        let userInfo = userMapa?.get(item.post_id)
        let x = (Date.now() - item.time)
        let days = Math.floor(x / (24 * 60 * 60 * 1000))
        x = x - Math.floor(x / (24 * 60 * 60 * 1000))
        let hours = Math.floor(x / (60 * 60 * 1000))
        x = x - Math.floor(x / (60 * 60 * 1000))
        let minutes = Math.floor(x / (60 * 1000))
        let timeTable = ""
        if (days > 0) {
            timeTable = days + " days ago"
        } else if (hours > 0) {
            timeTable = hours + " hours ago"
        } else {
            timeTable = minutes + " minutes ago"
        }
        return [userInfo, timeTable]
    }

    const placeLike = (e) => {
        postInfo.likes = e.target.value === "0" ? parseInt(postInfo.likes) + 1 : parseInt(postInfo.likes) - 1
        e.target.value === "0" ? setLike(true) : setLike(false)
        updateScore(postInfo.post_id, (1 - parseInt(e.target.value)).toString());
    }

    useEffect(()=> {
        setImages(postInfo.image_id.split(" "))
        let likeThisPost = false
        let likedUsers = postInfo.liked_users.split(";");
        for (let i = 0; i < likedUsers.length; i++) {
            if (likedUsers[i].substring(0, likedUsers[i].length - 1) === CurrentUserId.toString() && likedUsers[i][likedUsers[i].length - 1] === "1") { likeThisPost = true; break; }
        }
        setLike(likeThisPost);
    }, [])

    
    const res = calculate(postInfo), userInfo = res[0], timeTable = res[1];
    return (
        <div className="post" key={postInfo.post_id} id={postInfo.post_id + "post"}>
            <div id={postInfo.post_id + "popup"} className="othersPopup">
                <div className="fields">Copy Link to post</div>
                <div className="fields">Save this post</div>
                <div className="fields" onClick={() => { let temp = document.getElementById(postInfo.post_id + "reportDiv"); temp.style.display === "block" ? temp.style.display = "none" : temp.style.display = "block" }}>Report post</div>
            </div>
            <div className="report" id={postInfo.post_id + "reportDiv"}>
                <textarea id={postInfo.post_id + "report"}></textarea>
                <button onClick={() => leaveReport(postInfo.post_id)}>Send report</button>
            </div>
            <div className="infoAboutAuthor">
                <LazyLoadImage src={userInfo[2]}
                    id={postInfo.post_id + "img"}
                    alt="Image Alt" effect={"blur"}
                    visibleByDefault={true}
                    className={"post-author-img"}
                />
                <div className="description">
                    <div className="top-description"> 
                        <p className="NameSurname">{userInfo[0]} {userInfo[1]}</p>
                        <div className="svg1"></div>
                        <p className="workingPlace">Frontend Developer</p>
                    </div>
                    <p className="time">{timeTable}</p>
                </div>
                <FavIcon/>
                <OptionsIcon className="others" onClick={() => { let temp = document.getElementById(postInfo.post_id + "popup"); temp.style.display === "block" ? temp.style.display = "none" : temp.style.display = "block" }} />
            </div>
            <div className="descriptionOfCV">
                {postInfo.description.length < 100 ? <p id="description1">{postInfo.description}</p> :
                    <a id={postInfo.post_id + "a"} onClick={() => document.getElementById(postInfo.post_id + "a").innerText = postInfo.description}>{postInfo.description.substring(0, 100)}
                        <a style={{ color: "blue", cursor: "pointer" }}>See more...</a></a>}
            </div>
            <div className="divCvPicture">
                <div className="picture-loading" id={postInfo.post_id + "id-picture-loading"}><LoadingSpinner /></div>
                <LazyLoadImage src={images[0]} afterLoad={() => { document.getElementById(postInfo.post_id + "id-picture-loading").style.display = "none" }}
                    id={postInfo.post_id + "img"}
                    effect={"blur"}
                    visibleByDefault={true}
                    className={"picturesOfCV"}
                    onClick={() => { setModalOpenId(postInfo.post_id) }}
                />
                {modalOpenId === postInfo.post_id ?
                    <ModalGateway>
                        <Modal key={postInfo.post_id} animation={false} onClose={() => setModalOpenId("noId")}>
                            <Carousel animation={false} showArrows={true} showIndicators={true} views={images.map((x) => ({
                                ...x,
                                source: x
                            }))} />
                        </Modal>
                    </ModalGateway>
                    : null}
            </div>
            {/* <div className="statistics">
                <p id={postInfo.post_id+"score"}>{postInfo.likes}</p>
                <p>Price:{postInfo.price}</p>
            </div> */}
            <div className="bottomSide">
                <button className="button" id={postInfo.post_id + "like"} value={like ? "1" : "0"} style={like ? { backgroundColor: "green" } : { backgroundColor: "white" }} onClick={(e) => placeLike(e)}>Like</button>
                <button className="button" onClick={() => navigate("/get-post/" + postInfo.post_id)}>Share</button>
                <button className="button" onClick={() => navigate(`/write-review`, { state: { postId: postInfo.post_id, postUrl: postInfo.pdf_Id } })}> <WriteIcon/>Review</button>
            </div>
        </div>
    )
}

export default PostsCentralPost;