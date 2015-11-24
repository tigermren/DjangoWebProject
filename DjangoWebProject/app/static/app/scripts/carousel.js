﻿//angular.module('ui.bootstrap.demo', ['ui.bootstrap']).config(function($interpolateProvider) {
//    $interpolateProvider.startSymbol('{$');
//    $interpolateProvider.endSymbol('$}');
//}).controller('CarouselDemoCtrl', function ($scope) {
//    $scope.myInterval = 5000;
//    $scope.noWrapSlides = false;
//    var slides = $scope.slides = [];
//    $scope.addSlide = function () {
//        var newWidth = 600 + slides.length + 1;
//        slides.push({
//            image: '//placekitten.com/' + newWidth + '/300',
//            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
//              ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
//        });
//    };
//    for (var i = 0; i < 4; i++) {
//        $scope.addSlide();
//    }
//    $scope.t = 'sksksksk';
//});


angular.module('ui.bootstrap.demo', ['ui.bootstrap', 'ngAnimate', 'ngTouch']).controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: '//placekitten.com/' + newWidth + '/300',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' +
              ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
    $scope.t = 'sksksksk';
});