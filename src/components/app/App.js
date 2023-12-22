import {Routes, Route, Link} from 'react-router-dom';
import '../app/App.scss';
import '../header/header.scss';
import Menu from '../menu/menu';
import Main from '../pages/main/main';
import About from '../pages/about/about';
import HeroesLibrary from '../pages/heroes/heroesLibrary';
import Header from '../header/header';
import User from '../pages/login/user';
import LoginRegisterPage from '../pages/login/LoginRegisterPage';

const App = () => {

const items = [{value: 'Main Page', href: '/', icon: 'anchor'},{value: 'Login/Register', href: '/login&page', icon: 'login'},{value: 'Heroes Library', href: '/library', icon: 'service'},{value: 'About', href: '/about', icon: 'info'}]

  return (
    <div className="app">
      <Header />
      <Menu header={'Navigation'} items={items} />
    <Routes>
      <Route path='/' element ={<Main />} />
      <Route path='/login&page' element ={<LoginRegisterPage />} />
      <Route path='/library' element={<HeroesLibrary />} />
      <Route path='/about' element={<About />}/>
      <Route path='*' element={<h1 style={{paddingTop: '50px'}}>not found</h1>} />
    </Routes>
    </div>
  );
}

export default App;
