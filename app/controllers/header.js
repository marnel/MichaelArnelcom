'use strict';

angular.module('myApp').controller('HeaderController', ['$scope', '$rootScope',
    function($scope, $rootScope) {

        // Default hard coded menu items for main menu
        $scope.menus = [{
            'title': 'Blog',
            'link': 'blog.list',
            'roles': ['annonymous']
        },{
            'title': 'About Me',
            'link': 'about',
            'roles': ['annonymous']
        },{
            'roles': ['annonymous'],
            'title': 'Resume',
            'link': 'resume'
        },{
            'roles': ['annonymous'],
            'title': 'Contact',
            'link': 'contact'
        }];

        $scope.isCollapsed = false;


    }
]);