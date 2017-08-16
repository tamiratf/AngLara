(function()
{
    angular.module('api.base', [
            'restangular'
        ])
        .factory('baseApi', [
            'Restangular'
            ,function(Restangular) {
                return Restangular.withConfig(
                    function(Configurer) {
                        Configurer.setBaseUrl('/api');
                    }
                );
            }
        ]);
})();
