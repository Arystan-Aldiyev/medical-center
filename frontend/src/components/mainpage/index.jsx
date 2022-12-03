import React from "react";
import "./index.css"

const MainPage = ({CurrentUsersName}) => {
    let text;
    if (typeof(CurrentUsersName) === "string" && CurrentUsersName.length > 0) {
        text = (
            <h2 className="MainPageContainer-upperLarge-h1">Hello dear user: {CurrentUsersName}!</h2>
        )
    } else {
        text = (
            <h2 className="MainPageContainer-upperLarge-h1">Hello dear user!</h2>
        )
    }
    return (
        <div className="MainPageContainer">
            <div className="MainPageContainer-upperLarge">
                {text}

                <p className="MainPageContainer-upperLarge-p"></p>
            </div>
            {/*<div className="MainPageContainer-parentOfSmall">*/}
            {/*    <div className="MainPageContainer-bottomDark">*/}
            {/*        <p className="MainPageContainer-bottomDark-p"></p>*/}
            {/*        <p className="MainPageContainer-bottomDark-p"></p>*/}
            {/*        <p className="MainPageContainer-bottomDark-p"></p>*/}
            {/*        <p className="MainPageContainer-bottomDark-p"></p>*/}
            {/*    </div>*/}
            {/*    <div className="MainPageContainer-bottomLight">*/}
            {/*        <p className="MainPageContainer-bottomLight-p"></p>*/}
            {/*        <p className="MainPageContainer-bottomLight-p"></p>*/}
            {/*        <p className="MainPageContainer-bottomLight-p"></p>*/}
            {/*        <p className="MainPageContainer-bottomLight-p"></p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
};

export default MainPage;

