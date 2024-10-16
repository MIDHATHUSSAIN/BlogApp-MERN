import { Route, Routes } from "react-router-dom";
import NAVBAR from "./Components/NavBar";
import LOGIN from "./Pages/Login";
import SIGNUP from "./Pages/SignUp";
import HOME from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog";
import MYBlog from "./Pages/MyBlog";
import AuthContext from "./Context/AuthContext";
import Admin from "./Pages/Admin";
import Protected from "./Protected/Protection";
import roles from './utiles/roles'
import Author from "./Pages/Admin";
import ADMIN from "./Pages/Admin";
import UserTablePage from "./Pages/UserTablePage";
import CreateAuthor from "./Pages/CreateAuthor";
import UPDATEAUTHOR from "./Pages/UpdateAuthor";
import BLOGS from "./Pages/Blogs";
import AdminCreateBlog from "./Pages/AdminCreateBlog";


function App() {
  return (
    <div className="App">
        <AuthContext>
        <NAVBAR></NAVBAR>
        <Routes>
          <Route path="login" element={<LOGIN/>}></Route>
          <Route path="signup" element={<SIGNUP></SIGNUP>}></Route>
          <Route path="/" element={<HOME></HOME>}></Route>
          
          <Route element = {<Protected></Protected>}>
            <Route path="admin" element = {<ADMIN></ADMIN>}></Route>
            <Route path="users" element = {<UserTablePage></UserTablePage>}></Route>
            <Route path="/blogs" element = {<BLOGS></BLOGS>}></Route>
            <Route path="create-author/:userId" element = {<CreateAuthor></CreateAuthor>}></Route>
            <Route path="adminCreate-blog/:authorId" element = {<AdminCreateBlog></AdminCreateBlog>}></Route>
            <Route path="update-author/:userId" element = {<UPDATEAUTHOR></UPDATEAUTHOR>}></Route>
          </Route>
          <Route element = {<Protected></Protected>}>
               <Route path="my-blog" element={<MYBlog></MYBlog>}></Route>
               <Route path="create-blog" element={<CreateBlog></CreateBlog>}></Route>
            
          </Route>
        </Routes>
        
        </AuthContext>
    </div>
  );
}

export default App;
