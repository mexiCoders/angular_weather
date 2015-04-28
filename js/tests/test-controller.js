describe('IndexController', function () {
    beforeEach(module('angularWeather'));
    // angular.module('mockedService', [])
    //     .factory(['$q', function ($q) {
    //         return {
    //             getWeatherByCityName: function () {
    //                 var deferred = $q.defer();
    //                 deferred.resolve({});
    //             }
    //         };
    //     }]);
    var controller,
        scope;
    beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('indexController', {
                $scope: scope
            });
        }));
    it('should test assignment in the controller', function () {
        expect(controller.getWeatherByCityName('test')).toEqualData({});
    });
});
