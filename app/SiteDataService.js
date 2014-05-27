/**
 * Created by marnel on 5/18/14.
 */

angular.module('myApp.Services',[]).factory('siteDataService',
    function($resource){
        return $resource('../../site.json');
    }
);