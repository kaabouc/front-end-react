import React from 'react';
import Login from './Login/login';
import GlobalResult from './Diagnostique/GlobalResult'
import Questionnaire from './Diagnostique/diagnostic'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Layout from './layout/navbar'
import CategoryResults from './categorie/CategoryResults';

export default function App() {
  return (
    
      <div className='App'>
        
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Login />} />
          
       
          <Route path="/questionnaire" element={<Questionnaire />}/>
          <Route path="/GlobalResult" element={<GlobalResult/>}/>
          <Route path="/CategoryResults" element={<CategoryResults/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
        
      </div>
   
  );
}
