/**
 * AngularJS Website
 * @author Angelika Podlinska
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/home", {templateUrl: "partials/home.html", controller: "PageCtrl"})
	.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
	.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
	.when("/example", {templateUrl: "partials/example.html", controller: "PageCtrl"})
    .when("/testimonials", {templateUrl: "partials/testimonials.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
	.when("/success", {templateUrl: "partials/success.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});