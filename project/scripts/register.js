function Person(email,password){
    this.email = email;
    this.password = password;
}
document.addEventListener("DOMContentLoaded",function() {

 document.getElementById("btn-register").addEventListener("click", function(){
 
    let person_email = document.getElementById("email-input-register").value;
 let person_password = document.getElementById("password-input-register").value;
 
let person = new Person(person_email,person_password);

if (localStorage.database) {
    let users = JSON.parse(localStorage.database);
    if (users.length){
        users.push(person);
        localStorage.database = JSON.stringify(users);
    }
else{
    let users_array = [];
    users_array.push(users);
    users_array.push(person);
    localStorage.database = JSON.stringify(users_array);
}
}
else{
    localStorage.database = JSON.stringify(person);
}
alert("You have successfully registered")
document.location.href = "login.html";

});
});//dom