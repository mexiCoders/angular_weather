describe('IndexController', function () {
    var weatherSearchService;
    beforeEach(module('angularWeather'));
    beforeEach(inject(function (_$httpBackend_, _weatherSearchService_) {
            weatherSearchService = _weatherSearchService_;
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('http://api.openweathermap.org/data/2.5/weather?q=Guadalajara&units=imperial').
                      respond({name: 'test weather name'});
        }));
    it('sould test service', function () {
        promise = weatherSearchService.getWeatherByCityName('Guadalajara');
        $httpBackend.flush();
        promise.then(function () {
            expect(data.name).toBe('test weather name');
        })
    });
});
