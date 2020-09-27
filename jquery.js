    function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myFunction1() {
  var x = document.getElementById("myInput1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$(document).ready(function() {
    $("#register").click(function() {
    var firstname = $("#fname").val();
    var lastname = $("#lname").val();
    var username  = $("#uname").val();
    var email = $("#email").val();
    var password = $("#myInput").val();
    var cpassword = $("#myInput1").val();
        
        if (firstname == '' ||lastname == '' ||username == '' || email == '' || password == '' || cpassword == '') {
                 alert("Please fill all fields...!!!!!!");
                 return false;
        } 
        else if ((password.length) < 8) {
                alert("Password should atleast 8 character in length...!!!!!!");
                return false;
        } 
        else if (!(password).match(cpassword)) {
                 alert("Your passwords don't match. Try again?");
                 return false;
        } 
        else {
                 alert("You have Successfully Registered!" + "\n" + firstname  + "\n" + lastname + "\n" + username + "\n" + email);
                 return true;
        }
    });
    });
