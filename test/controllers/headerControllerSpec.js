describe('testando', function () {
    //Var declaration
    var $rootScope,
        $scope,
        controller;


    //Load objects instance of the angular
    beforeEach(function () {
        module('app');

        inject(function ($injector) {

            inject(function ($injector) {
                $rootScope = $injector.get('$rootScope');
                $scope = $rootScope.$new();
                controller = $injector.get('$controller')('headerController', { 
                    $scope: $scope
                })
            });
        });
    });



    it('testando', function () {
        expect(true).toBe(true);
    });


    // //Tests Tasks
    it('Should be with the $scope.teste = Leandro', function () {
       expect(true).toEqual(true);  
    });  

    it('Should be with function teste returning value teste', function () {
       expect($scope.funcao()).toBe('funcao');  
    });  
});