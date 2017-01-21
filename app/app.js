
var app = angular.module('app', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('mainBar', {
      url: "/mainBar",
      templateUrl: "components/mainBar/mainBar.html",
      controller: "mainBarController"
    })
     .state('superPower', {
       url: "/superPower",
       templateUrl: "components/mainBar/mainBar.html",
     })
     .state('rich', {
       url: "/rich",
       templateUrl: "components/mainBar/mainBar.html",
     })
     .state('genious', {
       url: "/genious",
       templateUrl: "components/mainBar/mainBar.html",
     })
     ;
    $urlRouterProvider.otherwise('mainBar');
  });
