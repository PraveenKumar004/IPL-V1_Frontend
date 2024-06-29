import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import HowWin from './pages/howToWin';
import Manager from './pages/manager'
import Contestant from './pages/contestant'
import MyTeam from './pages/contestant/myTeam'
import PlayerListHome from './pages/playerListHome'
import Add from './pages/addplayer'
import Nopage from './pages/Nopage';
import Preview from './pages/contestant/teampreview'
import PlayerListContest from './pages/contestant/playerListContestant'
import TeamContest from './pages/contestant/teamsContestant'
import SoldContestant from './pages/contestant/soldPlayerContestant'
import UnSoldContestant from './pages/contestant/unsoldPlayerContestant'
import Winner from './pages/manager/winner'
import Sold from './pages/manager/soldPlayer'
import UnSold from './pages/manager/unsoldPlayer'
import PlayerList from './pages/manager/playerList'
import Select from './pages/manager/select'
import Teams from './pages/manager/teams'
import Privacy from './pages/privacy'
import Disclaimer from './pages/disclaimer'
import Admin from './admin/login'
import AdminDash from './admin/dashboard'
import AdminManager from './admin/managers'
import AdminContest from './admin/contestants'
import AdminPlayer from './admin/players'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/howtowin' element={<HowWin />} />
        <Route path='/manager/:id' element={<Manager />} />
        <Route path='/:mid/contestant/:id' element={<Contestant />} />
        <Route path='/:mid/myteam/:id' element={<MyTeam />} />
        <Route path='/:mid/soldplayer/:id' element={<SoldContestant />} />
        <Route path='/:mid/unsoldplayer/:id' element={<UnSoldContestant />} />
        <Route path='/:mid/playerlist/:id' element={<PlayerListContest />} />
        <Route path='/:mid/teams/:id' element={<TeamContest />} />
        <Route path='/teampreview/:id' element={<Preview />} />
        <Route path='/select/:id' element={<Select />} />
        <Route path='/playerlist/:id' element={<PlayerList />} />
        <Route path='/playerlist' element={<PlayerListHome />} />
        <Route path='/teams/:id' element={<Teams />} />
        <Route path='/soldplayer/:id' element={<Sold />} />
        <Route path='/unsoldplayer/:id' element={<UnSold />} />
        <Route path='/selectwinner/:id' element={<Winner />} />     
        <Route path='/privacypolicy' element={<Privacy />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        {/* admin */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/dashboard' element={<AdminDash />} />
        <Route path='/admin/manager' element={<AdminManager />} />
        <Route path='/admin/contestant' element={<AdminContest />} />
        <Route path='/admin/players' element={<AdminPlayer />} />
        <Route path='/add/:id' element={<Add />} />
        {/* admin */}
        <Route path='*' element={<Nopage />} />
      </Routes>
    </Router>
  );
};

export default App;
