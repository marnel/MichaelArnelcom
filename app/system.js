'use strict';
/*angular.element(document).ready(function() {
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_') window.location.hash = '#!';

    //Then init the app
    angular.bootstrap(document, ['myApp']);

});*/

angular.module('myApp', ['ngResource', 'ui.bootstrap', 'ui.router','myApp.Services']).config(function($interpolateProvider){
        $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
    }
);