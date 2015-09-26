angular.module('EfgInfoApp.MainController', ['ui.bootstrap']).
controller('MainController', function ($scope, PdfTemplateService) {

    $scope.birthdays = [];
    $scope.bDate = "";
    $scope.bName = "";
    $scope.addBirthday = function () {
        $scope.birthdays.push({
            date: $scope.bDate,
            name: $scope.bName
        });
        console.log($scope.birthdays);
    };
    $scope.printBirthday = function () {
        PdfTemplateService.setHeadline('Geburtstage');
        PdfTemplateService.setFooterText('Jesus sprach: Wer mich liebt, der wird mein Wort halten; und mein Vater wird ihn lieben, und wir werden zu ihm kommen und Wohnung bei ihm nehmen. (Johannes 14,23)');
        PdfTemplateService.openPDF();
    };

});
