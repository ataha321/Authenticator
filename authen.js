const authen = function(user, pass) {
    let userID = prompt("Enter you user ID: ");
    let password = prompt("Enter your password: ");
    let respond = " ";

    if ( userID == "admin" && password == "secret"){
        alert("Welcome admin");
        respond = `Welcome Admin!`;
    
        
    }
    else{
        alert("Bad Login Credential!");
        respond = `BAD LOGIN CREDENTIALS!!`;
    }
    
    document.getElementById("class").innerHTML = `${respond}`;

    console.log (respond);
    return(respond);
    
}

let message = authen();