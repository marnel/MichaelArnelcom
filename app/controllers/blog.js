/**
 * Created by marnel on 5/11/14.
 */

angular.module('myApp').controller('BlogController', ['$scope', '$state', 'siteDataService', '$sce',
    function($scope, $state, siteDataService, $sce) {

        $scope.searchValue = '';
        $scope.isCat = true;

        siteDataService.get(function(data){
            $scope.posts = data.posts;
            $scope.categories = data.category;
            $scope.tags = data.tag;
            $scope.author = data.config.author;
        });

        $scope.navigateToArticle = function(path){
            var params = path.split("/");
            $state.go('blog.article', { year: params[0], month: params[1], day: params[2], title: params[3] }, {reload: true});
        };

        $scope.getBlogContentForList = function(article){
            if (article.excerpt){
                return $sce.trustAsHtml(article.excerpt);
            }
            else
            {
                return $sce.trustAsHtml(article.content);
            }
        }

        $scope.setTagFilter = function(tag){
            $scope.isCat = false;
            $scope.searchValue = tag;
        }

        $scope.setCatFilter = function(cat){
            $scope.isCat = true;
            $scope.searchValue = cat;
        }

        $scope.clearFilter = function(){
            $scope.searchValue = '';
        }
    }
]);