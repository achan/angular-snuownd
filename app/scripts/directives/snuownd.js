'use strict';

angular.module('angularSnuowndApp')
  .directive('snuownd', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the snuownd directive');
      }
    };
  });
