function changeStyling(){
    var vorm = document.getElementsByTagName("form");
    vorm[0].style.display = "block";
}

function validate(){

    var name = document.forms["myform"]["username"];               
    var email = document.forms["myform"]["mail"];    
    var password = document.forms["myform"]["p-word"];  
    var phone =  document.forms["myform"]["number"];  
    var age = document.forms["myform"]["age"];  
    var about = document.forms["myform"]["bio"]; 
    var post = document.forms["myform"]["position"];  
    var interest = document.forms["myform"]["interest"];  


if (name.value.trim().length <5)                                  
{ 
    name.style.border="3px solid red"
    
    return false; 
} 

if (email.value == "")                               
{ 
    email.style.border="3px solid red"
    return false; 
} 


if((phone.value.match(/^\d{10}$/ )))

{ 
    phone.style.border="3px solid red";
    return false; 
} 

if (about.value.length <250)                               
{ 
    alert ("bio is less than 250 words");
    about.style.border="3px solid red"
    return false; 
} 

}