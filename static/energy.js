(function(){

    angular.module('Energy', [])
        .controller('EnergyCtrl', EnergyCtrl)
        .service('EnergyService', EnergyService)

    /**
     * Model, store everything here
     */
    function EnergyService(){

        var self = this;

        self.allEnergy = [
            {name: '1km Bike ride', energy: 146400, type:'expendature'},
            {name: '1km Car drive', energy: 2.72e6, type:'expendature'},
            {name: '1km walking', energy: 0.22e6, type:'expendature'},
            {name: '1day of human life', energy: 10e6, type:'expendature'},
            {name: '10min hot shower', energy: 20e6, type:'expendature'},
            {name: '1sec Earths solar absorption', energy: 0.1221e18, type:'production'},
            {name: '1sec World energy consumption', energy: 1.6288038e13, type:'expendature'},
            {name: '1hr average wind turbine', energy: 2.46e9, type:'production'},
            {name: '1litre Gasoline', energy: 33.92e6, type:'store'},
            {name: '1kg wood for burning', energy: 10e6, type:'store'},
            {name: '1kg mass at 10m height', energy: 0.0001e6, type:'store'},
            {name: '1kg Compressed air', energy: 0.5e6, type:'store'},
            {name: '1kg E=mc^2', energy: 0.9e17, type:'store'},
            {name: '1kg Human Fat', energy: 37e6, type:'store'},
            {name: 'AA Battery', energy: 0.0154e6, type:'store'},
            {name: 'Car Battery', energy: 2.6e6, type:'store'},
            {name: 'Mars bar', energy: 963000, type:'store'},
            {name: 'Banana', energy: 418000, type:'store'}
        ];
        //These are pairs of intersting comparisons hand picked
        self.curatedPairs = [
            [
                {name: '1sec Earths solar absorption', energy: 0.1221e18, type:'production'},
                {name: '1sec World energy consumption', energy: 1.6288038e13, type:'expendature'}
            ],
            [            
                {name: '1day of human life', energy: 10e6, type:'expendature'},
                {name: 'AA Battery', energy: 0.0154e6, type:'store'}
            ],
            [            
                {name: '1kg Human Fat', energy: 37e6, type:'store'},
                {name: '1km walking', energy: 0.22e6, type:'expendature'}
            ],
            [            
                {name: '1km Bike ride', energy: 146400, type:'expendature'},
                {name: '1kg mass at 10m height', energy: 0.0001e6, type:'store'}
            ],
            [            
                {name: '1litre Gasoline', energy: 33.92e6, type:'store'},
                {name: '1km Bike ride', energy: 146400, type:'expendature'}
            ],
            [            
                {name: '10min hot shower', energy: 20e6, type:'expendature'},
                {name: '1kg wood for burning', energy: 10e6, type:'store'}
            ],
            [            
                {name: 'Mars bar', energy: 963000, type:'store'},
                {name: '1km Bike ride', energy: 146400, type:'expendature'}
            ],
            [            
                {name: 'Mars bar', energy: 963000, type:'store'},
                {name: '1km walking', energy: 0.22e6, type:'expendature'}
            ],
            [            
                {name: 'Car Battery', energy: 2.6e6, type:'store'},
                {name: '1km Bike ride', energy: 146400, type:'expendature'}
            ],
            [            
                {name: '1kg wood for burning', energy: 10e6, type:'store'},
                {name: '1km Car drive', energy: 2.72e6, type:'expendature'}
            ]
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

        //Fetches an item from main pool by name string
        self.getByName = function(name){
            var result;
            for (var i = self.allEnergy.length - 1; i >= 0; i--) {
                if(self.allEnergy[i].name == name){
                    result = self.allEnergy[i];
                }
            }
            return result;
        }

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
                ratio = Math.round(ratio * 100) +'% of';
            }else{
                ratio += 'x'
            }
            $scope.ratio = ratio;
        }
        //Picks two random energies from the big pool and shows
        $scope.loadRandom = function(){

            var randomNumber1 = Math.floor((Math.random() * EnergyService.allEnergy.length));
            var randomNumber2 = Math.floor((Math.random() * EnergyService.allEnergy.length));
            var pick1 = EnergyService.allEnergy[randomNumber1];
            var pick2 = EnergyService.allEnergy[randomNumber2];
            //Prevent same-same comparison
            if(pick1 == pick2){
                randomNumber2 = Math.floor((Math.random() * EnergyService.allEnergy.length));
                pick2 = EnergyService.allEnergy[randomNumber2];
            }
            //Populate view
            $scope.selectedComparee = pick1; 
            $scope.selectedCompare = pick2;
            $scope.recalc();
        }
        //Switches the positions of the selected energies
        $scope.switchPlaces = function(){
            var temp = $scope.selectedComparee;
            $scope.selectedComparee = $scope.selectedCompare;
            $scope.selectedCompare = temp;
            $scope.recalc();
         
        }


        $scope.loadCurated = function(){

            var randomNumber = Math.floor((Math.random() * EnergyService.curatedPairs.length));
            var curatedPick = EnergyService.curatedPairs[randomNumber];
            //Populate view
            $scope.selectedComparee = EnergyService.getByName(curatedPick[1].name); 
            $scope.selectedCompare = EnergyService.getByName(curatedPick[0].name);
            $scope.recalc();
        }


        //Start out with random entries
        $scope.loadCurated();
    }   

}());