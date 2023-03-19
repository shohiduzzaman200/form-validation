function validation(){

    var username = document.login.name.value;
    var str = username.slice(0,1);
    var password =  document.login.password.value;
    var eml = document.login.email.value;
    var numb  =  document.login.num.value;
    if( password=="" || username==""){
        alert("Enter your password or username");
        return;
    }

    if(password.length<6){
        alert("Maximum six digit password needed");
        return;
    }
    if(str=="@" || str=="_" || str=="!"){
        alert("First letter @,_and also ! are not allow");
        return;
    }
    if(eml.charAt(eml.slice(0,1)=='@' || eml.length-10)!='@' || eml.charAt(eml.length-9)!='g' || eml.charAt(eml.length-8)!='m' || eml.charAt(eml.length-7)!='a' || eml.charAt(eml.length-6)!='i' || eml.charAt(eml.length-5)!='l' || eml.charAt(eml.length-4)!='.' || eml.charAt(eml.length-3)!='c' || eml.charAt(eml.length-2)!='o' || eml.charAt(eml.length-1)!='m'){
        alert("Invalid email address");
        return;
    }
    
    if(numb.length<11){
        alert("Need maximum 11 digit valid number.");
        return;
    }

}

