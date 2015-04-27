(function () {

    angular.module('angularWeatherControllers', [])
        .controller('indexController', ['$http', function ($http) {
            var self = this;
            this.getWeatherByCityName = function (cityName) {
                var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial';
                self.error = undefined;
                self.weather = undefined;
                $http({
                    method: 'GET',
                    url: apiUrl
                }).success(function (data) {
                    if (data.cod && data.cod === '404') {
                        self.error = '"' + cityName + '"' + ' not found, enter a valid city or zip code';
                    } else {
                        self.weather = data;
                    }
                }).error(function () {
                    self.error = 'There was an error trying to fetch "' + cityName + '"';
                });
            };
        }]);

})();
