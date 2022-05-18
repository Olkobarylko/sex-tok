import './App.css';
import Header from './components/layouts/header/header';
import Footer from './components/layouts/footer/footer';
import Sidebar from './components/layouts/sidebar/sidebar';
import Feed from './components/pages/feed/feed';
import Profile from './components/pages/profile/profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Header />
            <Sidebar />
        <Routes>
          <Route path="/profile" element = {<Profile />}/>
				  <Route path="/feed" element = {<Feed />}/>
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;
