import { React, useEffect, useState } from "react";

const ReviewCard = ({ postId, suggestion, postdata, usersData }) => {
    // suggestion = 'Do something bla bla suggestion bla bla'
    const [backendData, setBackendData] = useState()
    const [mode, setMode] = useState("All")
    const [avgScore, setAvg] = useState()
    useEffect(() => {
        let n = 0
        let score = 0
        postdata.map((item) => {
            score += parseInt(item.cv_score)
            n += 1
        })
        setAvg((score / n).toFixed(2))
        setBackendData(postdata)
            ();
    }, [])
    const handleSubmit = event => {
        const temp = event.target.elements[0].id.split(',')
        event.preventDefault();
        fetch(`https://stingray-app-qz3ro.ondigitalocean.app/api/posts/${postId}/update/${temp[1]}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                post_id: postId,
                text: temp[0],
                review_score: event.target.elements[0].value,
                cv_score: temp[3],
                reviewer_id: temp[2]
            })
        })
        alert("success!")
        // Нужно визуально показывать что скор уже есть
    };

    const calculate = (item) => {
        const userMapa = new Map(usersData.map(obj => [obj.id, [obj.name, obj.surname, obj.PfpUrl]]));
        let userInfo = userMapa?.get(item.reviewer_id)
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
    return (
        <div className="leftBar">
            <div className="leftTopBar">
                <div className="scores">
                    <p>CV rating: {avgScore} / 10</p>
                </div>
                <div className="multi-button">
                    <button className="multi-button_button" onClick={() => setMode("All")}>All</button>
                    <button className="multi-button_button" onClick={() => setMode("Active")} > Active</button>
                    <button className="multi-button_button" onClick={() => setMode("Done")} > Done</button>
                </div>
            </div >
            {
                backendData && usersData.length > 0 && suggestion ? (
                    <div className="reviews" >
                        <div className="review">
                            <div className="infoAboutAuthor">
                                <div className="description">
                                    <p className="NameSurname">Our suggestions on format: </p>
                                </div>
                                <div className="others" onClick={() => {
                                    let x = document.getElementById(postId + "popup")
                                    if (x.style.display === "block") {
                                        x.style.display = "none"
                                    } else {
                                        x.style.display = "block"
                                    }
                                }}>
                                    <p>...</p>
                                </div>
                            </div>
                            <div className="reviewText">{suggestion}</div>
                        </div>
                        {mode == "All" && (
                            <>
                                {
                                    backendData.map((item) => {
                                        const res = calculate(item)
                                        const userInfo = res[0]
                                        const timeTable = res[1]
                                        return (
                                            <div key={item.reviewer_id} className="review">
                                                <div className="infoAboutAuthor">
                                                    <img src={userInfo[2]} />
                                                    <div className="description">
                                                        <p className="NameSurname">{userInfo[0]} {userInfo[1]}</p>
                                                        <p className="workingPlace">{userInfo[3]}</p>
                                                        <p className="time">{timeTable}</p>
                                                    </div>
                                                    <div className="others" onClick={() => {
                                                        let x = document.getElementById(postId + "popup")
                                                        if (x.style.display === "block") {
                                                            x.style.display = "none"
                                                        } else {
                                                            x.style.display = "block"
                                                        }
                                                    }}>
                                                        <p>...</p>
                                                    </div>
                                                </div>
                                                <p>Score: {item.cv_score}/10</p>
                                                <div className="reviewText">{item.text}</div>
                                                <div className="reviewAssess">
                                                    {item.review_score == -1 && (
                                                        <form onSubmit={handleSubmit}>
                                                            <p>How would you rate this review:</p>
                                                            <input
                                                                id={`${item.text},${item.id},${item.reviewer_id},${item.cv_score}`}
                                                                type="text"
                                                                placeholder="Score out of 10"
                                                                pattern="[0-9]|10"
                                                            />
                                                            {/* щщс надо через стейты прописывать, и вообще пихни review card в отдельный компонент */}

                                                            <input type="submit" />
                                                        </form>
                                                    )}
                                                    {(item.review_score >= 0) && (
                                                        <p>You rated this review {item.review_score} out of 10</p>
                                                    )}
                                                    {(item.review_score == -2) && (
                                                        <p>Outdated, the score is set to 10 automatically</p>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )}

                        {mode == 'Active' && (
                            <>
                                {
                                    backendData.filter(item => item.review_score == -1).map((item) => {
                                        const res = calculate(item)
                                        const userInfo = res[0]
                                        const timeTable = res[1]
                                        return (
                                            <div key={item.reviewer_id} className="review">
                                                <div className="infoAboutAuthor">
                                                    <img src={userInfo[2]} />
                                                    <div className="description">
                                                        <p className="NameSurname">{userInfo[0]} {userInfo[1]}</p>
                                                        <p className="workingPlace">{userInfo[3]}</p>
                                                        <p className="time">{timeTable}</p>
                                                    </div>
                                                    <div className="others" onClick={() => {
                                                        let x = document.getElementById(postId + "popup")
                                                        if (x.style.display === "block") {
                                                            x.style.display = "none"
                                                        } else {
                                                            x.style.display = "block"
                                                        }
                                                    }}>
                                                        <p>...</p>
                                                    </div>
                                                </div>
                                                <p>Score: {item.cv_score}/10</p>
                                                <div className="reviewText">{item.text}</div>
                                                <div className="reviewAssess">
                                                    <form onSubmit={handleSubmit}>
                                                        <p>How would you rate this review:</p>
                                                        <input
                                                            id={`${item.text},${item.id},${item.reviewer_id},${item.cv_score}`}
                                                            type="text"
                                                            placeholder="Score out of 10"
                                                            pattern="[0-10|10]"
                                                        />
                                                        {/* щщс надо через стейты прописывать, и вообще пихни review card в отдельный компонент */}

                                                        <input type="submit" />
                                                    </form>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )}

                        {mode == 'Done' && (
                            <>
                                {
                                    backendData.filter(item => item.review_score == -1 || item.review_score == -2).map((item) => {
                                        const res = calculate(item)
                                        const userInfo = res[0]
                                        const timeTable = res[1]
                                        return (
                                            <div key={item.reviewer_id} className="review">
                                                <div className="infoAboutAuthor">
                                                    <img src={userInfo[2]} />
                                                    <div className="description">
                                                        <p className="NameSurname">{userInfo[0]} {userInfo[1]}</p>
                                                        <p className="workingPlace">{userInfo[3]}</p>
                                                        <p className="time">{timeTable}</p>
                                                    </div>
                                                    <div className="others" onClick={() => {
                                                        let x = document.getElementById(postId + "popup")
                                                        if (x.style.display === "block") {
                                                            x.style.display = "none"
                                                        } else {
                                                            x.style.display = "block"
                                                        }
                                                    }}>
                                                        <p>...</p>
                                                    </div>
                                                </div>
                                                <p>Score: {item.cv_score}/10</p>
                                                <div className="reviewText">{item.text}</div>
                                                <div className="reviewAssess">
                                                    <p>You rated this review {item.review_score} out of 10</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )}
                    </div >
                ) : (
                    <div>Ща загружу</div>
                )}
        </div >
    )
}

export default ReviewCard;