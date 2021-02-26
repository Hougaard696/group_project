function openForm() {
    document.getElementById("loginForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("loginForm").style.display = "none";
  }
  
  function validateForm() {
    
   let userName = document.forms["loginInfo"]["email"].value;
   let pwd = document.forms["loginInfo"]["psw"].value;
   if (userName=="xxx@email.com" && pwd=="password") {
     alert('you did it')
      }
    else {
    alert('Invalid Email or Password')
   }
  }
