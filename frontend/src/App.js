import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { React, useState, useEffect } from "react";
import AccountPreferences from './components/accountPreferences';
import MainPage from './components/mainpage';
import Login from './components/login';
import Header from './components/header'
import Reviews from './components/reviews';
import WriteReview from './components/writeReview';
import ProfilePage from './components/profile';
import PostsPage from "../src/pages/index";
import Register from "./components/register";
import SinglePostLink from "./components/postsSinglePost";

const App = () => {

  // Убрать
  const [name, setName] = useState("");
  const [pfpUrl, setPfpUrl] = useState("");
  const [balance, setBalance] = useState("");
  const [post, setPost] = useState("");
  const [id, setId] = useState("");

  const [postList, setPostList] = useState();
  const [defaultList, setDefaultList] = useState();
  const [usersData, setUsersData] = useState();
  const [currUserData, setCurrUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [itemToSearch, setItemToSearch] = useState("");
  const [postdata, setPostdata] = useState()
  const [notif, setNotif] = useState(false)

  const backendIP = "localhost";
  const djangoIP = "blabla"

  useEffect(() => {
    (
      async () => {

        // Фетч для всего - юзер
        await fetch(`http://localhost:8080/api/user`, {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        }).then((response) => response.json()).then((data) => {
          if (Object.keys(data).length > 1) {
            setCurrUserData(data)
          }
        }).catch((err) => {
          console.log(err)
          setError("Error accessing account")
        })

        // Фетч для постс - лист постов
        await fetch("http://localhost:8080/api/posts", {
          headers: { 'Content-Type': 'application/json' },
        }).then(r => r.json()).then((data) => {
          setPostList(data);
          setDefaultList(data);
          setIsLoading(true);
        }).catch((err) => {
          console.log(err)
          setError("Something bad is happened - server error")
        });

        // Фетч для постс - список юзеров
        await fetch("http://localhost:8080/api/all-users", {
          headers: { 'Content-Type': 'application/json' },
        }).then(r => r.json()).then((data) => {
          setUsersData(data)
        }).catch((err) => {
          console.log(err)
          setError("Something bad is happened - server error")
        })

        // Фетч для уведомлений
        await fetch(`https://stingray-app-qz3ro.ondigitalocean.app/api/posts/${currUserData.postId}/reviews/`, {
          headers: { 'Content-Type': 'application/json' },
        }).then(r => r.json()).then((data) => {
          console.log(data)
          console.log("tema")
          setPostdata(data)
          setNotif(Object.keys(data) > 0)
        }).catch((err) => {
          console.log(err)
          setError("Something bad is happened - server error")
        })


      }
    )();
  }, []);

  return (
    <BrowserRouter>
      <Header currUserData={currUserData} itemToSearch={itemToSearch} setItemToSearch={setItemToSearch} notif={notif} />
      <Routes>
        <Route path={"/"} element={<PostsPage defaultList={defaultList} postList={postList} usersData={usersData} isLoading={isLoading} currUserData={currUserData} itemToSearch={itemToSearch} />} />
        {/* <Route path={"/posts"} element={<PostsPage defaultList={defaultList} postList={postList} usersData={usersData} isLoading={isLoading} currUserData={currUserData} />} /> */}
        <Route path={"/get-post/:postId"} element={<SinglePostLink defaultList={defaultList} postList={postList} usersData={usersData} isLoading={isLoading} currUserData={currUserData} />} />
        <Route path={"/login"} element={<Login Id={id} setName={setName} />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/account-preferences"} element={<AccountPreferences CurrentUserId={id} balance={balance} />} />
        <Route path={"/reviews"} element={<Reviews postdata={postdata} usersData={usersData} currUserData={currUserData} />} />
        {console.log(currUserData)}
        <Route path={"/write-review"} element={<WriteReview currUserData={currUserData} />} />
        <Route path={"/profile-page"} element={<ProfilePage Id={id} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;