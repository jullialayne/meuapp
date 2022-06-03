import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import TemplatePage from './templates/page';
import TemplateDefault from './templates/default'; 
import UsersList from './pages/users/list';
import UsersRegister from './pages/users/register';
import UsersEdit from './pages/users/edit';
import Home from './pages/home';
import './style/style.css'; 

function App() {
  return (
    <Router>
      <TemplateDefault>
        <Routes>
          <Route path='/users/edit/:id' element={<TemplatePage title='Editar Usuario' Component={UsersEdit}/>}/>
          <Route path='/users/add' element={<TemplatePage title='Cadastro de Usuario' Component={UsersRegister}/>}/>
          <Route path='/users' element={<TemplatePage title='Usuarios' Component={UsersList}/>}/>
          <Route path='/' element={<TemplatePage title='Home' Component={Home}/>} />
        </Routes>
      </TemplateDefault>
    </Router>
    
  );
}

export default App;