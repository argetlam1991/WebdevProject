/**
 * Created by guhan on 4/12/16.
 */
(function(){
    angular
        .module("TopicApp")
        .factory('EditorService', EditorService);


    function EditorService($http) {
        var service = {};

        service.findArticleByAuthor = function(author) {
            return $http.get("/api/articles/author/" + author);
        };

        service.findArticleById = function(id) {
            return $http.get("/api/articles/id/" + id);
        };

        service.createArticle = function(article) {
            return $http.post("/api/articles", article);

        }

        service.deleteArticle = function(id) {
            return $http.delete("/api/articles/" + id)
                .success(function(response){
                    console.log("delete " + id);
                });
        }

        service.updateArticle = function(id, article) {
            return $http.put("/api/articles/" + id, article);

        }
        return  service;
    }
})();