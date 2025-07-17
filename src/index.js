import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import PackingList from './ConditionalRending';
//import List from './List';
//import Greeting  from './Greeting';
//import Image from './Image';
//import TeaSet from './ImpureComponent';
//import Congratulations  from './Congratulations ';
//import { Profile } from './Image';
//import AppData from './AppData';
//import PackList from './ConditionalJSX';
//import List from './ListData';

//import React from "react";
//import EmployeeList from "./EmployeeList";
//import EmployeeList from './ConsumeEmpAPI';

//import EmployeeListAxios from './AxiosAPIConsume';
import AddData from './AxiosAPIAddData';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddData  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
