var countOTP = 0;
function setPage()
{   
    document.getElementById("main-body").style.display="none";
}

function printReceipt()
{
  document.getElementById("invalid-details").style.display="none";
  document.getElementById("print-Receipt").style.display="none";
  setTimeout(function(){
      window.print();
      document.getElementById("print-Receipt").style.display="block";
  },100);

}
function hideOtpPage()
{
    document.getElementById("otp-page").style.display="none";
    document.getElementById("main-body").style.display="block";
}
function makeReceipt()
{
    let receiptNo = Math.round(Math.random()*10000+26141);
    let paymentRefNo = sessionStorage.getItem("payment-reference-number");
    let hotelVenue = sessionStorage.getItem("hotel-venue");
    let billAmount = sessionStorage.getItem("bill-amount");
    let guests = sessionStorage.getItem("guests");
    let rooms = sessionStorage.getItem("rooms");
    let parking_fac = sessionStorage.getItem("parking-facilities");
    let packageType = sessionStorage.getItem("packageType");
    let Name = sessionStorage.getItem("name");
    let email = sessionStorage.getItem("email");
    let ext_ins = sessionStorage.getItem("extra-instruction");
    let book_time = sessionStorage.getItem("booking-time");
    let book_date = sessionStorage.getItem("booking-date");
    
    document.getElementById("receiptNo").innerHTML = receiptNo;
    document.getElementById("CusName").innerHTML = Name;
    document.getElementById("CusEmail").innerHTML = email;
    document.getElementById("Hotel-Venue").innerHTML = hotelVenue ;
    document.getElementById("package-type").innerHTML = packageType;
    document.getElementById("Guests").innerHTML = guests;

    // room allocation logic
    let temp = parseInt(rooms);
    let digit = Math.round(Math.random()*1000);
    let roomNo = [];
    let i=1;
    for(i=1;i<=temp;i++)
    {   
        roomNo.push(digit++);
    }
    
    document.getElementById("RoomsNo").innerHTML = roomNo.toString();
    document.getElementById("booking-date").innerHTML = book_date;
    document.getElementById("booking-time").innerHTML = book_time;
    document.getElementById("park-fac").innerHTML = parking_fac;
    document.getElementById("ext-ins").innerHTML = "\"" +ext_ins+"\"";
    document.getElementById("bill-amt").innerHTML = billAmount;
    document.getElementById("pay-ref-no").innerHTML = paymentRefNo;

}
function getReceipt()
{
    hideOtpPage();
    makeReceipt();
}
function validateOTP()
{
    let otp = document.getElementsByName("OTP")[0].value;
    if(parseInt(otp)==parseInt(sessionStorage.getItem("OTP")))
    {
        sessionStorage.setItem("payment-reference-number","HTLPRDSRMBKD"+otp+2611008141);
        getReceipt();
    }
    else
    {
        document.getElementById("invalid-OTP").style.color="red";
        document.getElementById("invalid-OTP").innerHTML = "Invalid OTP !";
        setTimeout(function(){
        document.getElementsByName("OTP")[0].value="";
        document.getElementById("invalid-OTP").innerHTML="";
        },3000);
        countOTP++;
    }

    if(countOTP>2)
    {
        setTimeout(function(){ alert("Oops ! OTP entering limit reached."); window.open("../HTML/payment.html",'_self') },1000);
    }
}