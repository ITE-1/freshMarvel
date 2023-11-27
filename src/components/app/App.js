import {Routes, Route, Link} from 'react-router-dom';
import '../app/App.scss';
import '../header/header.scss';
import Menu from '../menu/menu';
import {useState} from 'react';
import Main from '../pages/main/main';
import About from '../pages/about/about';
import HeroesLibrary from '../pages/heroes/heroesLibrary';
import Header from '../header/header';

const App = () => {

const items = [{value: 'Main Page', href: '/', icon: 'anchor'},{value: 'Heroes Library', href: '/services', icon: 'service'},{value: 'About', href: '/about', icon: 'info'}]

const [menuActive, setMenuActive] = useState(false)
const [isMobile, setIsMobile] = useState(false)



  return (
    <div className="app">
      <Header />
     <Menu active={menuActive} setActive={setMenuActive} header={'Navigation'} items={items} />
    <Routes>
      <Route path='/' element ={<Main />} />
      <Route path='/services' element={<HeroesLibrary />} />
      <Route path='/about' element={<About />}/>
      <Route path='*' element={<h1 style={{paddingTop: '50px'}}>not found</h1>} />
    </Routes>
    </div>
  );
}

export default App;
