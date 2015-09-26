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
        pdfMake.fonts = {
            sourceSansPro: {
                normal: 'SourceSansPro-Light.ttf',
                bold: 'SourceSansPro-Semibold.ttf',
                italics: 'SourceSansPro-LightItalic.ttf',
                bolditalics: 'SourceSansPro-SemiboldItalic.ttf'
            },
            sourceSansProRegular: {
                normal: 'SourceSansPro-Regular.ttf',
                bold: 'SourceSansPro-Bold.ttf',
                italics: 'SourceSansPro-Italic.ttf',
                bolditalics: 'SourceSansPro-BoldItalic.ttf'
            }
        };

        // open the PDF in a new window
        pdfMake.createPdf(docDefinition).open();

        //        // print the PDF (temporarily Chrome-only)
        //        pdfMake.createPdf(docDefinition).print();
        //
        //        // download the PDF (temporarily Chrome-only)
        //        pdfMake.createPdf(docDefinition).download('birthdays.pdf');
    };

});
