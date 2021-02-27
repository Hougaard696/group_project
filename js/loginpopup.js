function openForm() {
    document.getElementById("loginForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("loginForm").style.display = "none";
  }
  
  function validateForm() {
    
   let userName = document.getElementById("username").value;
   let pwd = document.getElementById("psw").value;

   if (userName=="Ultimate" && pwd=="password") {
     alert('Welcome to the Madness')
      }
    else {
    alert('Did you honestly think that would word!!')
   }
  }
