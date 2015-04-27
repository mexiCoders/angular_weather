(function () {

    angular.module('angularWeatherControllers', [])
        .controller('indexController', ['weatherSearchService', function (weatherSearchService) {
            var self = this;
            this.getWeatherByCityName = function (cityName) {
                self.error = undefined;
                self.weather = undefined;
                weatherSearchService.getWeatherByCityName(cityName)
                    .success(function (data) {
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
