(function() {
    'use strict';

    angular
        .module('webSurveyApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state', '$http'];

    function HomeController ($scope, Principal, LoginService, $state, $http) {
        
        var vm = this;
        vm.showPageTitle = showPageTitle;

        function showPageTitle(){
            $http.get("https://udn.com/news/story/2/2168232")
            .then(function success(respone){
                var responeData = respone.data;
                if(responeData.indexOf("<title>") !== -1){
                    var startIndex = responeData.indexOf("<title>") + 7;
                    var endIndex = responeData.indexOf("</title>") - startIndex;
                    vm.responeData = responeData.substr(startIndex, endIndex);
                    console.log("true" + startIndex + ", " + endIndex);
                }
            }, function fail(respone){
                
            });
        }

        // vm.account = null;
        // vm.isAuthenticated = null;
        // vm.login = LoginService.open;
        // vm.register = register;
        // vm.showPageTitle = showPageTitle;
        // $scope.$on('authenticationSuccess', function() {
        //     getAccount();
        // });

        // getAccount();

        // function getAccount() {
        //     Principal.identity().then(function(account) {
        //         vm.account = account;
        //         vm.isAuthenticated = Principal.isAuthenticated;
        //     });
        // }
        // function register () {
        //     $state.go('register');
        // }
        // function showPageTitle(){
        //     $location = "https://udn.com/news/story/2/2168232";
            
        //     alert($location.absUrl());
        //     alert(document.title);
        // }
    }
})();
