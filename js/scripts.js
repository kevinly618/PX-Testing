/*alert('hello'); */

function login(){
    //var a = document.form.usermail.value;
    var a = document.getElementById("usermail").value;
    var b;
    var c;

    if(a!= "")
    {
        if(a == "kevinly618@gmail.com" )
      {
         alert("valid User");

         b = a.substr(0, 8);

         window.location = "index.html";// Keep your index page (page you want to navigate after login)
      }
    else
        alert("Invalid User,enter \"kevinly618@gmail.com\"");
    }
    else
    alert("enter \"kevinly618@gmail.com\"");
      return b;
}
