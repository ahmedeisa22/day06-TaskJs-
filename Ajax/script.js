var getAllUsers = function () {
  var xmlRequest = new XMLHttpRequest();

  xmlRequest.onreadystatechange = function () {
    if (xmlRequest.readyState === 4) {
      if (xmlRequest.status === 200) {
        var tbody = document.getElementById("tbody");
        var userData = JSON.parse(xmlRequest.response);

        for (let i = 0; i < userData.length; i++) {
          var tr = document.createElement("tr");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");

          td1.innerHTML = userData[i].id;
          td2.innerHTML = userData[i].name;
          td3.innerHTML = userData[i].username;
          td4.innerHTML = userData[i].email;

          tr.append(td1, td2, td3, td4);
          tbody.appendChild(tr);
        }
      }
    }
  };

  xmlRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
  xmlRequest.send("");
};

getAllUsers();
