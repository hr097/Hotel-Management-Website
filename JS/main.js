var image_count=1;

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


  