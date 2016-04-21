var app = angular.module('authenticationApp');

app.config(function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'app/login/login.html'
  });
});
