var currentImage = 0;
var images = [{alt: "new york skyline", url: "assets/img0.PNG"}, {alt: "los angeles skyline", url: "assets/img1.PNG"}, {alt: "washington skyline", url: "assets/img2.PNG"}];


(function() {
    
 })();

 window.addEventListener('load', function () {
    refreshImage();
  })

 function previousImage() {
    currentImage = currentImage - 1;
    if(currentImage < 0) {
        currentImage = images.length - 1;
    }
    refreshImage();
 }

 function nextImage() {
    currentImage = currentImage + 1;
    if(currentImage >= images.length) {
        currentImage = 0;
    }
    refreshImage();
 }

 function refreshImage() {
    var imgs = document.getElementsByClassName('image-src');
    var imgArray = Array.from(imgs);
    imgArray[0].alt = images[currentImage].alt;
    return imgArray[0].src = images[currentImage].url;
 }





//  var imgs = document.getElementsByClassName('image-src');
//  var imgArray = Array.from(imgs);