(function () {

    angular.module('angularWeatherControllers', [])
        .controller('indexController', ['$http', function ($http) {
            var self = this;
            this.getWeatherByCityName = function (cityName) {
                var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName
                $http({
                    method: 'GET',
                    url: apiUrl
                }).success(function (data) {
                    self.weather = data;
                });
            };
        }]);

})();
