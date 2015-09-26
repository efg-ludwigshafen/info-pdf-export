angular.module('EfgInfoApp.MainController', ['ui.bootstrap']).
controller('MainController', function ($scope, PdfTemplateService) {

    $scope.birthdays = [];
    $scope.bDate = "";
    $scope.bName = "";
    $scope.footer = "";
    $scope.headline = "";

    $scope.addBirthday = function () {
        $scope.birthdays.push({
            left: $scope.bDate,
            right: $scope.bName
        });
        console.log($scope.birthdays);
    };
    $scope.printBirthday = function () {
        PdfTemplateService.setHeadline($scope.headline);
        PdfTemplateService.setTableContent($scope.birthdays);
        PdfTemplateService.setFooterText($scope.footer);
        PdfTemplateService.openPDF();
    };

});
