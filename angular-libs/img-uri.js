function convertDataURLToImageData(dataURL, callback) {
    if (dataURL !== undefined && dataURL !== null) {
        var canvas, context, image;
        canvas = document.createElement('canvas');
        image = new Image();
        image.addEventListener('load', function(){
            console.log(image.width, image.height);
            canvas.width = image.width;
            canvas.height = image.height;
            context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            // console.log(canvas.toDataURL());
            // callback(context.getImageData(0, 0, canvas.width, canvas.height));
            callback(canvas.toDataURL());
        }, false);
        image.src = dataURL;
    }
}
angular.module('imgUri', []).directive('imgUri', [function(){
  return {
    restrict: 'E',  
    link: function(scope, element, attrs){
      
      attrs.$observe('src', function(value){
        if(value){
          convertDataURLToImageData(value, function(imageData){
            scope[attrs.ngModel] = imageData;
            scope.$apply();
          });
        }
      });
        
    }
  };
}]);