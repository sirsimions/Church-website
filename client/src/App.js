import './App.css';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Departments from './components/Departments';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import SidebarNav from './components/Sidebar/SidebarNav';
import SidebarPages from './components/Sidebar/SidebarPages';
import Sermon from './components/Sermon';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path = '/' element={<Home/>} />
        <Route exact path = '/departments' element={<Departments/>} />
        <Route exact path = '/sermon' element={<Sermon/>} />
        <Route exact path = '/contacts' element={<Contacts/>} />
      </Routes>
      
      <SidebarPages/>
    </>
  );
}

export default App;
