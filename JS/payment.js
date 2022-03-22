


    function removeRedBorder(obj) {
        if (obj.style.border == "2px solid red")
            obj.style.border = "2px solid black";
    }

   function Msg(TxtColor,Text,timer,obj) 
   {   
       document.getElementById("invalid-details").style.color=TxtColor;
       document.getElementById("invalid-details").innerHTML=Text;
       setTimeout(function(){
           document.getElementById("invalid-details").innerHTML="";
           removeRedBorder(obj);
       },timer);
   }

   function validate_creditcardnumber()
    {
            var re16digit = /^\d{16}$/
            if (document.myform.text1.value.search(re16digit) == -1){
                document.getElementById("ccnum").style.border = "3px solid red";  
                Msg("red","Entered detail is half completed or invalid !",3000,document.myform.text1);
                return true;
            }
            else
            {
                //document.getElementById("ccnum").style.border = "3px solid green";
                return false;
            }
    } 
    function check() {
        email = document.getElementById("email").value;
        filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (filter.test(email)) 
        {
            //document.getElementById("email").style.border = "3px solid green";  
            return true;
        }
        else
        {
            document.getElementById("email").style.border = "3px solid red";
            Msg("red","Entered detail is half completed or invalid !",3000,document.getElementById("email"));
            return false;
        }
    }
    function checkcvv(){
        var re3digit = /^\d{3}$/
        if (document.myform.cvv.value.search(re3digit) == -1){
            document.getElementById("cvv").style.border = "3px solid red";  
            Msg("red","Entered detail is half completed or invalid !",3000,document.myform.cvv);
            return false;
        }
        else
        {
            //document.getElementById("cvv").style.border = "3px solid green";
            return true;
        }
    }
    function checkzip(){
        var re6digit = /^\d{6}$/
        if (document.myform.zip.value.search(re6digit) == -1){
            document.getElementById("zip").style.border = "3px solid red"; 
            Msg("red","Entered detail is half completed or invalid !",3000,document.myform.zip); 
            return false;
        }
        else
        {
            //document.getElementById("zip").style.border = "3px solid green";
            return true;
        }
    }

    function checkexpyear(){
        var re4digit = /^\d{4}$/
        if (document.myform.expyear.value.search(re4digit) == -1){
            document.getElementById("expyear").style.border = "3px solid red"; 
            Msg("red","Entered detail is half completed or invalid !",3000,document.myform.expyear); 
            return false;
        }
        else
        {
            document.getElementById("expyear").style.border = "3px solid green";
            return true;
        }
    }

    