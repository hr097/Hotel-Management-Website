
function setAmt()
{   
    let pckgType = document.getElementById('packageType').value; 
    let tax = document.getElementById('Tax');
    let numofRooms = document.getElementById('numOfRooms');
    let totalamt = document.getElementById('totalamount');
    
    if(pckgType==1)
    {     
        tax.value = ((199 * parseInt(numofRooms.value)) * 12 / 100) + " $";
        totalamt.value = (199 * parseInt(numofRooms.value)) + parseInt(tax.value) + " $";;
    }
    else if(pckgType==2)
    {
        tax.value = ((399 * parseInt(numofRooms.value)) * 12 / 100) + " $";
        totalamt.value = (399 * parseInt(numofRooms.value)) + parseInt(tax.value) + " $";;
    }
    else if(pckgType==3)
    {
        tax.value = (649 * parseInt(numofRooms.value)) * 12 / 100 + " $";
        totalamt.value = (649 * parseInt(numofRooms.value)) + parseInt(tax.value) + " $";;
    }
    else if(pckgType==4)
    {
        tax.value = (1099 * parseInt(numofRooms.value)) * 12 / 100 + " $";
        totalamt.value = (1099 * parseInt(numofRooms.value)) + parseInt(tax.value) + " $";
    }

}

function proccedToPayment()
{      
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let numofguests =  document.getElementById('noOfGuests').value;
    let hotelVenue = document.getElementById('hotel-venue').value;
    let bookDate = document.getElementById('booking-date').value;
    let bookTime = document.getElementById('booking-time').value;

    if(name!=""&&email!=""&&numofguests!=""&&hotelVenue!=""&&bookDate!=""&&bookTime!="")
    {setTimeout(function(){window.open('../HTML/payment.html','_self');},1000);}
    else
    {alert('fill up all information for booking hotel room !');}
}