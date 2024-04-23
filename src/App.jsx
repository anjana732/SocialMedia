import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import CreatePost from "./components/CreatePost";
import "./App.css";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {

  const [selectedTab, setSelectedTab] = useState("Home")

  return (
  
    <div className="parent-container">
      <div className="sidebar">
      <Sidebar></Sidebar>
      </div>
      <div className="content">
      <Header></Header>
      {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
      <Footer></Footer>
      </div>
     
    </div>
      
    
  )
}

export default App
