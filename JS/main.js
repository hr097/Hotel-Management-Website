


/*var image_count=1; //? code for image sliders

function changeImage()
{
  let Images = [
    "IMAGES/image6.jpg",
    "IMAGES/image5.jpg",
    "IMAGES/image3.jpg",
    "IMAGES/image2.jpg",
    "IMAGES/image1.jpg",
    "IMAGES/image.jpg",
    "IMAGES/image.jpg",
    "IMAGES/image.jpg",
    "IMAGES/image.jpg",
  ];

  document.getElementById("body").style.backgroundImage = "url('"+Images[image_count]+ "')";
  image_count++;
  if(image_count==9)
  image_count=0;
}

setInterval(changeImage,3000);
*/

function showFullImage(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

function navbar_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function navbar_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

