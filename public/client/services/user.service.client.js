/**
 * Created by guhan on 2/20/16.
 */
(function(){
    angular
        .module("TopicApp")
        .factory('UserService', UserService);


    function UserService($http) {
        var service = {};

        service.findUserByUsername = function(username) {
           
            return $http.get("/api/users/username?username=" + username);
        };

        service.findUserByCredentials = function(username, password) {

            return $http.get("/api/users/usernameAndPassword?username=" + username + "&password=" + password);
        };

        service.finAllUsers = function() {

            return $http.get("/api/users/allUser")
                .success(function(response){
                    var users = response;
                    return users;
                });
        };

        service.createUser = function(user) {
            return $http.post("/api/users", user);

        }

        service.deleteUserById = function(id) {
            return $http.delete("/api/users/" + id)
                .success(function(response){
                    console.log("delete " + id);
                });
        }

        service.updateUser = function(id, user) {
            return $http.put("/api/users/" + id, user);

        }
        return  service;
    }
})();