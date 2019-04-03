app.factory('employeeManageApi', function ($http) {

    var baseUrl = "https://localhost:44308/api/";

    var employeeManageApi = {};

    employeeManageApi.getEmployees = function () {
        return $http.get(baseUrl + "EmployeeManage")
            .then(function (success) {
                var vvv = success;
            });
    };

    return employeeManageApi;
});