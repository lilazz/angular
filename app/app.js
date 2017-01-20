
var app = angular.module('app', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('mainBar', {
      url: "/mainBar",
      templateUrl: "app/components/mainBar/mainBar.html"
    })
    .state('mainBar.superPower', {
      url: "/superPower",
      templateUrl: "app/components/mainBar/superPower.html"
    })
    .state('mainBar.rich', {
      url: "/rich",
      templateUrl: "app/components/mainBar/rich.html"
    })
    .state('mainBar.genious', {
      url: "/genious",
      templateUrl: "app/components/mainBar/genious.html"
    })
    ;
    $urlRouterProvider.otherwise('/components/mainBar/mainBar.html');
  });
