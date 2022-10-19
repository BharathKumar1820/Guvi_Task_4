var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all", true);
request.send();
request.onload = function () {
  var data = JSON.parse(request.responseText);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].flag);
  }
};
