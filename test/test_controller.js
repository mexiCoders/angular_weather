describe('IndexController', function () {
    var controller,
        scope,
        $httpBackend;
    beforeEach(module('angularWeather'));
    beforeEach(inject(function ($controller, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?q=Guadalajara&units=imperial').
                      respond({name: 'test weather name'});
            controller = $controller('indexController');
        }));
    it('should test assignment in the controller', function () {
            controller.getWeatherByCityName('Guadalajara');
            $httpBackend.flush();
            expect(controller.weather).toBeDefined();
            expect(controller.weather.name).toBe('test weather name');
    });
});
