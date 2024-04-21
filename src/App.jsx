import Header from "./components/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import CreatePost from "./components/CreatePost";
import "./App.css";
import PostList from "./components/PostList";

function App() {

  return (
  
    <div className="parent-container">
      <div className="sidebar">
      <Sidebar></Sidebar>
      </div>
      <div className="content">
      <Header></Header>
      <CreatePost></CreatePost>
      <PostList></PostList>
      <Footer></Footer>
      </div>
     
    </div>
      
    
  )
}

export default App
