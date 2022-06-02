import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import TemplatePage from './templates/page';
import TemplateDefault from './templates/default';
import Counter from './pages/counter';
import Albuns from './pages/albuns';
import Users from './pages/users';
import Home from './pages/home';
import './style/style.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <TemplateDefault>
      <Router>
        <Routes>
          <Route path='/users' element={<TemplatePage title='Users' Component={Users}/>}/>
          <Route path='/' element={<TemplatePage title='Home' Component={Home}/>}>
            
          </Route>
        </Routes>
      </Router>
    </TemplateDefault>
  );
}

export default App;