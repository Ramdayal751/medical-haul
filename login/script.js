function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const newIpAddress= '192.168.34.243';
  if (username === "ram" && password === "987456321@") {
    alert("Login successful!");
    window.location.href = "";
  }
  else if (username === "dhiraj" && password === "06061999") {
    alert("Login successful!");
     window.location = 'http://${newIpAddress}';
  }
  else if (username === "abc" && password === "12345@") {
    alert("Login successful!");
    window.location = 'http://${newIpAddress}';
  }
  else if (username === "bkp" && password === "bh12@#ra") {
    alert("Login successful!");
    window.location = 'http://${newIpAddress}';
  }
  else {
    alert("Invalid username or password");
  }
}
