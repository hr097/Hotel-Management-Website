
const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
	
//EVENTS
	
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
	focusElem();
});
	
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	focusElem();
});
	
	
//FUNCTIONS

function makeFieldEmpty(textField)
{
	textField.value="";
}

function focusElem()
{
	if(container.classList.contains("right-panel-active"))
	{	
		document.getElementById("Name").focus();
		document.getElementsByTagName("title")[0].innerHTML = "Sign up | Hotel paradise";
	}   
	else
	{	
		document.getElementById("Email_signin").focus();
		document.getElementsByTagName("title")[0].innerHTML = "Sign in | Hotel paradise";
	}  

	    makeFieldEmpty(document.getElementById("Name"));
		makeFieldEmpty(document.getElementById("Email_signup"));
		makeFieldEmpty(document.getElementById("Password_signup"));
		makeFieldEmpty(document.getElementById("Email_signin"));
		makeFieldEmpty(document.getElementById("Password_signin"));

}
function makeFieldEmpty(textField)
{
	textField.value="";
}

function createAccount(name,email,password,filepath)
{   
	let data = document.getElementById(name).value;
	localStorage.setItem('Name',data);
	
	data =  document.getElementById(email).value;
	localStorage.setItem('Email',data);
   
	data =  document.getElementById(password).value;
	localStorage.setItem('Password',data);
	//setTimeout(function(){},1000);

	window.open(filepath,'_self');

    setTimeout(function(){
		makeFieldEmpty(document.getElementById("Name"));
		makeFieldEmpty(document.getElementById("Email_signup"));
		makeFieldEmpty(document.getElementById("Password_signup"));
		makeFieldEmpty(document.getElementById("Name_forgot"));
		makeFieldEmpty(document.getElementById("Email_forgot"));
		makeFieldEmpty(document.getElementById("Password_forgot"));
	},1000);
	
}

function Msg(TxtColor,Text,timer,rmBorder=0) 
{   
	document.getElementById("account").style.color=TxtColor;
	document.getElementById("account").innerHTML=Text;
	setTimeout(function(){
		document.getElementById("account").innerHTML="";

        if(rmBorder==1)
		{document.getElementById("Name").style.border = "none";}
		else if(rmBorder==2)
		{document.getElementById("Email_signup").style.border ="none";}
		else if(rmBorder==3)
		{document.getElementById("Password_signup").style.border ="none";}

	},timer);
}

function Msg2(TxtColor,Text,timer,rmBorder=0) 
{   
	document.getElementById("account_reset").style.color=TxtColor;
	document.getElementById("account_reset").innerHTML=Text;
	setTimeout(function(){
		document.getElementById("account_reset").innerHTML="";

        if(rmBorder==1)
		{document.getElementById("Name_forgot").style.border = "none";}
		else if(rmBorder==2)
		{document.getElementById("Email_forgot").style.border ="none";}
		else if(rmBorder==3)
		{document.getElementById("Password_forgot").style.border ="none";}

	},timer);
}


function Msg3(TxtColor,Text,timer,rmBorder=0) 
{   
	document.getElementById("invalid-id-password").style.color=TxtColor;
	document.getElementById("invalid-id-password").innerHTML=Text;
	setTimeout(function(){
		document.getElementById("invalid-id-password").innerHTML="";

        if(rmBorder==1)
		{document.getElementById("Email_signin").style.border = "none";}
		else if(rmBorder==2)
		{document.getElementById("Password_signin").style.border ="none";}

	},timer);
}

function checkAccount()
{   
    if(document.getElementById("Name").value==""||document.getElementById("Email_signup").value==""||document.getElementById("Password_signup").value=="")
	{    
		let count=0;
		if(document.getElementById("Name").value=="")
		{document.getElementById("Name").style.border = "2px solid red";count=1;}
		else if(document.getElementById("Email_signup").value=="")
		{document.getElementById("Email_signup").style.border = "2px solid red";count=2;}
		else
		{document.getElementById("Password_signup").style.border = "2px solid red";count=3;}

		Msg("red","Fill up all the fields given above !",3000,count);
	}
	else if(localStorage.getItem('Name')==undefined && localStorage.getItem('Email')==undefined && localStorage.getItem('Password')==undefined)
	{    
		//Msg("green","Your account is being created...",1500);
		createAccount("Name","Email_signup","Password_signup",'HTML/home.html');
	}
	else 
	{    
		let name=localStorage.getItem("Name");
		let email=localStorage.getItem("Email");
		let password=localStorage.getItem("Password");

		if(name==document.getElementById("Name").value&&email==document.getElementById("Email_signup").value&&password==document.getElementById("Password_signup").value)
		{   
			Msg("red","You already have an account !",3000);
			
			//setTimeout(function(){},1000);
			window.location.reload();
		}
		else
		{
			localStorage.clear();
			//Msg("green","Your account is being created...",1500);
			createAccount("Name","Email_signup","Password_signup",'HTML/home.html');
			// makeFieldEmpty(document.getElementById("Name"));
			// makeFieldEmpty(document.getElementById("Email_signup"));
			// makeFieldEmpty(document.getElementById("Password_signup"));
	    }
	}
	
}

function resetAccount()
{    

	if(document.getElementById("Name_forgot").value==""||document.getElementById("Email_forgot").value==""||document.getElementById("Password_forgot").value=="")
	{    
		let count=0;
		if(document.getElementById("Name_forgot").value=="")
		{document.getElementById("Name_forgot").style.border = "2px solid red";count=1;}
		else if(document.getElementById("Email_forgot").value=="")
		{document.getElementById("Email_forgot").style.border = "2px solid red";count=2;}
		else
		{document.getElementById("Password_forgot").style.border = "2px solid red";count=3;}

		Msg2("red","Fill up all the fields given above !",2000,count);
	}
	else if(confirm("Are you sure you want to reset your account details ?"))
	{
		localStorage.clear();
		createAccount("Name_forgot","Email_forgot","Password_forgot",'../index.html');
		alert("Your account details have been successfully updated !");
		
	}
}

function getAccount()
{   
	if(document.getElementById("Email_signin").value==""||document.getElementById("Password_signin").value=="")
	{    
		let count=0;
		if(document.getElementById("Email_signin").value=="")
		{document.getElementById("Email_signin").style.border = "2px solid red";count=1;}
		else if(document.getElementById("Password_signin").value=="")
		{document.getElementById("Password_signin").style.border = "2px solid red";count=2;}

		Msg3("red","Fill up all the fields given above !",2000,count);
	}
	else if(localStorage.getItem('Name')==undefined && localStorage.getItem('Email')==undefined && localStorage.getItem('Password')==undefined)
	{    
		Msg3("red","You don't have an account !",2000);
		setTimeout(function(){
		makeFieldEmpty(document.getElementById("Email_signin"));
		makeFieldEmpty(document.getElementById("Password_signin"));},1000);
	}
	else
	{
		let email=localStorage.getItem("Email");
		let password=localStorage.getItem("Password");
        if(email==document.getElementById("Email_signin").value&&password==document.getElementById("Password_signin").value)
		{   
			window.open('HTML/home.html','_self');
		}
		else
		{
			Msg3("red","Invalid login creditionals !",2000);
			setTimeout(function(){
			makeFieldEmpty(document.getElementById("Email_signin"));
			makeFieldEmpty(document.getElementById("Password_signin"));},1000);
		}

	}
}


