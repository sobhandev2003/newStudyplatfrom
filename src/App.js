// import logo from './logo.svg';
import React from 'react';
import './CSS/App.css';
import './CSS/home.css';
import './CSS/util.css';
import './CSS/login.css';
import './CSS/search.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home'
import Note from './components/Note';
import Video from './components/Video';
import Favourite from './components/Favourite';
import VideoPage from './components/videoPage'
import Library from './components/Library';
import History from './components/History';
import Downloads from './components/Downloads';
import YourVideos from './components/YourVideos';
import Chenel from './components/Chenel';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact  path='/login'element={<Login/>}/>
          <Route exact  path='/signup'element={<Signup/>}/>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/library" element={<Library/>} />
          <Route exact path="/history" element={<History/>} />
          <Route exact path="/downloads" element={<Downloads/>} />
          <Route exact path="/yourvideos"  element={<YourVideos/>} />
          
          <Route exact path="/note" element={<Note/>}/>
          <Route exact path="/video" element={<Video/>} />
          <Route exact path="/favourite" element={<Favourite/>} />
          <Route path="/video/:videoId" element={<VideoPage/>} />
          <Route path="/chanel/:videoId" element={<Chenel/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;