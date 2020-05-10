// Implementacion de AngularJS

var app = angular.module('myAppNissan', []);

app.controller('MainCTRL', function($scope, $http) {
    $scope.head = {};
    $scope.body = {};
    $scope.sendData = {};
    let data = [];
    $scope.content = [];

    $scope.head = {
        title: 'Ford Corzo Insur | México',
        icon: 'img/icon_ford.png',
        subTitle: 'Corzo Insur México'
    }

    $http.get("/controllers/dataAPI.json")
        .then(function(response) {
            for (let indexA = 0; indexA < response.data.length; indexA++) {
                for (let indexB = 0; indexB < response.data[indexA].nameplates.length; indexB++) {
                    $scope.content = {
                        category: response.data[indexA].category,
                        code: response.data[indexA].nameplates[indexB].code,
                        name: response.data[indexA].nameplates[indexB].name,
                        image: 'https://www.ford.mx' + response.data[indexA].nameplates[indexB].image,
                        pricing: response.data[indexA].nameplates[indexB].pricing.min.priceVat
                    };
                    data.push($scope.content);
                }
            }
            $scope.sendData = $scope.configAutos(data);
        }, function(response) {
            $scope.content = "Error(402) No Data Found, the request is failed.";
        });

    $scope.configAutos = function(data) {
        let rnd = [];
        for (let index = 0; index < 3; index++) {
            const element = Math.floor((Math.random() * (data.length - 1)) + 1);
            rnd.push(data[element]);
        }
        return rnd;
    };
});