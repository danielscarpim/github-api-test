import mainController from './mainController.js';
import template from 'ngtemplate!html!./main.html';

angular
  .module('main',[])
  .controller('mainController',mainController)
  .config(mainRoutes);

  function mainRoutes($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/main");
    $stateProvider
      .state('main',{
        url: "/main",
        views: {
          "main": {
            templateUrl: template,
            controller: "mainController",
            controllerAs: "main"
          },
        }
      })
  }
