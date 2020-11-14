// // Angular Routing

var app = angular.module("portfolioApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/projects", {
            templateUrl: "projects.html"
        })
   
});

