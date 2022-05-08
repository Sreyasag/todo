function validate(callback){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    if(user.value=="admin" && pass.value== "12345"){
        callback();
        return;
    }else{
        
        document.getElementById("err").style.visibility = "visible";
        return;
    }
}

function redir() {
  window.location.href ="todo.html";
  
   
}


    





