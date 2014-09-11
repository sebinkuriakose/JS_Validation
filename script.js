
$(document).ready(function () {
    resetForms();
});

function resetForms() {
    document.forms['signupForm'].reset();
}
function validateForm()
{
	var fname = document.signupForm.fname;
	var lname = document.signupForm.lname;
	var uname = document.signupForm.username;
	var password = document.signupForm.password;
	var email = document.signupForm.email;
	var errorCheck = 0;


	valFname(fname);
	valLname(lname);
	valUname(uname);
	valPass(password);
	valEmail(email);


	function valFname(fname)  
	{   
		var letters = /^[A-Za-z]+$/;
		if (fname.value.length==0) {
			$('.errorSpanFname').show();
			$('.errorSpanFname').text('Required');
			errorCheck++;
		}
		else if (fname.value.match(letters)) { 
				$('.errorSpanFname').hide(); 
		}
		else {  
				fname.focus();
				$('.errorSpanFname').show(); 
				$('.errorSpanFname').text('Must be alphabets');  
				errorCheck++;
		 };
	}

	function valLname(lname) 
	{
		var letters = /^[A-Za-z]+$/;
		if (lname.value.length==0) {
			$('.errorSpanLname').show();
			$('.errorSpanLname').text('Required');
			errorCheck++;
		}
		else if (lname.value.match(letters)) { 
				$('.errorSpanLname').hide(); 
		}
		else {  
				lname.focus();
				$('.errorSpanLname').show(); 
				$('.errorSpanLname').text('Must be alphabets');  
				errorCheck++;
		 };
	} 	


	function valUname(uname) 
	{
		if (uname.value.length==0) {
			$('.errorSpanUname').show();
			$('.errorSpanUname').text('Required');
			errorCheck++;
		}
		else { 
				$('.errorSpanUname').hide(); 
		};
	} 	

	function valPass(password) 
	{
		if (password.value.length==0) {
			$('.errorSpanPword').show();
			$('.errorSpanPword').text('Required');
			errorCheck++;
		}
		else { 
				$('.errorSpanPword').hide(); 
		};
	} 	


	function valEmail(email) 
	{
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (email.value.length==0) {
			$('.errorSpanEmail').show();
			$('.errorSpanEmail').text('Required');
			errorCheck++;
		}
		else if (email.value.match(mailformat)) { 
				$('.errorSpanEmail').hide(); 
		}
		else {  
				email.focus();
				$('.errorSpanEmail').show(); 
				$('.errorSpanEmail').text('Enter a valid mail address');  
				errorCheck++;
		 };
	} 	

	if (errorCheck==0) {
		alert("First Name: " + fname.value + '\n' + "Last Name: " + lname.value + '\n' + "User Name: " + uname.value + '\n' + "Password: " + password.value + '\n' + "Email Id: " + email.value);
	}
	else
	{
		return false;
	};

}