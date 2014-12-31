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
            {name: '1km Bike ride', energy: 146400, type:'expendature'},
            {name: '1km Car drive', energy: 2.72e6, type:'expendature'},
            {name: '1km walking', energy: 0.22e6, type:'expendature'},
            {name: 'Impact by air gun', energy: 10, type:'kinetic'},
            {name: 'Impact by hunting rifle', energy: 1000, type:'kinetic'},
            {name: 'Human punch', energy: 150, type:'expendature'},
            {name: '1day of human life', energy: 10e6, type:'expendature'},
            {name: '10min hot shower', energy: 20e6, type:'expendature'},
            {name: '1sec Earths solar absorption', energy: 0.1221e18, type:'production'},
            {name: '1sec World energy consumption', energy: 1.6288038e13, type:'expendature'},
            {name: '1hr average wind turbine', energy: 2.46e9, type:'production'}

        ];

        self.energyStores = [
            {name: '1litre Gasoline', energy: 33.92e6, type:'store'},
            {name: '1kg wood for burning', energy: 10e6, type:'store'},
            {name: '1litre Water at 10m', energy: 0.0001e6, type:'store'},
            {name: '1kg Compressed air', energy: 0.5e6, type:'store'},
            {name: '1kg Anti matter', energy: 1.8e11, type:'store'},
            {name: '1kg Human Fat', energy: 37e6, type:'store'},
            {name: 'AA Battery', energy: 0.0154e6, type:'store'},
            {name: 'Car Battery', energy: 2.6e6, type:'store'},
            {name: 'Mars bar', energy: 963000, type:'store'},
            {name: 'Banana', energy: 418000, type:'store'}
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