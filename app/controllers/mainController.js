angular.module('EfgInfoApp.MainController', []).
controller('MainController', function ($scope, PdfTemplateService) {
    $scope.actions = [
        {name: 'Drucken', action: print}
    ];

    $scope.rows = [];
    $scope.footer = "";
    $scope.headline = "";

    function print() {
        PdfTemplateService.setHeadline($scope.headline);
        PdfTemplateService.setTableContent($scope.rows);
        PdfTemplateService.setFooterText($scope.footer);
        PdfTemplateService.openPDF();
    };

});
