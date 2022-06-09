import './App.css';
import Header from './components/layouts/header/header';
import Footer from './components/layouts/footer/footer';
import Sidebar from './components/layouts/sidebar/sidebar';
import Feed from './components/pages/feed/feed';
import Profile from './components/pages/profile/profile';
import { Route, Routes} from 'react-router-dom';

const App = (props) => {
  console.log(props);
  return (
        <div>
            <Header />
            <Sidebar />
        <Routes>
          <Route path="/profile" element = {<Profile profile={props.state.profile} addPost={props.addPost} changeProfileInput = {props.changeProfileInput}/>}/>
				  <Route path="/feed" element = {<Feed />}/>
        </Routes>
        <Footer />
    </div>
  )
}

export default App;