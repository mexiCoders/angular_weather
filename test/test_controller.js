describe('IndexController', function () {
    var controller,
        scope,
        $httpBackend;
    beforeEach(module('angularWeather'));
    beforeEach(inject(function ($rootScope, $controller, $http, _$httpBackend_, _weatherSearchService_) {
            scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('/api').
                      respond({name: 'test weather name'});
            var mockedService = {
                getWeatherByCityName: function (cityName) {
                    return $http({
                        method: 'GET',
                        url: '/api'
                    });
                }
            };
            controller = $controller('indexController', {
                $scope: scope,
                weatherSearchService: mockedService
            });
        }));
    it('should test assignment in the controller', function () {
            controller.getWeatherByCityName('Guadalajara');
            $httpBackend.flush();
            expect(controller.weather).toBeDefined();
            expect(controller.weather.name).toBe('test weather name');
    });
});
