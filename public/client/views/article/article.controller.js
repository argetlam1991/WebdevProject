/**
 * Created by guhan on 4/12/16.
 */
(function(){
    angular
        .module("TopicApp")
        .controller("ArticleController", ArticleController);

    function ArticleController($scope, $rootScope, $routeParams, EditorService) {
        $scope.getArticle = getArticle;
        var articleId = $routeParams.articleId;
        getArticle();
        

        function getArticle() {
            EditorService.findArticleById(articleId)
                .then(function success(response) {
                    $scope.title = response.data.title;
                    $scope.article = response.data.body;
                }, function err(response) {
                    console.log(response);
                })
        }

    }
})();