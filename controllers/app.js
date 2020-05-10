// Implementacion de AngularJS

var app = angular.module('myAppNissan', []);

app.controller('MainCTRL', function($scope, $http) {
    $scope.head = {};
    $scope.body = {};
    $scope.sendData = {};

    $scope.head = {
        title: 'Ford Corzo Insur | México',
        icon: 'img/icon_ford.png',
        subTitle: 'Corzo Insur México'
    }

    $http.get("https://www.ford.mx/content/ford/mx/es_mx/.vehiclesmenu.data")
        .then(function(response) {
            $scope.content = response.data;
            console.log(response.data);
        }, function(response) {
            $scope.content = "Ocurrió un error en la aplicación";
        });
});