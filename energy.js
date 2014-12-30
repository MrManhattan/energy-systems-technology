(function(){

    angular.module('Energy', [])
        .controller('EnergyCtrl', EnergyCtrl)
        .service('EnergyService', EnergyService)

    /**
     * Model, store everything here
     */
    function EnergyService(){

        var self = this;

        self.energyExpendatures = [
            {name: '10km Bike ride', energy: 3117, type:'distance'},

            {name: 'Shot by air gun', energy: 10, type:'kinetic'},
            {name: 'Shot by hunting rifle', energy: 1000, type:'kinetic'},
            {name: 'Human punch', energy: 150, type:'kinetic'}
        ];

        self.energyStores = [
            {name: 'Mars bar', energy: 963},
            {name: 'Banana', energy: 418}
        ];

        /**
         * Other ideas
         * Sunlight in seconds
         * Whole world energy consumption per second
         * Batteries
         * Fusion
         * Gasoline
         * Running
         * Lifting
         * Atom bomb
         * e=mc2
         * house hold
         * toasting bread
         * washing clothes
         * Industrial size wind turbine
         * Explosions
         * Burning a tree
         * Burning a candle
         * A smile
         * Sex
         * Shouting at someone
         * Shower
         * Cooking a liter of water
         * A punch
         * A Kick
         * Bullet
         */

        self.allEnergy = self.energyExpendatures.concat(self.energyStores);
    }

    /**
     *
     * @param $scope
     * @param EnergyService
     */
    function EnergyCtrl($scope, EnergyService){
        $scope.EnergyService = EnergyService;




        // after we've selected a thing, we need to trigger the recalculation

        $scope.recalc = function(){

            var comparable = $scope.selectedCompare;
            var comparee = $scope.selectedComparee;

            var ratio = Math.round((comparable.energy / comparee.energy)*100)/100;

            // Take the first thing. compare it to the other thing
            // How many bananas are there in a mars bar?
            if(ratio < 1){
                ratio = ratio * 100 +'%';
            }else{
                ratio += 'x'
            }
            $scope.ratio = ratio;
        }
    }

})();