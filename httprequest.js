
function getAnAccountRequest() {
  let request = new XMLHttpRequest();
  request.onload = function(){
    let anAccount = document.createElement('p');
    anAccount.innerText = request.responseText;
    anAccount.id = 'account-id';
    document.getElementById('anAccount').appendChild(anAccount);
  }
  request.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAnAccount/1");
  request.send();
}

function getAllAccountRequest() {
  for

  let request = new XMLHttpRequest();
  request.onload = function() {
    let account = document.createElement('p');
    account.innerText = request.reponseText;
    document.getElementById('allAccounts').appendChild(account);
  }

  request.open("GET", "http://localhost:8080/AccountSETemplate/api/account/getAllAccounts")
  request.send();
}


function addingChild() {
  let myH1 = document.createElement('h1');
  myH1.innerText = 'Page Header';
  myH1.id = 'header-text';
  document.getElementById('header-box').appendChild(myH1);
}
