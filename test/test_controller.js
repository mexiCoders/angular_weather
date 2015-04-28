describe('IndexController', function () {
    angular.module('mockedService', [])
        .factory(['$q', function ($q) {
            return {
                getWeatherByCityName: function () {
                    var deferred = $q.defer();
                    deferred.resolve({});
                }
            };
        }]);
    beforeEach(module('angularWeatherControllers'));
    beforeEach(module('mockedService'));
    beforeEach(inject(function ($rootScope, $controller, _weatherService_) {
            scope = $rootScope.$new()
            controller = $controller('indexController', {
                $scope: scope,
                weatherService: _weatherService_
            });
        }));
    it('should test assignment in the controller', function () {
        expect(controller.getWeatherByCityName('test')).toBe({});
    });
});
