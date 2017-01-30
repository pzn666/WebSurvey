(function() {
    'use strict';

    angular
        .module('webSurveyApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('register', {
            parent: 'account',
            url: '/activate',
            data: {
                authorities: [],
                pageTitle: '456'
            },
            views: {
                'content@': {
                    templateUrl: 'app/account/activate/activate.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                }
            }
        });
        // $stateProvider.state('register', {
        //     parent: 'account',
        //     url: '/register',
        //     data: {
        //         authorities: [],
        //         pageTitle: 'Registration'
        //     },
        //     views: {
        //         'content@': {
        //             templateUrl: 'app/account/register/register.html',
        //             controller: 'RegisterController',
        //             controllerAs: 'vm'
        //         }
        //     }
        // });
    }
})();
