/**
 * Created by marnel on 5/25/14.
 */

angular.module('myApp')
    .filter('blogSearch', function(){
        return function(items, search, isCat){
            var filtered = [];
            angular.forEach(items, function(item) {
                if (search !== ''){
                    if (isCat){
                        angular.forEach(item.categories, function(cat){
                            if (cat.name === search) { filtered.push(item); }
                        });
                    }
                    else {
                        angular.forEach(item.tags, function(tag){
                            if (tag.name === search ) { filtered.push(item); }
                        });
                    }
                }
                else{
                    filtered.push(item);
                }
            });
            return filtered;
        }
    });
