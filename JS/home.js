
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
  

function Msg(TxtColor,Text,timer) 
{   
	document.getElementById("feedback-form").style.color=TxtColor;
	document.getElementById("feedback-form").innerHTML=Text;
	setTimeout(function(){
		document.getElementById("feedback-form").innerHTML="";
	},timer);
}

  
  function feedbackMsg() 
  {
    if(document.getElementsByName('Name')[0].value==""||document.getElementsByName('Email')[0].value==""||document.getElementsByName('Message')[0].value=="")
    Msg('red',"Kindly fill up the feedback form first !",3000);
    else
    Msg('green','Your feedback has been recorded successfully.',3000);
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
  sessionStorage.setItem("packageType", "Silver");
  BookAndPay();
});
gold.addEventListener('click', () => {
  sessionStorage.setItem("packageType", "Gold");
  BookAndPay();
});
Delux.addEventListener('click', () => {
  sessionStorage.setItem("packageType", "Delux");
  BookAndPay();
});
Platinum.addEventListener('click', () => {
	sessionStorage.setItem("packageType", "Platinum");
  BookAndPay();
});