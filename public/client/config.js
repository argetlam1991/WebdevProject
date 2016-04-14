/**
 * Created by guhan on 3/6/16.
 */
(function(){
    angular
        .module("TopicApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/home", {
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/register", {
                    templateUrl: "views/users/register.view.html",
                    controller: "RegisterController"
                })
                .when("/profile", {
                    templateUrl: "views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/articles/:articleId", {
                    templateUrl: "views/article/article.view.html",
                    controller: "ArticleController"
                })
                .when("/editor", {
                    templateUrl: "views/editor/editor.view.html",
                    controller: "EditorController"
                })
                .when("/admin", {
                    templateUrl: "views/admin/admin.view.html",
                    controller: "AdminController"
                })
                .when("/login", {
                    templateUrl: "views/users/login.view.html",
                    controller: "LoginController"
                })
                .otherwise({
                    redirectTo: "/home",
                });
        });
})();