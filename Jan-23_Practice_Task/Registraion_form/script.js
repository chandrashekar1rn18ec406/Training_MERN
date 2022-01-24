document.getElementById("login").addEventListener("click" ,(event) => event.preventDefault());

function verifyAdmin(){
    var first = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var passsword = document.getElementById('password').value;

    if (first === "admin" && email === "123@gmail.com" && passsword === '123456'){
        alert("Login Sucessfully")
       
    }else{
        alert("Invalid user")
    }
}
