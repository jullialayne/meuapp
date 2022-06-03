import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import TemplatePage from './templates/page';
import TemplateClean from './templates/clean';  
import ClientesList from './pages/client/list';
import ClientesRegister from './pages/client/register';
import ClientesEdit from './pages/client/edit';
import Home from './pages/home';
import Login from './pages/login';
import './style/style.css'; 

function App() {
  
  return (
    <Router> 
        <Routes>
          <Route path='/login' element={<TemplateClean title='Acesso Restrito' Component={Login}/>}/>
          <Route path='/clientes/edit/:id' element={<TemplatePage title='Editar Usuario' Component={ClientesEdit}/>}/>
          <Route path='/clientes/add' element={<TemplatePage title='Cadastro de Usuario' Component={ClientesRegister}/>}/>
          <Route path='/clientes' element={<TemplatePage title='Usuarios' Component={ClientesList}/>}/>
          <Route path='/' element={<TemplatePage title='Home' Component={Home}/>} />
        </Routes> 
    </Router>
    
  );
}

export default App;