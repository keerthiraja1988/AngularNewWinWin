
app.controller('employeeManageController', function ($scope, employeeManageApi) {
    $scope.message = "John";
    var vvvv = [];

    getEmployees();

    function getEmployees() {

        var vvvvv = employeeManageApi.getEmployees()

    };
});