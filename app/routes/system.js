'use strict';

//Setting up route
angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            // For unmatched routes:
            $urlRouterProvider.otherwise('/');

            // states for my app
            $stateProvider              
                .state('home', {
                    url: '/',
                    templateUrl: 'app/views/index.html'
                })
                .state('auth', {
                    templateUrl: 'app/views/index.html'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/views/about.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'app/views/contact.html'
                })
                .state('resume', {
                    url: '/resume',
                    templateUrl: 'app/views/resume.html'
                })
                .state('blog', {
                    abstract: true,
                    url: '/blog',
                    templateUrl: 'app/views/blog.html'
                })
                .state('blog.list', {
                    url: '/list',
                    templateUrl: 'app/views/blog.list.html'
                })
                .state('blog.article', {
                    url: '/:year/:month/:day/:title/',
                    templateUrl: function (stateParams){
                        if (stateParams.year != null && stateParams.year != ''){
                            return  stateParams.year + '/' + stateParams.month + '/' + stateParams.day + '/' + stateParams.title + '/index.html';
                        }
                        else
                            return 'app/views/blog.html';
                    }
                });
                /*.state('blog', {
                    url: '/blog',
                    templateUrl: 'app/views/blog.html'
                })
                .state('article', {
                    url: '/blog/:year/:month/:day/:title/',
                    templateUrl: function (stateParams){
                        if (stateParams.year != null && stateParams.year != ''){
                            return  stateParams.year + '/' + stateParams.month + '/' + stateParams.day + '/' + stateParams.title + '/index.html';
                        }
                        else
                            return 'app/views/blog.html';
                    }
                });*/
        }
    ])
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
