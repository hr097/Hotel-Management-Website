
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
  
  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // Change image every 2 seconds
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