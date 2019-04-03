

var app = angular.module("app", ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/views/employeeManage/viewEmployees.html",
            controller: "employeeManageController"
        })
        .when("/Home", {
            templateUrl: "app/views/employeeManage/viewEmployees.html",
            controller: "employeeManageController"
        })
        .when("/View", {
            templateUrl: "app/views/employeeManage/viewEmployees.html",
            controller: "employeeManageController"
        })
        .when("/Add", {
            templateUrl: "app/views/employeeManage/addEmployee.html"
        })

        .when("/blue", {
            templateUrl: "blue.htm"
        })
        .otherwise({
            templateUrl: "app/views/employeeManage/viewEmployees.html"

        });
});





//var app = angular.module("app", ['ngRoute']);


//app.config(function ($routeProvider) {
//    $routeProvider
//        .when("/", {
//            templateUrl: "app/views/employeeManage/viewEmployees.html",
//            controller: "employeeManageController"
//        })
//        .when("/Home", {
//            templateUrl: "app/views/employeeManage/viewEmployees.html",
//            controller: "employeeManageController"
//        })
//        .when("/View", {
//            templateUrl: "app/views/employeeManage/viewEmployees.html",
//            controller: "employeeManageController"
//        })
//        .when("/Add", {
//            templateUrl: "app/views/employeeManage/addEmployee.html"
//        })

//        .when("/blue", {
//            templateUrl: "blue.htm"
//        })
//        .otherwise({
//            templateUrl: "app/views/employeeManage/viewEmployees.html"

//        });
//});

////var employeeManageService = angular.module('employeeManageService', [])

//app.factory('employeeManageApi', function ($http) {

//    var baseUrl = "https://localhost:44308/api/";

//    var employeeManageApi = {};

//    employeeManageApi.getEmployees = function () {
//        return $http.get(baseUrl + "EmployeeManage")
//            .then(function (success) {
//                var vvv = success;
//            });
//    };

//    return employeeManageApi;
//});



//app.controller('employeeManageController', function ($scope, employeeManageApi) {
//    $scope.message = "John";
//    var vvvv = [];

//    getEmployees();

//    function getEmployees() {

//        var vvvvv = employeeManageApi.getEmployees()

//    };
//});



