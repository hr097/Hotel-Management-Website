
  function navbar_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function navbar_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  function showFullImage(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // var myIndex = 0;
  // carousel();
  
  // function carousel() {
  //   var i;
  //   var x = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";  
  //   }
  //   myIndex++;
  //   if (myIndex > x.length) {myIndex = 1}    
  //   x[myIndex-1].style.display = "block";  
  //   setTimeout(carousel, 4000); // Change image every 2 seconds
  // }  
  
  // var images = [8,9,5,6,10,14,15,16];
  // var index=0;

  // setInterval(function(){
  //   document.getElementById("active-image").src = "../IMAGES/image"+images[index]+".jpg";
  //   document.getElementsByName("slidebutton")[index].class = "";
  //   document.getElementsByName("slidebutton")[index+1].class = "active";
  //   index++;
  //   if(index==8)
  //   index=0;
  // },4000);

  
  function feedbackMsg() 
  {
    if(document.getElementsByName('Name').value==""&&document.getElementsByName('Email').value==""&&document.getElementsByName('Message').value=="")
    Msg('red',"Please fill up the feedback form");
    else
    Msg('green','Your feedback has been recorded successfully.','3000');
  }


  function Msg(TxtColor,Text,timer) 
  { 
    document.getElementById("feedback-record").style.color=TxtColor;
    document.getElementById("feedback-record").innerHTML=Text;
    setTimeout(function(){
      document.getElementById("feedback-record").innerHTML="";
    },timer);
  }


const silver = document.getElementById('Silver');
const gold = document.getElementById('Gold');
const Delux = document.getElementById('Delux');
const Platinum = document.getElementById('Platinum');


function BookAndPay()
{
  window.open('../HTML/booking.html','_self');
}
silver.addEventListener('click', () => {
  sessionStorage.setItem("Package", "Silver");
  BookAndPay();
});
gold.addEventListener('click', () => {
  sessionStorage.setItem("Package", "Gold");
  BookAndPay();
});
Delux.addEventListener('click', () => {
  sessionStorage.setItem("Package", "Delux");
  BookAndPay();
});
Platinum.addEventListener('click', () => {
	sessionStorage.setItem("Package", "Platinum");
  BookAndPay();
});