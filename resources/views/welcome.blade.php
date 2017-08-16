<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>
        <link rel="stylesheet" type="text/css" href="{!! asset('css/bootstrap.min.css') !!}" >
        <link rel="stylesheet" href="{!! asset('css/bootstrap-material-design.min.css') !!}">
        <link rel="stylesheet" href="{!! asset('css/ripples.min.css') !!}">
        <link rel="stylesheet" href="{!! asset('css/main.css') !!}">

    </head>
    <body ng-app="LocalSiteApp">
        <div class="container">
            @include('navbar')

            <div ui-view>

            </div>
        </div>

        <script src="{!! asset('js/vendor/jquery-3.2.1.min.js') !!}"></script>
        <script src="{!! asset('js/vendor/bootstrap.min.js') !!}"></script>
        <script src="{!! asset('js/vendor/ripples.min.js') !!}"></script>
        <script src="{!! asset('js/vendor/material.min.js') !!}"></script>
        <script src="{!! asset('js/vendor/angular.min.js') !!}"></script>
        <script src="{!! asset('js/vendor/angular-ui-router.min.js') !!}"></script>
        <script src="{!! asset('js/vendor/angular-resource.min.js') !!}"></script>
        <script src="{!! asset('js/vendor/lodash.min.js') !!}"></script>
        <script src="{!! asset('js/vendor/restangular.min.js') !!}"></script>

        <script src="{!! asset('js/ng/api/api.base.js') !!}"></script>
        <script src="{!! asset('js/ng/api/api.expenses.js') !!}"></script>
        <script src="{!! asset('js/ng/expense/list.js') !!}"></script>
        <script src="{!! asset('js/app.js') !!}"></script>
        <script>
            $(document).ready(function() {
                $.material.init();
            });
        </script>
    </body>
</html>
