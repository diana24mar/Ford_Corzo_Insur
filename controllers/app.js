// Implementacion de AngularJS

var app = angular.module('myAppNissan', []);

app.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('MainCTRL', function($scope, $http) {
    $scope.head = {};
    $scope.body = {};
    $scope.sendData = {};

    $scope.head = {
        title: 'Ford Corzo Insur | México',
        icon: 'img/icon_ford.png',
        subTitle: 'Corzo Insur México'
    }

    $http.get("/controllers/dataAPI.json")
        .then(function(response) {
            $scope.content = response.data;
            console.log(JSON.stringify($scope.content[0]))
        }, function(response) {
            $scope.content = "Something went wrong";
        });
});