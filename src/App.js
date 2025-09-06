import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './page/landing-page/landingPage';
import LoginPage from './page/login-page/loginPage';
import SignupPage from './page/login-page/signupPage';
import LoginasPage from './page/login-page/loginasPage';
import Main from './layout/main/main';
import FeedPage from './page/feed-page/feedPage';
import LibraryPage from './page/library-page/libraryPage';
import AlumniPage from './page/alumni-page/alumniPage';
import CoursePage from './page/course-page/coursePage';
import EventPage from './page/event-page/eventPage';
import DownloadPage from './page/library-page/downloadPage'; // <-- new import

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
            <Route path='/library' element={<LibraryPage/>} />
            <Route path='/alumni' element={<AlumniPage/>} />
            <Route path='/courses' element={<CoursePage/>} />
            <Route path='/events' element={<EventPage/>} />
            <Route path='/download/:id' element={<DownloadPage />} /> {/* <-- new route */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;