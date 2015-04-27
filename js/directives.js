(function () {

    angular.module('angularWeatherDirectives', [])
        .directive('weatherSearch', [function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/weather-search.html',
                controller: 'indexController',
                controllerAs: 'index'
            };
        }]);

})();
