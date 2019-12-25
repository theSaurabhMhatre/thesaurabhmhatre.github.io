var app = angular.module("portfolioApp", []);
app.controller("portfolioController", function ($scope) {
    $scope.theme = false;
    $scope.color = {color: "#FFFFFF80"};
    $scope.social = {
        color: "#1D1E22",
        border: "#1D1E22",
        background: "#FFFFFF",
        padding: "0em 0.4em 0em 0.4em"
    };
    $scope.$watch("theme", function () {
        if (!$scope.theme) {
            $scope.color = {color: "#FFFFFF80"};
            $scope.social = {
                color: "#1D1E22",
                border: "#1D1E22",
                background: "#FFFFFF",
                padding: "0em 0.4em 0em 0.4em"
            };
        } else {
            $scope.color = {color: "#1D1E22"};
            $scope.social = {
                color: "#FFFFFF",
                border: "#1D1E22",
                background: "#1D1E22",
                padding: "0em 0.4em 0em 0.4em"
            };
        }
    });
});