(function()
{
    angular.module('api.expenses', [
            'api.base'
        ])
        .factory('expenseApi', [
            'baseApi'
            ,function(baseApi) {
                return baseApi.withConfig(function(Configurer) {
                    Configurer.setRestangularFields({"id": "id"})
                }).all('expenses');
            }
        ]);
})();
