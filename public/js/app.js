(function()
{
    var LocalSiteApp = angular.module('LocalSiteApp',['ui.router','ExpenseModule'])
        .config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

            RestangularProvider.setBaseUrl('/api');

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home',
                {
                    url: '/',
                    template: '<h3>hello Angular!</h3>'
                })
                .state('expense',
                {
                    url: '/expense',
                    controller: 'ExpenseListController',
                    templateUrl: 'js/ng/expense/list.tpl.html'
                });
        });
})();