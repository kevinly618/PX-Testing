/*alert('hello'); */


// GAINSIGHT PX INITIALIZER/binder  Logged in Visitors
(function(n,t,a,e){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-9EQZKYSPO8MH-2");

function loginA(){
  var a = "kevinly618@gmail.com"

        aptrinsic("identify",
          {
          //User Fields
            "id": a, // Required for logged in app users
            "email": a,
            "firstName": "Kevin",
            "lastName": "Ly",
          },
          {
          //Account Fields
            "id":"1P02JCQSL9U0L1CYDINVA002GDEEI2LK32JS", //Required
            "name":"Betty Nguyen Corporation",
         });
    window.alert("Done");
}

function loginB(){
  var a = "bsons@gmail.com"

        aptrinsic("identify",
          {
          //User Fields
            "id": a, // Required for logged in app users
            "email": a,
            "firstName": "Betty",
            "lastName": "S",
          },
          {
          //Account Fields
            "id":"1P02JCQSL9U0L1CYDINVA002GDEEI2LK32JS", //Required
            "name":"Betty Nguyen Corporation",
         });
    window.alert("Done");
}
// // LOGIN PORTION AND PX IDENTIFY CODE
// function login() {
//   //var a = document.form.usermail.value;
//   var a = document.getElementById("usermail").value;
//   var b;
//   var c;
//
//   if (a != "") {
//     if (a == "kevinly618_QA@gmail.com") {
//       alert("valid User");
//       b = a.substr(0, 8);
//
//
// //PX IDENTIFICAITON PORTION for Known Vistors
//       aptrinsic("identify",
//         {
//         //User Fields
//           "id": a, // Required for logged in app users
//           "email": a,
//           "firstName": "Kevin",
//           "lastName": "Ly",
//         },
//         {
//         //Account Fields
//           "id":"1P02JCQSL9U0L1CYDINVA002GDEEI2LK32JS", //Required
//           "name":"Betty Nguyen Corporation",
//        });
//
//     window.location = "index.html"; // Keep your index page (page you want to navigate after login)
//
//
//   } else if (a == "bsons_QA@gmail.com") {
//       alert("valid User");
//
//       b = a.substr(0, 8);
//       window.location = "index.html"; // Keep your index page (page you want to navigate after login)
//
// //PX IDENTIFICAITON PORTION for Known Vistors
//       aptrinsic("identify",
//         {
//         //User Fields
//           "id": a, // Required for logged in app users
//           "email": a,
//           "firstName": "Betty",
//           "lastName": "Corp",
//         },
//         {
//         //Account Fields
//           "id":"1P02JCQSL9U0L1CYDINVA002GDEEI2LK32JS", //Required
//           "name":"Burlington & Sons Corporation",
//        });
//
//
//     }
//     else
//       alert("Invalid User,enter kevinly618_QA@gmail.com or bsons_QA@gmail.com");
//   } else
//     alert("enter kevinly618_QA@gmail.com or bsons_QA@gmail.com");
//   return b;
// }


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content https://www.w3schools.com/howto/howto_js_filter_dropdown.asp */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
