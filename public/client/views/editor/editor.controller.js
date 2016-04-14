/**
 * Created by guhan on 4/11/16.
 */
(function(){
    angular
        .module("TopicApp")
        .controller("EditorController", EditorController);

    function EditorController($scope, $location, $rootScope, EditorService) {
        $scope.publish = publish;
        $scope.editor = "Easy (and free!) You should check out our premium features.";
        function publish() {
            var article = {};
            article.author = $rootScope.user.username;
            article.title = $scope.title;
            article.body = $scope.editor;
            EditorService.createArticle(article);

        }

    }
})();