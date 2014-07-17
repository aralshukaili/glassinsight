// var scroll_animations = scroll_animations ? scroll_animations : [];

// gi_app.directive('scrollAnimate', [function(){
//   return {
//     restrict: 'A',
//     scope: {
//       trigger: '&'
//       triggerStart: '&',
//       triggerEnd: '&',
//       animation: '&'
//     }
//     link: function($scope, $element, $attrs){
//       var player = this.player;
//       var duration = this.duration
//       scroll_animations.push({
//         player: this.player,
//         duration: this.duration,
//         start: start,
//         end: end,
//         lastScroll: -1
//       });
//     }
//   }
// }]);

// //  triggers
// //now
// //scrollUp
// //scrollDown
// //top
// //bottom
// //page-Y-coord

// //visible

// //top-top
// //top-bottom
// //top-yCoord
// //bottom-top
// //bottom-bottom
// //bottom-yCoord
// //Ycoord-top
// //Ycoord-bottom
// //Ycoord-Ycoord




// //  scroll-triggers
// //top-top
// //top-bottom
// //top-yCoord
// //bottom-top
// //bottom-bottom
// //bottom-yCoord
// //Ycoord-top
// //Ycoord-bottom
// //Ycoord-Ycoord

// window.onscroll = function (event) {
//   for(var i = 0; i < scroll_animations.length; i++){
//     var scroll = Math.max(Math.min(window.scrollY, scroll_animations[i].end), scroll_animations[i].start);
    
//     if(scroll_animations[i].lastScroll == scroll)
//       continue;
//     // console.log(scroll_animations[i].start, scroll_animations[i].end, scroll);
//     scroll_animations[i].lastScroll = scroll;
//     var time = ((scroll-scroll_animations[i].start)/(scroll_animations[i].end-scroll_animations[i].start));
//     scroll_animations[i].player.currentTime = Math.min(scroll_animations[i].duration-1, time*scroll_animations[i].duration);
//   }
// }