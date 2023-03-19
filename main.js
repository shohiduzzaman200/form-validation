function validation(){

    var username = document.login.name.value;
    var str = username.slice(0,1);
    var password =  document.login.password.value;
    if( password=="" && username==""){
        alert("Enter your Password and useraame");
        return;
    }
    if( username==""){
        alert("Please enter your Username.");
        return;
    }
    if( password==""){
        alert("Enter your ");
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

}

