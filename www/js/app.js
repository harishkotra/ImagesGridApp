//assigning the entire module to a variable to make it easier to write controllers, services and default ionic functions by directly using the variable ImagesGridApp.run()
var ImagesGridApp = angular.module('starter', ['ionic']);
//first function that runs whenever the app is loaded
ImagesGridApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);1
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

//config function with the settings required for the app.
ImagesGridApp.config(function(){

});

//controller to get the images
ImagesGridApp.controller("ImagesController", function($scope){
    $scope.images = [];

    $scope.loadimages = function() {

        for(var i=0; i<100; i++){
          $scope.images.push({ id: i , src: "http://placehold.it/50x50" });
        }

    }

});
