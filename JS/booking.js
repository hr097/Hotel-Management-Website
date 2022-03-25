
 function getPackageDetails()
 {
   let pkcg =  sessionStorage.getItem('packageType');

   if(pkcg=="Platinum")
   document.getElementById("packageType").selectedIndex = 3;
   else if(pkcg=="Delux")
   document.getElementById("packageType").selectedIndex = 2;
   else if(pkcg=="Gold")
   document.getElementById("packageType").selectedIndex = 1;
   else
   document.getElementById("packageType").selectedIndex = 0;
 }
 function getAccountData()
 {   
     document.getElementById("name").value = localStorage.getItem("Name");
     document.getElementById("email").value = localStorage.getItem("Email");
     getPackageDetails();
     setAmt();
 }
 
function removeRedBorder(obj) {
    if (obj.style.border == "2px solid red")
        obj.style.border = "2px solid black";
}
function checkEmpty(obj) {
    if (obj.value == "") {
        obj.style.border = "2px solid red";
        setTimeout(function () { removeRedBorder(obj) }, 3000);
        return true;
    }
    else
        return false;

}
function setAmt() {
    let pckgType = document.getElementById('packageType').value;
    let tax = document.getElementById('Tax');
    let numofRooms = document.getElementById('numOfRooms');
    let totalamt = document.getElementById('totalamount');

    if (pckgType == 1) {
        tax.value = ((1999 * parseInt(numofRooms.value)) * 12 / 100) + " (Rupees)";
        totalamt.value = (1999 * parseInt(numofRooms.value)) + parseInt(tax.value) + " (Rupees)";;
    }
    else if (pckgType == 2) {
        tax.value = ((3999 * parseInt(numofRooms.value)) * 12 / 100) + " (Rupees)";
        totalamt.value = (3999 * parseInt(numofRooms.value)) + parseInt(tax.value) + " (Rupees)";;
    }
    else if (pckgType == 3) {
        tax.value = (10999 * parseInt(numofRooms.value)) * 12 / 100 + " (Rupees)";
        totalamt.value = (10999 * parseInt(numofRooms.value)) + parseInt(tax.value) + "(Rupees)";;
    }
    else if (pckgType == 4) {
        tax.value = (15999 * parseInt(numofRooms.value)) * 12 / 100 + " (Rupees)";
        totalamt.value = (15999 * parseInt(numofRooms.value)) + parseInt(tax.value) + " (Rupees)";
    }

}

document.getElementById('booking-date').setAttribute('min', new Date().toISOString().split('T')[0])
     
var today = new Date();
var Curtime = today.getHours() + ":" + today.getMinutes();
let month;

if((today.getMonth()+1)>9)
month = today.getMonth();
else
month = "0"+ (today.getMonth()+1);

var curDate = today.getFullYear() + "-" + month + "-" + today.getDate();

function checkMinBookDate()
{ 

  if(document.getElementById('booking-date').value==curDate)
  { 
    return true;
  }
  else
  {
    return false;
  }
}


function proccedToPayment() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let numofguests = document.getElementById('noOfGuests');
    let hotelVenue = document.getElementById('hotel-venue');
    let bookDate = document.getElementById('booking-date');
    let bookTime = document.getElementById('booking-time');

    if(checkEmpty(name)||checkEmpty(email)||checkEmpty(hotelVenue)||checkEmpty(numofguests)||checkEmpty(bookDate)||checkEmpty(bookTime))
    {
        setTimeout(function () { alert('fill up all information for booking hotel room !'); }, 1000)
    }
    else if(checkMinBookDate()==true)
    {
        alert('Advance Booking of rooms allowed only before 24 hours ! Sorry :( ');
        window.reload();
    }
    else
    {   
        sessionStorage.setItem('name',name.value);
        sessionStorage.setItem('email',email.value);
        sessionStorage.setItem('guests',numofguests.value);
        sessionStorage.setItem('hotel-venue',hotelVenue.value);
        sessionStorage.setItem('rooms',document.getElementById('numOfRooms').value);
        sessionStorage.setItem('booking-date',bookDate.value);
        sessionStorage.setItem('booking-time',bookTime.value);
        sessionStorage.setItem('bill-amount',document.getElementById('totalamount').value);
        if(document.getElementById('instructions').value!="")
        sessionStorage.setItem('extra-instruction',document.getElementById('instructions').value);
        else
        sessionStorage.setItem('extra-instruction','None');

        let i=0;
        let data =  document.getElementsByName('Parking');
        for(i=0;i<data.length;i++)
        {
            if(data[i].checked==true)
            sessionStorage.setItem('parking-facilities',data[i].value);
        }

        setTimeout(function (){window.open('../HTML/payment.html','_self')},1000);
    }
}