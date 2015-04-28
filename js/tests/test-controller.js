describe('IndexController', function () {
    beforeEach(angular.module('angularWeatherControllers'));
    angular.module('mockedService', [])
        .factory(['$q', function ($q) {
            return {
                getWeatherByCityName: function () {
                    var deferred = $q.defer();
                    deferred.resolve({});
                }
            };
        }]);
    var controller,
        scope;
    beforeEach(angular.inject(function ($rootScope, $controller, _weatherService_) {
            scope = $rootScope.$new();
            controller = $controller('indexController', {
                $scope: scope,
                weatherService: _weatherService_
            });
        }));
    it('should test assignment in the controller', function () {
        expect(controller.getWeatherByCityName('test')).toBe({});
    });
});
