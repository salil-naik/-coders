function readData(){
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
    
    fetch("http://10.20.14.127:8090/users/signup", requestOptions)
      .then(response => {console.log(response);return response.text();})
      .then(result => {console.log(result);})
      .catch(error => console.log('error', error));
    
}/** */

