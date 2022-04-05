import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Home } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Smoke from './component/smoke';
import Flame from './component/flame';
import Ir from './component/ir';
import Ldr from './component/ldr';
import Pir from './component/pir';
import Soil from './component/soil';
import Temp from './component/temp';
import Ul from './component/ultrasonic';
import EmployeeList from './component/employeeList';
import AddEmployee from './component/addEmployee';
import Login from './component/login';


ReactDOM.render(
  <BrowserRouter >
    <Routes>
      
    <Route exact path='/' element={<Home />}></Route>
      <Route exact path='home' element={<Home />}></Route>
      <Route exact path='smoke' element={<Smoke />}></Route>
      <Route exact path='flame' element={<Flame />}></Route>
      <Route exact path='ir' element={<Ir />}></Route>
      <Route exact path='ldr' element={<Ldr />}></Route>
      <Route exact path='pir' element={<Pir />}></Route>
      <Route exact path='soil' element={<Soil />}></Route>
      <Route exact path='temp' element={<Temp />}></Route>
      <Route exact path='employee_list' element={<EmployeeList />}></Route>
      <Route exact path='add_employee' element={<AddEmployee />}></Route>
      <Route exact path='ultrasonic' element={<Ul />}></Route>
      <Route exact path='login' element={<Login />}></Route>
      
      
      
      
      
    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
