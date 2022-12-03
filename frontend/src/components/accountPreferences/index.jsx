import { useState } from "react";
import "./index.css"

const AccountPreferences = ({ CurrentUserId, balance }) => {
    const IP = 'http://10.101.55.242';
    const [currentPage, setCurrentPage] = useState("0");

    const setRange = () => {
        const price = document.getElementById("range")
        const bubble = document.getElementById("bubble")
        const limit = document.getElementById("range2")

        const val = price.value;
        const min = price.min ? price.min : 0;
        const max = price.max ? price.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        bubble.innerHTML = val;
        if (parseInt(val) * parseInt(limit.value) > balance) {
            limit.value = Math.floor(balance / parseInt(val)).toString()
            setLimit()
        }
        // Sorta magic numbers based on size of the native UI thumb
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }

    const setLimit = () => {
        const limit = document.getElementById("range2")
        const bubble = document.getElementById("bubble2")
        const price = document.getElementById("range")

        const val = limit.value;
        const min = limit.min ? limit.min : 0;
        const max = limit.max ? limit.max : 100;
        const newVal = Number(((val - min) * 100) / (max - min));
        bubble.innerHTML = val;
        if (parseInt(val) * parseInt(price.value) > balance) {
            price.value = Math.floor(balance / parseInt(val)).toString()
            setRange()
        }
        // Sorta magic numbers based on size of the native UI thumb
        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    }


    const handleKeyDown = (e) => {
        e.target.style.height = 'inherit';

        // Get the computed styles for the element
        const computed = window.getComputedStyle(e.target);

        // Calculate the height
        const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
            + parseInt(computed.getPropertyValue('padding-top'), 10)
            + e.target.scrollHeight
            + parseInt(computed.getPropertyValue('padding-bottom'), 10)
            + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

        e.target.style.height = `${Math.min(e.target.scrollHeight, 500)}px`;
        document.getElementById("suda").value = e.target.value
    }
    const RightBox = () => {
        if (currentPage === "0") {
            return (
                <div className="rightBoxU">
                    <div className="topQuestion">
                        <div className="issueBox">
                            <h1>Upload Profile Picture</h1>
                            <form action={`${IP}:8000/api/${CurrentUserId}/upload/picture/`} encType="multipart/form-data" method="POST">
                                <label htmlFor="img">Select image:</label>
                                <input type="file" id="img" name="file" accept="image/*" />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="issueBox">qwe1</div>
                    </div>
                    <div className="topQuestion">
                        <div className="issueBox">qwe1</div>
                        <div className="issueBox">qwe1</div>
                    </div>
                    <div className="footer">
                    </div>
                </div>
            )
        } else if (currentPage === "1") {
            return (
                <div className="rightBoxU">
                    <div className="topQuestion">
                        <div className="issueBox">qwe1</div>
                        <div className="issueBox">qwe1</div>
                    </div>
                    <div className="topQuestion">
                        <div className="issueBox">qwe1</div>
                        <div className="issueBox">qwe1</div>
                    </div>n
                    <div className="footer">
                    </div>
                </div>
            )
        } else if (currentPage === "2") {
            return (
                <div className="rightBoxU">
                    <div className="topQuestion">
                        <div className="issueBox">
                            <div className="review">
                                <textarea autoFocus required placeholder="Post description" onKeyDown={handleKeyDown} style={{ height: "auto" }} rows={4} id="reviewText" />
                                <div className="cvAssess">
                                    <form action={`${IP}:8000/api/${CurrentUserId}/upload/post/`} encType="multipart/form-data" method="POST">
                                        <p>Upload your CV here</p>
                                        <input hidden type="text" name="description" id="suda" required />
                                        <div className="range-wrap">
                                            <input type="range" placeholder="Price" id="range" name="price" min={0} max={balance} step={10} onChange={setRange} defaultValue={10} />
                                            <output id="bubble" className="bubble">10</output>
                                        </div>
                                        <div className="range-wrap">
                                            <input type="range" placeholder="How many reviews you want to get" id="range2" name="limit" min={1} max={Math.floor(balance / 10)} step={1} onChange={setLimit} defaultValue={5} />
                                            <output id="bubble2" className="bubble">5</output>
                                        </div>
                                        {/* <input type="range" placeholder="How many reviews you want to get" name="limit" /> */}
                                        <input name="file" type="file" id="cv" accept=".pdf" required />
                                        <input type="submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="topQuestion">
                        <div className="issueBox">qwe2</div>
                        <div className="issueBox">qwe2</div>
                        <div className="issueBox">qwe2</div>
                        <div className="issueBox">qwe2</div>
                        <div className="issueBox">qwe2</div>
                        <div className="issueBox">qwe2</div>
                    </div>
                    <div className="footer">
                    </div>
                </div >
            )
        } else if (currentPage === "3") {
            return (
                <div className="rightBoxU">
                    <div className="topQuestion">
                        <div className="issueBox">qwe3</div>
                        <div className="issueBox">qwe3</div>
                        <div className="issueBox">qwe3</div>
                        <div className="issueBox">qwe3</div>
                        <div className="issueBox">qwe3</div>
                        <div className="issueBox">qwe3</div>
                    </div>
                    <div className="topQuestion">
                        <div className="issueBox">qwe3</div>
                        <div className="issueBox">qwe3</div>
                    </div>
                    <div className="footer">
                    </div>
                </div>
            )
        } else if (currentPage === "4") {
            return (
                <div className="rightBoxU">
                    <div className="topQuestion">
                        <div className="issueBox">qwe4</div>
                        <div className="issueBox">qwe4</div>
                        <div className="issueBox">qwe4</div>
                        <div className="issueBox">qwe4</div>
                        <div className="issueBox">qwe4</div>
                        <div className="issueBox">qwe4</div>
                    </div>
                    <div className="footer">
                    </div>
                </div>
            )
        } else {
            return (
                <div className="rightBoxU">
                    <div className="topQuestion">
                        <div className="issueBox">qwe5</div>
                        <div className="issueBox">qwe5</div>
                        <div className="issueBox">qwe5</div>
                        <div className="issueBox">qwe5</div>
                        <div className="issueBox">qwe5</div>
                        <div className="issueBox">qwe5</div>
                    </div>
                    <div className="topQuestion">
                        <div className="issueBox">qwe5</div>
                        <div className="issueBox">qwe5</div>
                    </div>
                    <div className="footer">
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="accountPrefernces">
            <div className="leftStaicBox">
                <div className={currentPage === "0" ? "linkBoxes-red" : "linkBoxes"} onClick={() => setCurrentPage("0")}>My Profile</div>
                <div className={currentPage === "1" ? "linkBoxes-red" : "linkBoxes"} onClick={() => setCurrentPage("1")}>Settings</div>
                <div className={currentPage === "2" ? "linkBoxes-red" : "linkBoxes"} onClick={() => setCurrentPage("2")}>Upload CV</div>
                <div className={currentPage === "3" ? "linkBoxes-red" : "linkBoxes"} onClick={() => setCurrentPage("3")}>Account Settings</div>
                <div className={currentPage === "4" ? "linkBoxes-red" : "linkBoxes"} onClick={() => setCurrentPage("4")}>Visibility</div>
                <div className={currentPage === "5" ? "linkBoxes-red" : "linkBoxes"} onClick={() => setCurrentPage("5")}>Data privacy</div>
            </div>
            <RightBox />
        </div>
    )
};

export default AccountPreferences;

