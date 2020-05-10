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

    var settings = {
        "url": "",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Cookie": "ak_bmsc=53DE48B20CB066D53BA1E3510EEFF8B617C1AC660A4000003C58B75EA88E664D~plCdRyhojCCpb7em0/kltyPebzTDNzBXNrbnvY+rWA0XzG/H5HMcjuEV7RuAyN2igPK4ePJYrt+p6L5XuDJfS2KEdS9OyjRKOMt9YP2chbCy9uGyVFYhVLwjyye58Im6YWoh/+PHa6yS+Ecg8WDJPF2TNlBO6zXsg0X7sRNk9WKeyLra5aTq7sX60G0lIUtU61/T+PPtSxuJn+9N+SLhHIoPBz5iyNcZ451WJCetUgRqQ="
        },
    };

    $.ajax(settings).done(function(response) {
        console.log(response);
    });
});