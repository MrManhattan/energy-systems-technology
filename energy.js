(function(){

    angular.module('Energy', [])
        .controller('EnergyCtrl', EnergyCtrl)
        .service('EnergyService', EnergyService)

    /**
     * Model
     * @constructor
     */
    function EnergyService(){

        var self = this;

        self.energyExpendatures = [
            {name: '10km Bike ride', energy: 3117}
        ];

        self.energyStores = [
            {name: 'Banana', energy: 418}
        ];
    }

    /**
     *
     * @param $scope
     * @param EnergyService
     * @constructor
     */
    function EnergyCtrl($scope, EnergyService){
        $scope.EnergyService = EnergyService;
    }

})();