import React from "react";
import UserInformationBox from '../postsUserInfoBox'
import { ReactComponent as StatsIcon} from '../../assets/stats_icon.svg'
import { ReactComponent as TokenIcon} from '../../assets/token_icon.svg'
import { ReactComponent as PlusIcon} from '../../assets/plus_icon.svg'
import "./index.css"

const PostsRightBox = ({currUserData}) => {
    return (
        <div className="rightBox">
            <UserInformationBox currUserData={currUserData} />
            <div className={"userTop"}>
                <div className="topic"> <StatsIcon/> Top users</div>
                <div className="listOfUsers">
                    <div className="user"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkGLIgU1wjRrnLBxzGT3FKhwvYHEs5NKXYw&usqp=CAU"/>Ревью Ревьюевчи</div>
                    <div className="icon"> 25 <TokenIcon /></div>
                </div>
                <div className="listOfUsers">
                    <div className="user"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkGLIgU1wjRrnLBxzGT3FKhwvYHEs5NKXYw&usqp=CAU"/>Ревью Ревьюевчи</div>
                    <div className="icon"> 25 <TokenIcon /></div>
                </div>
                <div className="listOfUsers">
                    <div className="user"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkGLIgU1wjRrnLBxzGT3FKhwvYHEs5NKXYw&usqp=CAU"/>Ревьюбай Ревьюұлы</div>
                    <div className="icon"> 25 <TokenIcon /></div>
                </div>
                <div className="listOfUsers">
                    <div className="user"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkGLIgU1wjRrnLBxzGT3FKhwvYHEs5NKXYw&usqp=CAU"/>Ревьюжан Ревьюжанов</div>
                    <div className="icon"> 25 <TokenIcon /></div>
                </div>
            </div>
        </div>
    )
}

export default PostsRightBox;