document.getElementById("login").addEventListener("click", function(e){
    e.preventDefault();
    let email = document.getElementById("email-input-login").value;
    let password = document.getElementById("password-input-login").value;

     let users = JSON.parse(localStorage.database);
        let foundUser = false;
        if(users.length){
        for(let user of users){
        if (email == user.email && password == user.password){
            foundUser = true;
            localStorage.user = JSON.stringify(user);
            break;
        }
        }
        }else{
            if(email == users.email && users.password){
                foundUser = true;
                localStorage.setItem("user", JSON.stringify(users));

            }
        }

        if(foundUser){
            document.location.href = "index.html";
    }
    
    else{
        alert("your inputs are wrong");
    }
});