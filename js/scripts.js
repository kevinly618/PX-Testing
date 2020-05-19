/*alert('hello'); */
<script type="text/javascript">
  (function(n,t,a,e){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-9EQZKYSPO8MH-2");
  
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
