(function () {

    angular.module('angularWeatherServices', [])
        .factory('weatherSearchService', ['$http', function ($http) {
            return {
                getWeatherByCityName: function (cityName) {
                    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial';
                    return $http({
                        method: 'GET',
                        url: apiUrl
                    });
                }
            };
        }]);

})();
