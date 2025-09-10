import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './page/landing-page/landingPage';
import LoginPage from './page/auth/loginPage';
import SignupPage from './page/auth/signupPage';
import LoginasPage from './page/auth/loginasPage';
import Main from './layout/main/main';
import FeedPage from './page/feed-page/feedPage';
import LibraryPage from './page/library-page/libraryPage';
import AlumniPage from './page/alumni-page/alumniPage';
import CoursePage from './page/course-page/coursePage';
import EventPage from './page/event-page/eventPage';
import DownloadPage from './page/library-page/resource-detail-page/downloadPage'; // <-- new import
import PostDetail from './page/feed-page/post-detail/postDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/explore' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/loginas' element={<LoginasPage />} />
          <Route path='/Sign-up' element={<SignupPage />} />
          <Route path='/' element={<Main />} >
            <Route path='' element={<FeedPage/>} />
            <Route path='/post/:id' element={<PostDetail/>}/>
            <Route path='/library' element={<LibraryPage/>} />
            <Route path='/library/:id' element={<DownloadPage />} />
            {/* <Route path='/alumni' element={<AlumniPage/>} /> */}
            <Route path='/courses' element={<CoursePage/>} />
            <Route path='/events' element={<EventPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;