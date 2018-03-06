import React from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";
import 'bootstrap';
import '../styles/index.scss';

import {Todolist} from './Todolist.jsx';

//React knows to just print. Must use return inside the function for it to render
var Verysimplecomponent = function(){
  
}


// Add CSS files to bundle
//require('../css/styles.scss');
// Render application to DOM
ReactDOM.render(
    <Todolist />,
    document.querySelector('#app')
);