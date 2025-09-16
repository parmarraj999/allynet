import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import AlumniDetailPage from './page/alumni-page/alumni-detail-page/alumniDetail';
import CourseDetail from './page/course-page/course-detail-page/courseDetail';
import EventDetailPage from './page/event-page/event-detail-page/eventDetail';
import MyPost from './page/my-post-page/myPost';
import MentorRequest from './page/mentor-request/mentorRequest';
import { UserDataProvider } from './context/UserDataContext';

function App() {


  return (
    <div className="App">
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/explore' element={<LandingPage />} />
            {/* <Route path='/profile/:id' element={<ProfilePage/>}/> */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/loginas' element={<LoginasPage />} />
            <Route path='/signin' element={<SignupPage />} />
            <Route path='/profile/:id' element={<AlumniDetailPage />} />
            <Route path='/' element={<Main />} >
              <Route path='' element={<FeedPage />} />
              <Route path='/post/:id' element={<PostDetail />} />
              <Route path='/library' element={<LibraryPage />} />
              <Route path='/library/:id' element={<DownloadPage />} />
              <Route path='/alumni' element={<AlumniPage />} />
              <Route path='/courses' element={<CoursePage />} />
              <Route path='/courses/:id' element={<CourseDetail />} />
              <Route path='/events' element={<EventPage />} />
              <Route path='/events/:id' element={<EventDetailPage />} />

              {/* ============ // ============== */}

              <Route path='/my-posts' element={<MyPost />} />
              <Route path='/mentor-request' element={<MentorRequest />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </div>
  );
}

export default App;