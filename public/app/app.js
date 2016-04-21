var app = angular.module('authenticationApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/login'
  });
});
