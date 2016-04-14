/**
 * Created by guhan on 4/13/16.
 */
(function(){
    angular
        .module("TopicApp")
        .controller("HomeController", HomeController);

    function HomeController($scope, $location, $rootScope, EditorService) {
        $scope.getArticles = getArticles;
        getArticles();

        function getArticles() {

            EditorService.findArticleByAuthor($rootScope.user.username)
                .then(function success(response) {
                    $scope.articles = response.data;
                }, function err(response) {
                    console.log(response);
                })
        }

    }
})();