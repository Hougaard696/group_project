function openForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("loginForm").innerHTML = `<form class="formContent" name="loginInfo" id="login" >
    <h2>Login</h2>
    <div class="errorMessage"></div>
    <label for="username">Username</label></b>
    <input type="text" placeholder="Username" name="username" id="username" required>
    <br>
    <label for="psw">Password</label></b>
    <input type="password" placeholder="Enter Password" name="psw" id="psw"required>

    <button class="btn" value="Submit" onclick="validateForm()">Submit</button>
    <button class="btn cancel" onclick="closeForm()">Cancel</button>
    </form>`
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
    alert('Did you honestly think that would work!!')
   }
  }
