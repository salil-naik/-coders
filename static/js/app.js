function signup(){
    let name = document.getElementById('user-name').value;
    let pw1 = document.getElementById('password1').value;
    let pw2 = document.getElementById('password2').value;
    console.log(pw2);
    console.log(name);

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    var myHeaders = {
        "Content-Type": "application/json"
    }
    
    var raw = JSON.stringify({"username":name,"password":pw1,"confirmPassword":pw2});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    var signupStatus;
    var redirectPostSignup = 'user-login.html';

    fetch("https://hack-by-the-beach.herokuapp.com/users/signup", requestOptions)
      .then(response => {console.log(response); signupStatus=response.status; return response.text();})
      .then(result => {console.log(result); if(signupStatus==200){alert(result.message); window.location=redirectPostSignup}})
      .catch(error => console.log('error', error));

    
}/** */


function login(){

  let name = document.getElementById('user-name').value;
  let pw1 = document.getElementById('password1').value;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"username":name,"password":pw1});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  var loginStatus;
  var remedyEntryForm = 'https://letzcode.in';

  fetch("https://hack-by-the-beach.herokuapp.com/users/signin", requestOptions)
    .then(response => {response.text(); loginStatus = response.status;})
    .then(result => {console.log(result); if(loginStatus==200){window.location = remedyEntryForm}})
    .catch(error => console.log('error', error));
}

