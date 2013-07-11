/**
 * Extends the Angular UI Bootstrap Carousel with touch events.
 */
angular.module('ng.bs.carousel.touch', ['ui.bootstrap.carousel'])
.directive('carousel', [function() {
  return {
    restrict: "E",
    link: function(scope, element, attributes)
    {
      var slide = {
        'startX' : 0,
        'currentX' : 0,
        'isMoved': false
      };
      $(element).on({
        'touchstart': function(e)
        {
          slide.startX = e.originalEvent.pageX;
          scope.pause();
          slide.isMoved = false;
        },
        'touchmove': function(e)
        {
          slide.currentX = e.originalEvent.pageX;

          if( slide.startX > slide.currentX && !slide.isMoved) {
            scope.next();
            slide.isMoved = true;
          }else if( slide.startX < slide.currentX && !slide.isMoved){
            scope.prev();
            slide.isMoved = true;
          }

        },
        'touchend': function(e)
        {
          scope.play();
        }
      });
    }
  };
}]);