
function removeRedBorder(obj) {
    if (obj.style.border == "3px solid red")
        obj.style.border = "3px solid black";
}

function redBorder(obj) 
{
    obj.style.border = "3px solid red";
}

function Msg(TxtColor, Text, timer, obj=null) {
    document.getElementById("invalid-details").style.color = TxtColor;
    document.getElementById("invalid-details").innerHTML = Text;
    setTimeout(function () {
        document.getElementById("invalid-details").innerHTML = "";
        if(obj!=null)
        removeRedBorder(obj);
    }, timer);
}


function checkexpmonth() {

    if (parseInt(document.getElementById("expmonth").value)>=1&&parseInt(document.getElementById("expmonth").value)<=12){
        return true;
    }
    else {
        return false;
    }
}

function checkexpyear() {
    
    let curDate = new Date();
    let year = curDate.getFullYear();
    year+=7;
    
    if (document.getElementById("expyear").value.length == 4 && parseInt(document.getElementById("expyear").value) <= year && parseInt(document.getElementById("expyear").value) >= curDate.getFullYear() ) {
        return true;
    }
    else {
        return false;
    }
}

function validate_creditcardnumber() {

    if (document.getElementById("ccnum").value.length == 16) {
        return true;
    }
    else{
        return false;
    }
}

function checkCvv()
{
    if(parseInt(document.getElementById("Cvv").value) >=1 && parseInt(document.getElementById("Cvv").value) <= 999&&document.getElementById("Cvv").value!=""&&document.getElementById("Cvv").value.length==3) 
    {  
        return true;
    }
    else {   
        return false;
    }
}


function validateName()
{
    if(document.getElementById("cname").value!="")
    return true;
    else
    return false;
}

function validatePaymentDetails() {

    if(validateName()==false)
    {
        redBorder(document.getElementById("cname"));
        Msg("red","Kindly enter name !",3000,document.getElementById("cname"));
    }
    else if(validate_creditcardnumber()==false)
    {   
        redBorder(document.getElementById("ccnum"));
        Msg("red","Kindly enter valid card number !",3000,document.getElementById("ccnum"));
    }
    else if(checkexpmonth()==false)
    {   
        redBorder(document.getElementById("expmonth"));
        Msg("red","Kindly enter valid expiry month !",3000,document.getElementById("expmonth"));
    }
    else if(checkexpyear()==false)
    {
        redBorder(document.getElementById("expyear"));
        Msg("red","Kindly enter valid expiry year !",3000,document.getElementById("expyear"));
    }
    else if(checkCvv()==false)
    {
        redBorder(document.getElementById("Cvv"));     
        Msg("red","Kindly enter valid cvv number !",3000,document.getElementById("Cvv"));
    }
    else
    {   
        document.getElementById("invalid-details").style.color="green";
        document.getElementById("invalid-details").innerHTML="Generating an OTP...";
      
        setTimeout(function(){
             document.getElementById("invalid-details").innerHTML="";
             let otp = Math.round(Math.random()*1000+442610);
             alert("Your OTP is " + otp + " for Paradise hotel room booking. Don't share it with anyone. Please do remember it.");
             sessionStorage.setItem("OTP",otp);
             setTimeout(function(){window.open("../HTML/booking-receipt.html",'_self')},500);

            },3000);

         
    }
}

function makeFieldEmpty(textField)
{
	textField.value="";
}

function setPage()
{
    makeFieldEmpty(document.getElementById("cname"));
    makeFieldEmpty(document.getElementById("ccnum"));
    makeFieldEmpty(document.getElementById("expmonth"));
    makeFieldEmpty(document.getElementById("expyear"));
    makeFieldEmpty(document.getElementById("Cvv"));
}