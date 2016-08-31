// Libraries
import angular from 'angular';
import uiRouter from 'angular-ui-router';

// Components
import main from './components/main/main.js';
import dataFactory from './services/dataFactory.js';

//Styles
import './scss/app.scss';

angular
  //.module('app',[])
  .module('app',['ui.router','main'])
  .factory('dataFactory', dataFactory)
